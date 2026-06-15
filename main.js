// Import dependencies
import { DiscordSDK } from "@discord/embedded-app-sdk";
import { CHARACTERS } from "./src/constants.js"
import { buildHeaders, pushGuessToRow } from "./src/board.js"
import { game_state } from "./src/game_state.js";
import {addToLeaderboard, getGuesses, guess, sendMessage} from "./src/api_calls.js"
import "./style.css";

// Images
import strawhatJollyRoger from '/img/strawhat_jolly_roger.png';

// Instantiate the SDK
game_state.discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

async function setupDiscordSdk() {
  await game_state.discordSdk.ready();
  console.log("Discord SDK is ready");

  // Authorize with Discord Client
  const { code } = await game_state.discordSdk.commands.authorize({
    client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
    response_type: "code",
    state: "",
    prompt: "none",
    scope: [
      "identify",
      "guilds",
      "applications.commands",
    ],
  });

  // Retrieve an access_token from your activity's server
  const response = await fetch("/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
    }),
  });
  
  const { access_token } = await response.json();

  // Authenticate with Discord client (using the access_token)
  try {
    game_state.auth = await game_state.discordSdk.commands.authenticate({
      access_token,
    });
    if (game_state.auth == null) throw new Error("Auth returned null")
  } catch (err) {
    console.error("Discord authenticate error: ", err)
    throw err
  }
}

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
  let infobar = document.getElementById("info_header")
  infobar.textContent = "Welcome " + game_state.auth.user.global_name + "!"
  loadBoardState()
});

function getRandomDaily(min, max) {
  // Use date for random number
  let date = new Date();
  let datePieces = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()];
  let dailynum = +datePieces.join('')
  let uniqueNum = Math.pow(dailynum, 2)

  // Generate random index
  
  return uniqueNum % CHARACTERS.length
}

function updateDropdownList(names) {

  characterdatalist.innerHTML = ``

  for (let name of names) {
    let list_option = document.createElement("li")
    list_option.classList.add("custom-dropdown-list-item")
    list_option.value = name
    list_option.textContent = name
    list_option.addEventListener('click', () => {
      input.value = list_option.textContent;
      characterdatalist.style.visibility = "hidden"
      attemptCharacter(list_option.textContent)
    })
    characterdatalist.append(list_option)
  }
}

function notAlreadyGuessed(name) {
  if (game_state.guesses.find(character => character.name.includes(name))) {
    return false
  } else {
    return true
  }
}

async function attemptCharacter(guessed_name) {
  if (game_state.gameWon) return // Don't attempt a guess if the game has already been won
  if (characterExists(guessed_name) && !notAlreadyGuessed(guessed_name)) return // Don't attempt a guess if you've already guessed the same character
  
  let data
  if (game_state.auth != null) {
    data = await guess(game_state.auth.user.id, guessed_name)
  } else {
    let h3 = document.getElementById("info_header")
    h3.textContent = "Authentication to Discord servers have failed."
    return;
  }
  
  game_state.guesses.push(data.guessed_character)
  document.getElementById("guess_total").textContent = "Number of guesses: " + game_state.guesses.length
  
  pushGuessToRow(data)
  
  document.getElementById("guess_input").value = "" // Wipe input
  characterdatalist.style.display = "none"
}

function characterExists(char_str) {
  return CHARACTERS.some(character => character.name.includes(char_str))
}

async function loadBoardState() {
  // Now for each character this user has guessed before, let's simulate a guess.
  let guess_data
  if (game_state.auth != null) {
    guess_data = await getGuesses(game_state.auth.user.id)
  }

  let j = 0
  for (const guessed_char of guess_data.guessed_characters) {
    setTimeout(() => { // Delayed appending for animation
        attemptCharacter(guessed_char.character_name)
      }, 250*j)
      j++
  }
  setTimeout(() => {
    game_state.haltInput = false
  }, 250*j)

}

// Main logic

document.querySelector('#app').innerHTML = `
  <div id="everything">
    <img src="${strawhatJollyRoger}" class="logo" alt="" />
    <h2>Guess today's One Piece character!</h2>
    <h3 id="guess_total">Number of guesses: 0</h3>
    <h3 id="info_header">Authenticating... (If this takes more than 5 seconds, restart the app)</h3>
    
    <div id="guess_board">
    </div>

    <div id="input_zone">
      <input list="" id="guess_input" 
      placeholder="Character name" tabindex="0" 
      type="search" autocomplete="off"> 

      <div class="custom-dropdown">
        <ul id="custom-dropdown-options">

        </ul>
      </div>
    </div>
  </div>
`;

// Build data list for dropdown
let characterdatalist = document.getElementById("custom-dropdown-options")
let LIST_OF_CHARACTER_NAMES = []

for (let character of CHARACTERS) {
  for (let name of character.name) {
    LIST_OF_CHARACTER_NAMES.push(name)
  }
}
LIST_OF_CHARACTER_NAMES = LIST_OF_CHARACTER_NAMES.sort()

// Add list of names to dropdown menu
updateDropdownList(LIST_OF_CHARACTER_NAMES)

// Build row headers
buildHeaders()

// Configure input
let input = document.getElementById("guess_input")

// When you click on input box
input.onfocus = function () {
  characterdatalist.style.visibility = "visible"
}

// When you click enter
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let first_element_in_dropdown = characterdatalist.childNodes[0].textContent
    attemptCharacter(first_element_in_dropdown)
  } else { // Dropdown filtering
    characterdatalist.style.display = "block"
    let filtered_character_list = LIST_OF_CHARACTER_NAMES.filter(name => 
      name.toUpperCase().startsWith(input.value.toUpperCase())
    )
    updateDropdownList(filtered_character_list)
  }
})
