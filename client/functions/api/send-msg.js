export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const { channelId, message } = await context.request.json();

  // Get best performing player for the day from leaderboard!
  const best_player = await context.env.DB.prepare(`
    SELECT user_id, guesses
    FROM Leaderboard
    WHERE DATE(time_completed) = DATE('now')
    ORDER BY guesses ASC, time_completed ASC
    LIMIT 1
  `).run().first();

  // Fetch username from ID
  const global_name_response = await fetch(
    `https://discord.com/api/v10/users/${best_player.user_id}`,
    {
      headers: {
        "Authorization": `Bot ${context.env.DISCORD_TOKEN}`,
      }
    }
  );

  const user = await global_name_response.json();

  const new_message = message + `BEST TODAY -> (${user.global_name}: ${best_player.guesses} guesses)`

  const response = await fetch(
    `https://discord.com/api/v10/channels/${channelId}/messages`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bot ${context.env.DISCORD_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: new_message }),
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
