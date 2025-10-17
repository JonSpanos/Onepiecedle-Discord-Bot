// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";
import { CHARACTERS } from "./constants.js"
import "./style.css";

// Images
import strawhatJollyRoger from '/img/strawhat_jolly_roger.png';
import arm_haki from "/img/Armament.png"
import obs_haki from "/img/Observation.png"
import con_haki from "/img/Conqueror.png"

// Declare auth code variable 
let auth;

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
  await discordSdk.ready();
  console.log("Discord SDK is ready");

  // Authorize with Discord Client
  const { code } = await discordSdk.commands.authorize({
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
  auth = await discordSdk.commands.authenticate({
    access_token,
  });

  if (auth == null) {
    throw new Error("Authenticate command failed");
  }
}
  

async function sendMessage(_message) {
  try {
    const response = await fetch("/api/send-msg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        channelId: discordSdk.channelId.toString(),
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

let ARCS = ["Romance Dawn", "Orange Town", "Syrup Village", "Baratie", "Arlong Park", "Loguetown", "Reverse Mountain", "Whisky Peak",
  "Little Garden", "Drum Island", "Alabasta", "Jaya", "Skypiea", "Long Ring Long Land", "Water 7", "Enies Lobby", "Post-Enies Lobby",
  "Thriller Bark", "Sabaody Archipelago", "Amazon Lily", "Impel Down", "Marineford", "Post-War", "Return to Sabaody", "Fish-Man Island",
  "Punk Hazard", "Dressrosa", "Zou", "Whole Cake Island", "Reverie", "Wano Country", "Egghead", "Elbaf" 
]

function getRandomDaily(min, max) {
  // Use date for random number
  let date = new Date();
  let datePieces = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()];
  let dailynum = +datePieces.join('')
  let uniqueNum = Math.pow(dailynum, 2)

  // Generate random index
  
  return uniqueNum % CHARACTERS.length
}

let CHARACTER_TO_GUESS = CHARACTERS[getRandomDaily(0, CHARACTERS.length)]

let GUESSED_CHARACTERS = []

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${strawhatJollyRoger}" class="logo" alt="" />
    <h2>Guess today's One Piece character!</h2>
    <h3 id="guess_total">Number of guesses: 0</h3>
    <h3 id="testing"></h3>
    
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

initBoard()

// Configure input
let input = document.getElementById("guess_input")

// When you click on input box
input.onfocus = function () {
  characterdatalist.style.visibility = "visible"
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
  if (GUESSED_CHARACTERS.find(character => character.name.includes(name))) {
    return false
  } else {
    return true
  }
}

function attemptCharacter(guessed_name) {
  if (characterExists(guessed_name) && notAlreadyGuessed(guessed_name)) {
    let character = CHARACTERS.find(character => character.name.includes(guessed_name))
    GUESSED_CHARACTERS.push(character)
    document.getElementById("guess_total").textContent = "Number of guesses: " + GUESSED_CHARACTERS.length
    insertCharInfoInRow(character)
    document.getElementById("guess_input").value = "" // Wipe input
    characterdatalist.style.display = "none"
  }
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

function characterExists(char_str) {
  return CHARACTERS.some(character => character.name.includes(char_str))
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

// 0 = Wrong
// 1 = True
// 2 = Partial
function isCorrect(char, info) {
  if (char[info] === CHARACTER_TO_GUESS[info]) {
    return 1
  } else if (info === "haki") {
    if (char[info].length === 0 && CHARACTER_TO_GUESS[info].length === 0) { // No haki
      return 1
    } else if ( char[info].length === 0 || CHARACTER_TO_GUESS[info].length === 0 ) { // Only one has no haki
      return 0
    } else {
      if(compareArrays(char[info], CHARACTER_TO_GUESS[info])) { // Identical Haki Types
        return 1
      } else { // Both have haki
        return 2
      }
    }
  }
  return 0
}


let row_emoji = "" // Row of emojis
async function insertCharInfoInRow(char) {
  let curr_emoji = ""
  let rows = document.getElementsByClassName("row")

  let row = rows[GUESSED_CHARACTERS.length] // First row says what each col is for
  let i = 0
  for (let info of Object.keys(char)) {
    let box = document.createElement("div")
    let text = document.createElement("p")
    text.className = "text"
    text.textContent = char[info]
    if (info === "name") { // Select first name in name list
      text.textContent = char[info][0]
    } else if (info === "height") {
      let {feet, inches} = convertCMtoFeetInches(char[info])
      text.textContent = feet + "'" + inches + '"'
    } else if (info === "bounty") { 
      text.textContent = abbrNum(char[info], 3) // Format number to have commas
    } else if (info === "haki") { // If haki arr is empty, display None
      if (char[info].length === 0) {
        text.textContent = "None"
      } else { // Otherwise, use images instead of typing out the names
        text.textContent = ""
        char[info].forEach(haki => {
          let img = document.createElement("img")
          if (haki === "Armament") {img.src = arm_haki}
          else if (haki === "Observation") {img.src = obs_haki}
          else if (haki === "Conquerors") {img.src = con_haki}
          img.className = "icon"
          box.append(img)
        });
      }
    }
    
    // Assign box properties and current emoji
    if (isCorrect(char, info) == 0) { // Wrong
      box.className = "box wrong"
      curr_emoji = ":red_square:"
    } else if (isCorrect(char, info) == 1) { // Correct
      box.className = "box correct"
      curr_emoji = ":green_square:"
    } else { // Partial
      box.className = "box partial"
      curr_emoji = ":yellow_square:"
    }

    // Using the current emoji to identify if the info is correct, because I'm a maniac
    if (curr_emoji != ":green_square:" && (info === "bounty" || info == "height")) {
      // Add arrows to indicate if guessed info is greater or less than
      let arrow = document.createElement("div")
      if (char[info] < CHARACTER_TO_GUESS[info]){
        arrow.className = "uparrow"
      } else {
        arrow.className = "downarrow"
      }
      box.append(arrow)
    } else if (curr_emoji != ":green_square:" && info === "firstarc") {
      // Add arrows to indicate if guessed arc is before or after
      let arrow = document.createElement("div")
      if (ARCS.indexOf(char[info]) < ARCS.indexOf(CHARACTER_TO_GUESS[info])){
        arrow.className = "uparrow"
      } else {
        arrow.className = "downarrow"
      }
      box.append(arrow)
    }
    box.append(text)
    setTimeout(() => { // Delayed appending for animation
      row.append(box)
    }, 250*i)
    i++
    row_emoji += curr_emoji
  }
  row_emoji += "\n"

  // If correct guess
  if (char["name"] === CHARACTER_TO_GUESS["name"]) {
    if (auth == null) {
      await sendMessage("N/A: guessed " + GUESSED_CHARACTERS.length + " times.\n"+row_emoji)
    } else {
      await sendMessage(auth.user.global_name + ": guessed " + GUESSED_CHARACTERS.length + " times.\n"+row_emoji)
    }
  }
}

async function getPlayer() {
  document.getElementById("testing").textContent = "hi"
  let output = await discordSdk.commands.getInstanceConnectedParticipants()
  document.getElementById("testing").textContent = "bye"  
  
  return output.participants[0].username
}


function compareArrays(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function initBoard() {
  let board = document.getElementById("guess_board");
  let infoConversions = {
    df: "Devil Fruit",
    name: "Name",
    gender: "Gender",
    affiliation: "Affiliation",
    haki: "Haki",
    bounty: "Bounty",
    height: "Height",
    origin: "Origin",
    firstarc: "First Arc"
  }
  for (let i = 0; i < 8; i++) {
    let row = document.createElement("div")
    row.className = "row"
    
    board.appendChild(row)
  }

  let rows = document.getElementsByClassName("row")
  let row = rows[0] // First row says what each col is for
  for (let info of Object.keys(CHARACTERS[0])) {
    let box = document.createElement("div")
    box.textContent = infoConversions[info]
    
    box.className = "header"
    row.append(box)
  }

}