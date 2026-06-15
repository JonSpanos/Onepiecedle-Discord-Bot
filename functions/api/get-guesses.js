export async function onRequestPost(context) {

  try {
    const {user_id} = await context.request.json();
    const day = new Date().toISOString().slice(0, 10);

    // Validate input
    if (!user_id) {
      return new Response("Missing required data", {status: 400})
    }
    
    // Create table if it doesn't exist (Mostly for local DB testing)
    // Each guess for each user and ID is unique.
    await context.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS DailyGuesses (
        user_id TEXT,
        day TEXT,
        character_name TEXT,

        PRIMARY KEY (user_id, day, character_name)
    );`).run();
    

    // Prepare statement
    const result = await context.env.DB.prepare(`
      SELECT character_name FROM DailyGuesses WHERE day = ? AND user_id = ?`)
      .bind(day, user_id)
      .all();
    
    return new Response(JSON.stringify({
        success: true,
        guessed_characters: result.results,
    }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({error: error.message}), {
      status: 400,
      headers: {"Content-Type": "application/json"},
    });
  }
}
