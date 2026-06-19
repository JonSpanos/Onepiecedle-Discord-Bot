import { ARCS, CHARACTERS, STATUS} from "../../src/constants.js";

// Helper functions
function getRandomDaily() {
    const estDateStr = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})
    const estDate = new Date(estDateStr)
    const index = estDate.getDate() % CHARACTERS.length

    return index
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

function evaluateInfo(char, info, correctCharacter) {
    // First check if the info is identical
    if (char[info] === correctCharacter[info]) return STATUS.CORRECT

    // Compare info that can be considered partial 
    if (info == "bounty" || info == "height") {
        if (char[info] < correctCharacter[info]) return STATUS.GREATER
        if (char[info] > correctCharacter[info]) return STATUS.LESSER
    } 

    if (info == "firstarc") { // Check which is first in array
        const list_of_arcs = Object.values(ARCS)
        if (list_of_arcs.indexOf(char[info]) < list_of_arcs.indexOf(correctCharacter[info])) return STATUS.GREATER;
        if (list_of_arcs.indexOf(char[info]) > list_of_arcs.indexOf(correctCharacter[info])) return STATUS.LESSER;
    }

    if (info === "height") { // Compare feet/inch conversion rather than cm
        let {feet, inches} = convertCMtoFeetInches(char[info])
        let {feet_to_guess, inches_to_guess} = convertCMtoFeetInches(correctCharacter[info])

        if (feet == feet_to_guess && inches == inches_to_guess) return STATUS.CORRECT
        if (char[info] < correctCharacter[info]) return STATUS.GREATER
        if (char[info] > correctCharacter[info]) return STATUS.LESSER

    } 
    
    if (info === "haki") {
        if (char[info].length === 0 && correctCharacter[info].length === 0) { // No haki
            return STATUS.CORRECT
        } else if ( char[info].length === 0 || correctCharacter[info].length === 0 ) { // Only one has no haki
            return STATUS.INCORRECT
        } else {
            if(compareArrays(char[info], correctCharacter[info])) { // Identical Haki Types
                return STATUS.CORRECT
            } else { // Both have haki
                return STATUS.GREATER // Partial in this instance.
            }
        }
    }
    
    return STATUS.INCORRECT
}



export async function onRequestPost(context) {

    console.log("Attempting guess..")

    const { user_id, guessed_character_name } = await context.request.json();

    if (!user_id || !guessed_character_name) {
        return new Response("Missing fields", { status: 400 });
    }
    
    // Check who the correct character for the day is...
    const correctCharacter = CHARACTERS[getRandomDaily()]

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

    console.log("Building response")
    
    return new Response(JSON.stringify({
        success: true,
        guessed_character,
        correct: isCorrect,
        eval: {
            name: isCorrect,
            gender: evaluateInfo(guessed_character, "gender", correctCharacter),
            affiliation: evaluateInfo(guessed_character, "affiliation", correctCharacter),
            df: evaluateInfo(guessed_character, "df", correctCharacter),
            haki: evaluateInfo(guessed_character, "haki", correctCharacter),
            bounty: evaluateInfo(guessed_character, "bounty", correctCharacter),
            height: evaluateInfo(guessed_character, "height", correctCharacter),
            origin: evaluateInfo(guessed_character, "origin", correctCharacter),
            firstarc: evaluateInfo(guessed_character, "firstarc", correctCharacter)
        }
    }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}