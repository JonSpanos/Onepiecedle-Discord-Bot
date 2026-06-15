import { CHARACTERS, STATUS } from "./constants"
import { game_state } from "./game_state.js"
import {addToLeaderboard, getGuesses, guess, sendMessage} from "./api_calls.js"

// Images
import arm_haki from "../img/Armament.png"
import obs_haki from "../img/Observation.png"
import con_haki from "../img/Conqueror.png"

export function buildHeaders() {
  let infoConversions = {
    df: "Devil Fruit",
    name: "Name",
    gender: "Gender",
    affiliation: "Affiliation",
    haki: "Haki",
    bounty: "Bounty",
    height: "Height",
    origin: "Origin",
    firstarc: "First Arc",
  }
  
  let row = buildRow() // header row

  for (let info of Object.keys(CHARACTERS[0])) {
    let box = document.createElement("div")
    box.textContent = infoConversions[info]
    
    box.className = "header"
    row.append(box)
  }
}

export async function pushGuessToRow(characterEvaluation) {
  let curr_emoji = ""
  let row = buildRow() // Create new row for guess
  let box_anim_offset_idx = 0 

  const char = characterEvaluation.guessed_character

  for (let info of Object.keys(char)) {
    let box = document.createElement("div")
    let text = document.createElement("p")
    text.className = "text"

    text.textContent = assignText(info, characterEvaluation)

    // Images instead of text
    if (info == "haki") {
      if (char[info].length === 0) text.textContent = "None"; else text.textContent = ""
      char[info].forEach(haki => {
        let img = document.createElement("img")
        if (haki === "Armament") {img.src = arm_haki}
        else if (haki === "Observation") {img.src = obs_haki}
        else if (haki === "Conquerors") {img.src = con_haki}
        img.className = "icon"
        box.append(img)
      })
    }

    // Assign box properties and emoji for send_messages
    if (characterEvaluation.eval[info] == STATUS.INCORRECT) {
      box.className = "box wrong"
      curr_emoji = ":red_square:"
    } else if (characterEvaluation.eval[info] == STATUS.CORRECT) {
      box.className = "box correct"
      curr_emoji = ":green_square:"
    } else {
      box.className = "box partial"
      curr_emoji = ":yellow_square:"
    }
    
    // Assign arrows
    if ((info === "bounty" || info === "height" || info == "firstarc") && curr_emoji != ":green_square:") {
      // Rewrite box properties and emoji
      box.className = "box wrong"
      curr_emoji = ":red_square:"

      let arrow = document.createElement("div")
      if (characterEvaluation.eval[info] == STATUS.GREATER) {
        arrow.className = "uparrow"
      } else if (characterEvaluation.eval[info] == STATUS.LESSER) {
        arrow.className = "downarrow"
      }
      box.append(arrow)
    }

    box.append(text)

    setTimeout(() => { // Delayed appending for animation
      row.append(box)
    }, 250*box_anim_offset_idx)
    box_anim_offset_idx++

    game_state.rowEmoji += curr_emoji
  }

  game_state.rowEmoji += curr_emoji
  game_state.rowEmoji += "\n"

    // If correct guess
    if (characterEvaluation.correct) {
        // Only enters this statement if adding previous guesses. Don't want repeat leaderboard/message calls
        if (game_state.haltInput) { 
            game_state.gameWon = true
            return
        }
        win()
    }
}

function assignText(info, characterEvaluation) {
    const char = characterEvaluation.guessed_character

    // Custom text values
    if (info == "name") return characterEvaluation.guessed_character[info][0] // Choose first name
    if (info == "bounty") return abbrNum(char[info], 3)
    if (info == "height") { // Convert text to feet and inches
      let {feet, inches} = convertCMtoFeetInches(char[info])
      return feet + "'" + inches + '"'
    }
    return characterEvaluation.guessed_character[info] // else
}

async function win() {
    if (game_state.auth != null) {
      // Add name to leaderboard
      await addToLeaderboard(game_state.auth.user.id, game_state.guesses.length)

      // Send message in chat about victory!
      await sendMessage(game_state.discordSdk.channelId.toString(), game_state.auth.user.global_name + ": guessed " + game_state.guesses.length + " times.\n"+game_state.rowEmoji)
    }
    game_state.gameWon = true
}

// Helpers
function buildRow() {
    let board = document.getElementById("guess_board");
    let row = document.createElement("div")
    row.className = "row"
    
    board.appendChild(row)
    return row;
}

function convertCMtoFeetInches(numInCM) {
  const totalInches = numInCM / 2.54;             // 1 inch = 2.54 cm
  const feet = Math.floor(totalInches / 12); // 1 foot = 12 inches
  const inches = Math.round(totalInches % 12); // remaining inches
  return { feet, inches };
}

// Stolen cause idc
function abbrNum(number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  // Enumerate number abbreviations
  var abbrev = ["K", "M", "B", "T"];

  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {

    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round(number * decPlaces / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if ((number == 1000) && (i < abbrev.length - 1)) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      number += abbrev[i];

      // We are done... stop
      break;
    }
  }

  return number;
}