export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const {user_id, guesses} = await context.request.json();

    // Validate input
    if (!user_id || guesses == undefined) {
      return new Response("Missing required data", {status: 400})
    }

    console.log("Before prepare")
    // Inset data to leaderboard
    const bound_db_call = context.env.DB.prepare(`
      INSERT INTO Leaderboard (user_id, guesses, time_completed)
      VALUES (101, 3, CURRENT_TIMESTAMP)
      `)

    console.log("bound_db_call: ", bound_db_call)

    try {
      const res = await bound_db_call.run()
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
