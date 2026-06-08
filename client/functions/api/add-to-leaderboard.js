export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const {user_id, guesses} = await context.request.json();

    // Validate input
    if (!user_id || guesses == null) {
      return new Response("Missing required data", {status: 400})
    }

    // Inset data to leaderboard
    const stmt = context.env.DB.prepare(`
      INSERT INTO Leaderboard (user_id, guesses, time_completed)
      VALUES (?, ?, CURRENT_TIMESTAMP)`);

    await stmt.bind(user_id, guesses).run();
    
    return new Response(JSON.stringify({success: true, message: "Score updated!"}), {
      status: 200,
      headers: {"Content-Type": "application/json"},
    });
  } catch (error) {
    return new Response(JSON.stringify({error: error.message}), {
      headers: {"Content-Type": "application/json"},
    });
  }
}
