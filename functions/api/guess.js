import { CHARACTERS } from "../../constants.js";

const correctCharacter = CHARACTERS[getRandomDaily(0, CHARACTERS.length)]
const ARCS = ["Romance Dawn", "Orange Town", "Syrup Village", "Baratie", "Arlong Park", "Loguetown", "Reverse Mountain", "Whisky Peak",
  "Little Garden", "Drum Island", "Alabasta", "Jaya", "Skypiea", "Long Ring Long Land", "Water 7", "Enies Lobby", "Post-Enies Lobby",
  "Thriller Bark", "Sabaody Archipelago", "Amazon Lily", "Impel Down", "Marineford", "Post-War", "Return to Sabaody", "Fish-Man Island",
  "Punk Hazard", "Dressrosa", "Zou", "Whole Cake Island", "Reverie", "Wano Country", "Egghead", "Elbaf" 
]

// Helper functions
function getRandomDaily(min, max) {
  // Use date for random number
  let date = new Date();
  let datePieces = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()];
  let dailynum = +datePieces.join('')
  let uniqueNum = Math.pow(dailynum, 2)

  // Generate random index
  
  return uniqueNum % CHARACTERS.length
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

function convertCMtoFeetInches(numInCM) {
  const totalInches = numInCM / 2.54;             // 1 inch = 2.54 cm
  const feet = Math.floor(totalInches / 12); // 1 foot = 12 inches
  const inches = Math.round(totalInches % 12); // remaining inches
  return { feet, inches };
}

// 0 = Wrong
// 1 = True
// 2 = Bigger
// 3 = Smaller
function evaluteInfo(char, info) {
    // short or long analysis
    if (info == "bounty" || info == "height") {
        if (char[info] < correctCharacter[info]) return 2 // short
        if (char[info] > correctCharacter[info]) return 3 // long
    }
    if (info == "firstarc") {
        if (ARCS.indexOf(char[info]) < ARCS.indexOf(correctCharacter[info])) return 2;
        if (ARCS.indexOf(char[info]) > ARCS.indexOf(correctCharacter[info])) return 3;
    }

    if (char[info] === correctCharacter[info]) {
        return 1
    } else if (info === "height") { // Compare feet/inch conversion rather than cm
        let {feet, inches} = convertCMtoFeetInches(char[info])
        let {feet_to_guess, inches_to_guess} = convertCMtoFeetInches(correctCharacter[info])

        if (feet == feet_to_guess && inches == inches_to_guess) return 1
        if (char[info] < correctCharacter[info]) return 2 // short
        if (char[info] > correctCharacter[info]) return 3 // long

    } else if (info === "haki") {
        if (char[info].length === 0 && correctCharacter[info].length === 0) { // No haki
            return 1
        } else if ( char[info].length === 0 || correctCharacter[info].length === 0 ) { // Only one has no haki
            return 0
        } else {
            if(compareArrays(char[info], correctCharacter[info])) { // Identical Haki Types
                return 1
            } else { // Both have haki
                return 2
            }
        }
    }
    
    return 0
}



export async function onRequest(context) {
    if (context.request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    const { user_id, guessed_character_name } = await context.request.json();

    if (!user_id || !guessed_character_name) {
        return new Response("Missing fields", { status: 400 });
    }

    const isCorrect = correctCharacter.name.includes(guessed_character_name)

    // Create table if it doesn't exist (Mostly for local DB testing)
    // Each guess for each user and ID is unique.
    await context.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS DailyGuesses (
        user_id TEXT,
        day TEXT,
        character_name TEXT,

        PRIMARY KEY (user_id, day, character_name)
    );`).run();
    
    // Get day
    const day = new Date().toISOString().slice(0,10); // ex: 2026-06-08
    await context.env.DB.prepare(`
      INSERT OR IGNORE INTO DailyGuesses (user_id, day, character_name)
      VALUES (?, ?, ?)`)
      .bind(user_id, day, guessed_character_name).run();
    
    const guessed_character = CHARACTERS.find(character => character.name.includes(guessed_character_name))

    return new Response(JSON.stringify({
        success: true,
        guessed_character,
        correct: isCorrect,
        eval: {
            name: isCorrect,
            gender: evaluteInfo(guessed_character, "gender"),
            affiliation: evaluteInfo(guessed_character, "affiliation"),
            df: evaluteInfo(guessed_character, "df"),
            haki: evaluteInfo(guessed_character, "haki"),
            bounty: evaluteInfo(guessed_character, "bounty"),
            height: evaluteInfo(guessed_character, "height"),
            origin: evaluteInfo(guessed_character, "origin"),
            firstarc: evaluteInfo(guessed_character, "firstarc")
        }
    }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}