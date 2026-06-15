export async function getGuesses(_user_id) {
  try {
    const response = await fetch("/api/get-guesses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: _user_id,
      })
    })

    if (!response.ok) {
      throw new Error("Failed to respond")
    }

    const data = await response.json()
    return data
    
  } catch (error) {
    throw error
  }
}

export async function guess(_user_id, _character_name) {
  try {
    const response = await fetch("/api/guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: _user_id,
        guessed_character_name: _character_name,
      })
    })

    if (!response.ok) {
      throw new Error("Failed to respond")
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export async function addToLeaderboard(_user_id, num_of_guesses) {
  try {
    const response = await fetch("/api/add-to-leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: _user_id,
        guesses: num_of_guesses
      })
    })

    if (!response.ok) {
      throw new Error("Failed to respond")
    }
        
  } catch (error) {
    throw error
  }
}

export async function sendMessage(_channelId, _message) {
  try {
    const response = await fetch("/api/send-msg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        channelId: _channelId,
        message: _message
      })
    })

    if (!response.ok) {
      throw new Error("Failed to respond")
    }
       
  } catch (error) {
    throw error
  }
}