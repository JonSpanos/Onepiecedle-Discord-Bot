export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const { channelId, message } = await context.request.json();

  const response = await fetch(
    `https://discord.com/api/v10/channels/${channelId}/messages`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bot ${context.env.DISCORD_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: message }),
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
