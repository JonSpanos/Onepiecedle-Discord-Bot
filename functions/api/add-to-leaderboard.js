export async function onRequestPost(context) {
  try {
    const {user_id, guesses} = await context.request.json();

    // Validate input
    if (!user_id || guesses == null) {
      return new Response("Missing required data", {status: 400})
    }

    // Create table if it doesn't exist (Mostly for local DB testing)
    await context.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS Leaderboard (
      user_id TEXT,
      guesses INTEGER,
      time_completed DATETIME
    );`).run();

    // Prepare statement
    const stmt = context.env.DB.prepare(`
      INSERT INTO Leaderboard (user_id, guesses, time_completed)
      VALUES (?, ?, CURRENT_TIMESTAMP)`);

    // Bind statement and run
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
