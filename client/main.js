// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";
import { CHARACTERS } from "./characters.js"
import "./style.css";

// Images
import strawhatJollyRoger from '/img/strawhat_jolly_roger.png';
import arm_haki from "/img/Armament.png"
import obs_haki from "/img/Observation.png"
import con_haki from "/img/Conqueror.png"

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
  await discordSdk.ready();
}

let ARCS = ["Romance Dawn", "Orange Town", "Syrup Village", "Baratie", "Arlong Park", "Loguetown", "Reverse Mountain", "Whisky Peak",
  "Little Garden", "Drum Island", "Alabasta", "Jaya", "Skypiea", "Long Ring Long Land", "Water 7", "Enies Lobby", "Post-Enies Lobby",
  "Thriller Bark", "Sabaody Archipelago", "Amazon Lily", "Impel Down", "Marineford", "Post-War", "Return to Sabaody", "Fish-Man Island",
  "Punk Hazard", "Dressrosa", "Zou", "Whole Cake Island", "Reverie", "Wano Country", "Egghead", "Elbaf" 
]

let CHARACTER_TO_GUESS = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]

let GUESSES = 0

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${strawhatJollyRoger}" class="logo" alt="Discord" />
    <h2>Guess today's One Piece character!</h2>
    <h3 id="guess_total">Number of guesses: ${GUESSES}</h3>
    <h3 id="char_to_guess">Correct Character: ${CHARACTER_TO_GUESS.name[0]}</h3>

    <h3 id="testing"></h3>
    
    <div id="guess_board">
    </div>


    <input list="characters" id="guess_input" placeholder="Character name" tabindex="0" type="text"> 
    <datalist id="characters">

    </datalist>
  </div>
`;

// Build data list for dropdown
let characterdatalist = document.getElementById("characters")

for (let character of CHARACTERS) {
  for (let name of character.name) {
    let list_option = document.createElement("option")
    list_option.value = name
    characterdatalist.append(list_option)
  }
}

initBoard()

document.getElementById("guess_input").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let text_in_box = document.getElementById("guess_input").value

    if (characterExists(document.getElementById("guess_input").value)) {
      GUESSES++
      document.getElementById("guess_total").textContent = "Number of guesses: " + GUESSES
      insertCharInfoInRow(CHARACTERS.find(character => character.name.includes(text_in_box)))
    }
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

function insertCharInfoInRow(char) {
  let testing_header = document.getElementById("testing")
  let rows = document.getElementsByClassName("row")

  let row = rows[GUESSES] // First row says what each col is for
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
      text.textContent = char[info].toLocaleString('en-US') // Format number to have commas
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
   
    box.className = "box wrong"

    if (char[info] === CHARACTER_TO_GUESS[info]) {
      box.className = "box correct"
    } else if (info === "haki") {
      if (char[info].length === 0 && CHARACTER_TO_GUESS[info].length === 0) { // No haki
        box.className = "box correct"
      } else if ( char[info].length === 0 || CHARACTER_TO_GUESS[info].length === 0 ) { // Only one has no haki
        box.className = "box wrong"
      } else {
        if(compareArrays(char[info], CHARACTER_TO_GUESS[info])) { // Identical Haki Types
          box.className = "box correct"
        } else { // Both have haki
          box.className = "box partial"
        }
      }
    } else if (info === "bounty" || info == "height") {
      // Add arrows to indicate if guessed info is greater or less than
      let arrow = document.createElement("div")
      if (char[info] < CHARACTER_TO_GUESS[info]){
        arrow.className = "downarrow"
      } else {
        arrow.className = "uparrow"
      }
      box.append(arrow)
    } else if (info === "firstarc") {
      // Add arrows to indicate if guessed guessed arc is before or after
      let arrow = document.createElement("div")
      if (ARCS.indexOf(char[info]) < ARCS.indexOf(CHARACTER_TO_GUESS[info])){
        //testing_header.textContent = char[info] + "<" + CHARACTER_TO_GUESS[info]
        
        arrow.className = "uparrow"
      } else {
        //testing_header.textContent = char[info] + ">" + CHARACTER_TO_GUESS[info]

        arrow.className = "downarrow"
      }
      box.append(arrow)
    }
    box.append(text)
    row.append(box)
    
  }
}

function compareArrays(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function initBoard() {
  let board = document.getElementById("guess_board");
  for (let i = 0; i < 8; i++) {
    let row = document.createElement("div")
    row.className = "row"
    
    board.appendChild(row)
  }

  let rows = document.getElementsByClassName("row")
  let row = rows[0] // First row says what each col is for
  for (let info of Object.keys(CHARACTERS[0])) {
    let box = document.createElement("div")
    box.textContent = info
    
    box.className = "box"
    row.append(box)
  }

}