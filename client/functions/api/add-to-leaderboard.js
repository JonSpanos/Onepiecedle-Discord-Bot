export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  console.log("env keys:", Object.keys(context.env));
  console.log("DB value:", context.env.DB);

  try {
    const {user_id, guesses} = await context.request.json();

    // Validate input
    if (!user_id || guesses == null) {
      return new Response("Missing required data", {status: 400})
    }

    console.log("Before prepare")
    // Inset data to leaderboard
    const bound_db_call = context.env.DB.prepare(`
      INSERT INTO Leaderboard (103913, 1, CURRENT_TIMESTAMP)`);

    console.log("bound_db_call: ", bound_db_call)

    try {
      const res = await bound_db_call.run(user_id, guesses)
    } catch (error) {
      console.error(error)
    }
    
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
