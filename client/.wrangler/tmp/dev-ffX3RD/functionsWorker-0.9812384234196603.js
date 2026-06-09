var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/pages-JHGC0p/functionsWorker-0.9812384234196603.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  try {
    const { user_id, guesses } = await context.request.json();
    if (!user_id || guesses == null) {
      return new Response("Missing required data", { status: 400 });
    }
    await context.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS Leaderboard (
      user_id TEXT,
      guesses INTEGER,
      time_completed DATETIME
    );`).run();
    const stmt = context.env.DB.prepare(`
      INSERT INTO Leaderboard (user_id, guesses, time_completed)
      VALUES (?, ?, CURRENT_TIMESTAMP)`);
    await stmt.bind(user_id, guesses).run();
    return new Response(JSON.stringify({ success: true, message: "Score updated!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequest, "onRequest");
__name2(onRequest, "onRequest");
async function onRequest2(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  try {
    const { user_id } = await context.request.json();
    const day = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    if (!user_id) {
      return new Response("Missing required data", { status: 400 });
    }
    await context.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS DailyGuesses (
        user_id TEXT,
        day TEXT,
        character_name TEXT,
        guessed_at DATETIME DEFAULT CURRENT_TIMESTAMP,

        PRIMARY KEY (user_id, day, character_name)
    );`).run();
    const result = await context.env.DB.prepare(`
      SELECT user_id, character_name, guessed_at FROM DailyGuesses WHERE day = ?`).bind(day).all();
    return new Response(JSON.stringify({
      success: true,
      guessed_characters: result.results
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequest2, "onRequest2");
__name2(onRequest2, "onRequest");
async function onRequest3(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const { access_token } = await context.request.json();
  const response = await fetch("https://discord.com/api/v10/users/@me", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
__name(onRequest3, "onRequest3");
__name2(onRequest3, "onRequest");
var armament = "Armament";
var observation = "Observation";
var conquerors = "Conquerors";
var ARCS = {
  ROMANCEDAWN: "Romance Dawn",
  ORANGETOWN: "Orange Town",
  SYRUPVILLAGE: "Syrup Village",
  BARATIE: "Baratie",
  ARLONGPARK: "Arlong Park",
  LOGUETOWN: "Loguetown",
  REVERSEMOUNTAIN: "Reverse Mountain",
  WHISKYPEAK: "Whisky Peak",
  LITTLEGARDEN: "Little Garden",
  DRUMISLAND: "Drum Island",
  ALABASTA: "Alabasta",
  JAYA: "Jaya",
  SKYPIEA: "Skypiea",
  LONGRING: "Long Ring Long Land",
  WATER7: "Water 7",
  ENIESLOBBY: "Enies Lobby",
  POSTENIESLOBBY: "Post-Enies Lobby",
  THRILLERBARK: "Thriller Bark",
  SABAODY: "Sabaody Archipelago",
  AMAZONLILY: "Amazon Lily",
  IMPELDOWN: "Impel Down",
  MARINEFORD: "Marineford",
  POSTWAR: "Post-War",
  RETURNTOSABAODY: "Return to Sabaody",
  FISHMANISLAND: "Fish-Man Island",
  PUNKHAZARD: "Punk Hazard",
  DRESSROSA: "Dressrosa",
  ZOU: "Zou",
  WCI: "Whole Cake Island",
  REVERIE: "Reverie",
  WANOCOUNTRY: "Wano Country",
  EGGHEAD: "Egghead",
  ELBAF: "Elbaf"
};
var CHARACTERS = [
  // Strawhat Pirates
  addCharacter(["Monkey D. Luffy", "Luffy", "Straw Hat Luffy"], "Male", "Strawhat Pirates", "Zoan", [armament, observation, conquerors], 3e9, 174, "East Blue", ARCS.ROMANCEDAWN),
  addCharacter(["Roronoa Zoro", "Zoro", "Pirate Hunter"], "Male", "Strawhat Pirates", "None", [armament, observation, conquerors], 1111e6, 181, "East Blue", ARCS.ROMANCEDAWN),
  addCharacter(["Nami", "Cat Burglar"], "Female", "Strawhat Pirates", "None", [], 366e6, 170, "East Blue", "Orange Town"),
  addCharacter(["Usopp", "Sogeking", "King of Snipers"], "Male", "Strawhat Pirates", "None", [observation], 2e8, 176, "East Blue", ARCS.SYRUPVILLAGE),
  addCharacter(["Vinsmoke Sanji", "Sanji", "Black Leg", "Soba Mask"], "Male", "Strawhat Pirates", "None", [armament, observation], 1032e6, 180, "North Blue", ARCS.BARATIE),
  addCharacter(["Tony Tony Chopper", "Chopper", "Cotton Candy Lover"], "Male", "Strawhat Pirates", "Zoan", [], 1e3, 90, "Grand Line", ARCS.DRUMISLAND),
  addCharacter(["Nico Robin", "Robin", "Miss All Sunday", "Devil Child"], "Female", "Strawhat Pirates", "Paramecia", [], 93e7, 188, "West Blue", ARCS.WHISKYPEAK),
  addCharacter(["Franky", "Iron Man", "Cyborg", "Cutty Flam"], "Male", "Strawhat Pirates", "None", [], 944e6, 240, "Grand Line", ARCS.WATER7),
  addCharacter(["Brook", "Soul King", "Humming Brook"], "Male", "Strawhat Pirates", "Paramecia", [], 383e6, 277, "West Blue", ARCS.THRILLERBARK),
  addCharacter(["Jinbe", "Knight of the Sea", "First Son of the Sea", "Boss Jinbe"], "Male", "Strawhat Pirates", "None", [armament, observation], 11e8, 301, "Grand Line", ARCS.IMPELDOWN),
  // Misc. Major Villains (Unless they fit in more specific groupings like Admirals)
  addCharacter(["Alvida", "Iron-Mace"], "Female", "Cross Guild", "Paramecia", [], 5e6, 198, "East Blue", ARCS.ROMANCEDAWN),
  addCharacter(["Morgan", "Axe-Hand"], "Male", "Marines", "None", [], 0, 285, "East Blue", ARCS.ROMANCEDAWN),
  addCharacter(["Kuro"], "Male", "Black Cat Pirates", "None", [], 16e6, 207, "East Blue", ARCS.SYRUPVILLAGE),
  addCharacter(["Krieg", "Don Krieg"], "Male", "Krieg Pirates", "None", [], 17e6, 243, "East Blue", ARCS.BARATIE),
  addCharacter(["Wapol"], "Male", "Evil Black Drum Island", "Paramecia", [], 0, 207, "Grand Line", ARCS.DRUMISLAND),
  addCharacter(["Arlong", "Arlong the Saw"], "Male", "Arlong Pirates", "None", [], 2e7, 263, "Grand Line", ARCS.ARLONGPARK),
  addCharacter(["Smoker"], "Male", "Marines", "Logia", [armament, observation], 5e8, 209, "Grand Line", ARCS.LOGUETOWN),
  addCharacter(["Bellamy"], "Male", "None", "Paramecia", [armament, observation], 195e6, 240, "North Blue", ARCS.JAYA),
  addCharacter(["Enel", "Eneru"], "Male", "Automata", "Logia", [observation], 0, 266, "Sky Islands", ARCS.SKYPIEA),
  addCharacter(["Foxy"], "Male", "Foxy Pirates", "Paramecia", [], 24e6, 180, "South Blue", ARCS.LONGRING),
  addCharacter(["Rob Lucci", "Lucci"], "Male", "CP0", "Zoan", [armament, observation], 0, 212, "Grand Line", ARCS.WATER7),
  addCharacter(["Gecko Moria", "Moria"], "Male", "Thriller Bark Pirates", "Paramecia", [], 32e7, 692, "West Blue", ARCS.THRILLERBARK),
  addCharacter(["Hody Jones"], "Male", "New Fish-Man Pirates", "None", [], 0, 331, "Grand Line", ARCS.FISHMANISLAND),
  addCharacter(["Caesar Clown", "Master"], "Male", "NEO MADS", "Logia", [], 0, 309, "Grand Line", ARCS.PUNKHAZARD),
  addCharacter(["Donquixote Doflamingo", "Doflamingo"], "Male", "Donquixote Pirates", "Paramecia", [armament, observation, conquerors], 34e7, 305, "Red Line", ARCS.JAYA),
  addCharacter(["Jack"], "Male", "Beast Pirates", "Zoan", [armament, observation], 1e9, 830, "Grand Line", ARCS.ZOU),
  addCharacter(["Kurozumi Orochi", "Orochi"], "Male", "Wano Country", "Zoan", [], 0, 350, "Grand Line", ARCS.WANOCOUNTRY),
  // Beast Pirates
  addCharacter(["Ulti"], "Female", "Yamato", "Zoan", [armament, observation], 4e8, 173, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Page One"], "Male", "Yamato", "Zoan", [armament, observation], 29e7, 171, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Queen"], "Male", "Beast Pirates", "Zoan", [armament, observation], 132e7, 612, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["King"], "Male", "Beast Pirates", "Zoan", [armament, observation], 139e7, 613, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Black Maria"], "Female", "Beast Pirates", "Zoan", [armament, observation], 48e7, 820, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Sasaki"], "Male", "Beast Pirates", "Zoan", [armament, observation], 472e6, 318, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Who's-Who"], "Male", "Beast Pirates", "Zoan", [armament, observation], 546e6, 336, "North Blue", ARCS.WANOCOUNTRY),
  // Baroque Works
  addCharacter(["Daz Bonez", "Mr. 1"], "Male", "Cross Guild", "Paramecia", [], 75e6, 212, "West Blue", ARCS.ALABASTA),
  addCharacter(["Bentham", "Bon Clay", "Mr. 2 Bon Kurei"], "Male", "Newkama Land", "Paramecia", [], 32e6, 238, "East Blue", ARCS.LITTLEGARDEN),
  addCharacter(["Galdino", "Mr. 3"], "Male", "Cross Guild", "Paramecia", [], 24e6, 179, "South Blue", ARCS.LITTLEGARDEN),
  addCharacter(["Babe", "Mr. 4"], "Male", "New Spiders Cafe", "None", [], 32e5, 218, "Grand Line", ARCS.ALABASTA),
  // Admirals
  addCharacter(["Akainu", "Sakazuki"], "Male", "Marines", "Logia", [armament, observation], 5e9, 306, "North Blue", ARCS.ENIESLOBBY),
  addCharacter(["Kuzan", "Aokiji"], "Male", "Blackbeard Pirates", "Logia", [armament, observation], 0, 298, "South Blue", ARCS.LONGRING),
  addCharacter(["Borsalino", "Kizaru"], "Male", "Marines", "Logia", [armament, observation], 3e9, 302, "North Blue", ARCS.SABAODY),
  addCharacter(["Issho", "Fujitora"], "Male", "Marines", "Paramecia", [armament, observation], 3e9, 270, "Grand Line", ARCS.DRESSROSA),
  addCharacter(["Aramaki", "Ryokugyu", "Green Bull"], "Male", "Marines", "Logia", [armament, observation], 3e9, 308, "South Blue", ARCS.REVERIE),
  // Emperors
  addCharacter(["Charlotte Linlin", "Big Mom", "Linlin"], "Female", "Big Mom Pirates", "Paramecia", [armament, observation, conquerors], 4388e6, 880, "Grand Line", ARCS.FISHMANISLAND),
  addCharacter(["Kaido"], "Male", "Beast Pirates", "Zoan", [armament, observation, conquerors], 46111e5, 710, "Grand Line", ARCS.DRESSROSA),
  addCharacter(["Edward Newgate", "Whitebeard"], "Male", "Whitebeard Pirates", "Paramecia", [armament, observation, conquerors], 5046e6, 666, "Grand Line", ARCS.JAYA),
  addCharacter(["Shanks", "Red-Haired Shanks"], "Male", "Red Hair Pirates", "None", [armament, observation, conquerors], 40489e5, 199, "West Blue", ARCS.ROMANCEDAWN),
  addCharacter(["Blackbeard", "Marshall D. Teach", "Teach"], "Male", "Blackbeard Pirates", "Logia", [armament, observation, conquerors], 3996e6, 344, "Grand Line", ARCS.JAYA),
  // Cross Guild
  addCharacter(["Buggy The Clown", "Buggy"], "Male", "Cross Guild", "Paramecia", [], 3189e6, 192, "Grand Line", ARCS.ORANGETOWN),
  addCharacter(["Crocodile", "Mr. 0"], "Male", "Cross Guild", "Logia", [], 1965e6, 253, "Grand Line", ARCS.LITTLEGARDEN),
  addCharacter(["Dracule Mihawk", "Mihawk"], "Male", "Cross Guild", "None", [armament, observation], 359e7, 198, "Grand Line", ARCS.BARATIE),
  addCharacter(["Mohji"], "Male", "Cross Guild", "None", [], 0, 197, "East Blue", ARCS.ORANGETOWN),
  addCharacter(["Cabaji"], "Male", "Cross Guild", "None", [], 0, 208, "East Blue", ARCS.ORANGETOWN),
  // Whitebeard Pirates
  addCharacter(["Marco"], "Male", "Whitebeard Pirates", "Zoan", [armament, observation], 1374e6, 203, "Grand Line", ARCS.JAYA),
  addCharacter(["Portgas D. Ace", "Ace"], "Male", "Whitebeard Pirates", "Logia", [armament, observation, conquerors], 55e7, 185, "South Blue", ARCS.DRUMISLAND),
  addCharacter(["Izou"], "Male", "Whitebeard Pirates", "None", [armament, observation], 51e7, 192, "Grand Line", ARCS.MARINEFORD),
  addCharacter(["Jozu"], "Male", "Whitebeard Pirates", "Paramecia", [armament, observation], 0, 503, "West Blue", ARCS.JAYA),
  // Blackbeard Pirates
  addCharacter(["Jesus Burgess", "Burgess"], "Male", "Blackbeard Pirates", "Paramecia", [armament, observation], 2e7, 355, "Grand Line", ARCS.JAYA),
  addCharacter(["Shiryu"], "Male", "Blackbeard Pirates", "Paramecia", [armament, observation], 0, 340, "Grand Line", ARCS.IMPELDOWN),
  addCharacter(["Van Augur", "Augur"], "Male", "Blackbeard Pirates", "Paramecia", [], 64e6, 340, "Grand Line", ARCS.JAYA),
  addCharacter(["Avalo Pizarro", "Pizarro"], "Male", "Blackbeard Pirates", "Paramecia", [], 0, 505, "North Blue", ARCS.IMPELDOWN),
  addCharacter(["Lafitte"], "Male", "Blackbeard Pirates", "Unknown", [], 422e5, 340, "West Blue", ARCS.JAYA),
  addCharacter(["Catarina Devon", "Devon"], "Female", "Blackbeard Pirates", "Zoan", [], 0, 361, "South Blue", ARCS.IMPELDOWN),
  addCharacter(["Sanjuan Wolf", "Wolf"], "Male", "Blackbeard Pirates", "Paramecia", [], 0, 18e3, "West Blue", ARCS.IMPELDOWN),
  addCharacter(["Vasco Shot", "Shot"], "Male", "Blackbeard Pirates", "Paramecia", [], 0, 573, "South Blue", ARCS.IMPELDOWN),
  addCharacter(["Doc Q", "Q"], "Male", "Blackbeard Pirates", "Paramecia", [], 72e6, 342, "North Blue", ARCS.JAYA),
  // Heart Pirates
  addCharacter(["Trafalgar D. Water Law", "Trafalgar Law", "Law"], "Male", "Heart Pirates", "Paramecia", [armament, observation], 3e9, 191, "North Blue", ARCS.SABAODY),
  addCharacter(["Bepo"], "Male", "Heart Pirates", "None", [], 1500, 240, "Grand Line", ARCS.SABAODY),
  // Kid Pirates
  addCharacter(["Eustass Kid", "Kid", "Useless Mid", "Mid"], "Male", "Kid Pirates", "Paramecia", [armament, observation], 3e9, 205, "South Blue", ARCS.SABAODY),
  addCharacter(["Killer", "Kamazo"], "Male", "Kid Pirates", "Zoan", [armament, observation], 2e8, 195, "South Blue", ARCS.SABAODY),
  // Revolutionaries
  addCharacter(["Monkey D. Dragon", "Dragon"], "Male", "Revolutionary Army", "None", [], 0, 256, "East Blue", ARCS.LOGUETOWN),
  addCharacter(["Emporio Ivankov", "Ivankov"], "Male", "Revolutionary Army", "Paramecia", [], 1e8, 449, "Grand Line", ARCS.IMPELDOWN),
  addCharacter(["Belo Betty", "Betty"], "Female", "Revolutionary Army", "Paramecia", [armament, observation], 457e6, 196, "East Blue", ARCS.REVERIE),
  addCharacter(["Sabo"], "Male", "Revolutionary Army", "Logia", [armament, observation], 602e6, 187, "East Blue", ARCS.POSTWAR),
  addCharacter(["Koala"], "Female", "Revolutionary Army", "None", [], 6, 160, "Unknown", ARCS.FISHMANISLAND),
  addCharacter(["Hack"], "Male", "Revolutionary Army", "None", [], 0, 280, "Grand Line", ARCS.DRESSROSA),
  // Charlotte Family
  addCharacter(["Charlotte Pudding", "Pudding"], "Female", "Charlotte Family", "Paramecia", [], 0, 166, "Grand Line", ARCS.FISHMANISLAND),
  addCharacter(["Charlotte Katakuri", "Katakuri"], "Male", "Charlotte Family", "Paramecia", [armament, observation, conquerors], 1057e6, 509, "Grand Line", ARCS.WCI),
  addCharacter(["Charlotte Perospero", "Perospero"], "Male", "Charlotte Family", "Paramecia", [armament, observation], 7e8, 333, "Grand Line", ARCS.WCI),
  addCharacter(["Charlotte Cracker", "Cracker"], "Male", "Charlotte Family", "Paramecia", [armament, observation], 86e7, 307, "Grand Line", ARCS.WCI),
  addCharacter(["Charlotte Mont-d'Or", "Mont-d'Or", "Montdor"], "Male", "Charlotte Family", "Paramecia", [], 12e5, 260, "Grand Line", ARCS.WCI),
  addCharacter(["Charlotte Br\xFBl\xE9e", "Br\xFBl\xE9e", "Brulee"], "Female", "Charlotte Family", "Paramecia", [], 0, 350, "Grand Line", ARCS.WCI),
  addCharacter(["Charlotte Smoothie", "Smoothie"], "Female", "Charlotte Family", "Paramecia", [armament, observation], 932e6, 464, "Grand Line", ARCS.WCI),
  addCharacter(["Charlotte Chiffon", "Chiffon"], "Female", "Fire Tank Pirates", "None", [], 0, 215, "Grand Line", ARCS.WCI),
  addCharacter(["Charlotte Lola", "Lola"], "Female", "Rolling Pirates", "None", [], 24e6, 215, "Grand Line", ARCS.THRILLERBARK),
  addCharacter(["Pound"], "Male", "Charlotte Family", "None", [], 0, 731, "Grand Line", ARCS.WCI),
  // Mokomo Dukedom
  addCharacter(["Carrot"], "Female", "Mokomo Dukedom", "None", [], 0, 161, "Grand Line", ARCS.ZOU),
  addCharacter(["Pedro"], "Male", "Mokomo Dukedom", "None", [armament, observation], 382e6, 233, "Grand Line", ARCS.ZOU),
  addCharacter(["Nekomamushi", "Cat Viper", "Viper"], "Male", "Mokomo Dukedom", "None", [armament, observation], 0, 522, "Grand Line", ARCS.ZOU),
  addCharacter(["Wanda"], "Female", "Mokomo Dukedom", "None", [], 0, 181, "Grand Line", ARCS.ZOU),
  addCharacter(["Inuarashi", "Dogstorm"], "Male", "Mokomo Dukedom", "None", [armament, observation], 0, 511, "Grand Line", ARCS.ZOU),
  addCharacter(["Hina"], "Female", "Marines", "Paramecia", [], 2e8, 181, "West Blue", ARCS.ALABASTA),
  addCharacter(["Sentomaru"], "Male", "Marines", "None", [armament, observation], 5e8, 279, "Grand Line", ARCS.SABAODY),
  addCharacter(["Tsuru"], "Female", "Marines", "Paramecia", [armament, observation], 5e8, 204, "North Blue", ARCS.JAYA),
  addCharacter(["Monkey D. Garp", "Garp"], "Male", "Marines", "None", [armament, observation, conquerors], 3e9, 287, "East Blue", ARCS.ARLONGPARK),
  addCharacter(["Nefertari Vivi", "Vivi", "Ms. Wednesday"], "Female", "Alabasta Kingdom", "None", [], 0, 169, "Grand Line", ARCS.REVERSEMOUNTAIN),
  addCharacter(["Nefertari Cobra", "Cobra", "King of Alabasta"], "Male", "Alabasta Kingdom", "None", [], 0, 182, "Grand Line", ARCS.DRUMISLAND),
  addCharacter(["Boa Hancock", "Hancock", "Pirate Empress"], "Female", "Kuja Pirates", "Paramecia", [armament, observation, conquerors], 1659e6, 191, "Calm Belt", ARCS.AMAZONLILY),
  addCharacter(["Donquixote Rosinante", "Rosinante", "Corazon"], "Male", "Marines", "Paramecia", [], 0, 293, "Red Line", ARCS.DRESSROSA),
  addCharacter(["Crocus"], "Male", "Roger Pirates", "None", [observation], 0, 203, "Grand Line", ARCS.REVERSEMOUNTAIN),
  addCharacter(["Bartholomew Kuma", "Kuma"], "Male", "Revolutionary Army", "Paramecia", [armament, observation], 296e6, 689, "South Blue", ARCS.JAYA),
  addCharacter(["Dorry"], "Male", "Giant Warrior Pirates", "None", [], 18e8, 2260, "Grand Line", ARCS.LITTLEGARDEN),
  addCharacter(["Brogy"], "Male", "Giant Warrior Pirates", "None", [], 18e8, 2130, "Grand Line", ARCS.LITTLEGARDEN),
  addCharacter(["Hatchan", "Hatchi"], "Male", "Takoyaki 8", "None", [], 8e6, 220, "East Blue", ARCS.ARLONGPARK),
  addCharacter(["Mansherry"], "Female", "Tontatta Kingdom", "Paramecia", [], 0, 20, "Grand Line", ARCS.DRESSROSA),
  addCharacter(["Makino"], "Female", "Partys Bar", "None", [], 0, 166, "East Blue", ARCS.ROMANCEDAWN),
  addCharacter(["Gaimon"], "Male", "None", "None", [], 0, 130, "East Blue", ARCS.SYRUPVILLAGE),
  addCharacter(["Nojiko"], "Female", "None", "None", [], 0, 170, "East Blue", ARCS.ARLONGPARK),
  addCharacter(["Kurozumi Orochi", "Orochi"], "Male", "Wano Country", "Zoan", [], 0, 350, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Jaguar D. Saul", "Saul"], "Male", "Walrus School", "None", [], 0, 1950, "South Blue", ARCS.ENIESLOBBY),
  addCharacter(["Vinsmoke Yonji", "Yonji"], "Male", "Vinsmoke Family", "None", [], 0, 194, "North Blue", ARCS.WCI),
  addCharacter(["Vinsmoke Reiju", "Reiju"], "Female", "Vinsmoke Family", "None", [], 0, 173, "North Blue", ARCS.WCI),
  addCharacter(["Vinsmoke Niji", "Niji"], "Male", "Vinsmoke Family", "None", [], 0, 185, "North Blue", ARCS.WCI),
  addCharacter(["Vinsmoke Judge", "Judge"], "Male", "Vinsmoke Family", "None", [], 0, 272, "North Blue", ARCS.WCI),
  addCharacter(["Vinsmoke Ichiji", "Ichiji"], "Male", "Vinsmoke Family", "None", [], 0, 186, "North Blue", ARCS.WCI),
  addCharacter(["Kikunojo"], "Female", "Kouzuki Family", "None", [armament, observation], -1, 287, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Kin'emon", "Kinemon"], "Male", "Kouzuki Family", "Paramecia", [armament, observation], 0, 295, "Grand Line", ARCS.PUNKHAZARD),
  addCharacter(["Kawamatsu"], "Male", "Kouzuki Family", "None", [armament, observation], 0, 271, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Shinobu"], "Female", "Kouzuki Family", "Paramecia", [], 0, 180, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Denjiro", "Kyoshiro"], "Male", "Kouzuki Family", "None", [armament, observation], 0, 306, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Toko"], "Female", "Kouzuki Hiyori", "None", [], 0, 89, "Unknown", ARCS.WANOCOUNTRY),
  addCharacter(["Raizo"], "Male", "Kouzuki Family", "Paramecia", [armament, observation], 0, 311, "Grand Line", ARCS.ZOU),
  addCharacter(["Kouzuki Toki", "Toki"], "Female", "Kouzuki Family", "Paramecia", [], 0, 190, "Unknown", ARCS.WANOCOUNTRY),
  addCharacter(["Kouzuki Oden", "Oden"], "Male", "Kouzuki Family", "None", [armament, observation, conquerors], 0, 382, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Kouzuki Momonosuke", "Momonosuke"], "Male", "Kouzuki Family", "Zoan", [observation], 0, 110, "Grand Line", ARCS.PUNKHAZARD),
  addCharacter(["Kouzuki Hiyori", "Hiyori"], "Female", "Kouzuki Family", "None", [], 0, 170, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Silvers Rayleigh", "Rayleigh"], "Male", "Roger Pirates", "None", [armament, observation, conquerors], 0, 188, "Unknown", ARCS.ORANGETOWN),
  addCharacter(["Gol D. Roger", "Roger", "Gold Roger"], "Male", "Roger Pirates", "None", [armament, observation, conquerors], 5564e6, 274, "East Blue", ARCS.ROMANCEDAWN),
  addCharacter(["Viola"], "Female", "Riku Family", "Paramecia", [], 0, 178, "Grand Line", ARCS.DRESSROSA),
  addCharacter(["Sengoku"], "Male", "Marines", "Zoan", [armament, observation, conquerors], 0, 278, "South Blue", ARCS.JAYA),
  addCharacter(["Gin"], "Male", "Krieg Pirates", "None", [], 12e6, 186, "East Blue", ARCS.BARATIE),
  addCharacter(["Baby 5", "5"], "Female", "Happo Navy", "Paramecia", [], 0, 181, "North Blue", ARCS.PUNKHAZARD),
  addCharacter(["Curly Dadan", "Dadan"], "Female", "Dadan Family", "None", [], 0, 221, "East Blue", ARCS.POSTENIESLOBBY),
  addCharacter(["Vergo"], "Male", "Donquixote Pirates", "None", [armament, observation], 0, 247, "North Blue", ARCS.PUNKHAZARD),
  addCharacter(["Trebol"], "Male", "Donquixote Pirates", "Paramecia", [armament, observation], 0, 349, "North Blue", ARCS.DRESSROSA),
  addCharacter(["Sugar"], "Female", "Donquixote Pirates", "Paramecia", [], 0, 110, "North Blue", ARCS.PUNKHAZARD),
  addCharacter(["Senor Pink", "Pink"], "Male", "Donquixote Pirates", "Paramecia", [], 0, 244, "North Blue", ARCS.DRESSROSA),
  addCharacter(["Kyros", "Toy Soldier"], "Male", "Corrida Colosseum", "None", [], 0, 298, "Grand Line", ARCS.DRESSROSA),
  addCharacter(["Koby", "Coby"], "Male", "Marines", "None", [armament, observation], 5e8, 167, "East Blue", ARCS.ROMANCEDAWN),
  addCharacter(["Hiriluk"], "Male", "None", "None", [], 0, 213, "Grand Line", ARCS.DRUMISLAND),
  addCharacter(["Dalton"], "Male", "Sakura Kingdom", "Zoan", [], 0, 218, "Grand Line", ARCS.DRUMISLAND),
  addCharacter(["Kureha"], "Female", "Sakura Kingdom", "None", [], 0, 188, "Grand Line", ARCS.DRUMISLAND),
  addCharacter(["Tama", "Kurozumi Tama"], "Female", "Kurozumi Family", "Paramecia", [], 0, 108, "Grand Line", ARCS.WANOCOUNTRY),
  addCharacter(["Jewelry Bonney", "Bonney"], "Female", "Bonney Pirates", "Paramecia", [armament], 32e7, 174, "Red Line", ARCS.SABAODY),
  addCharacter(["X Drake", "Drake"], "Male", "Marines", "Zoan", [armament, observation], 222e6, 233, "North Blue", ARCS.SABAODY),
  addCharacter(["Capone Bege", "Bege"], "Male", "Fire Tank Pirates", "Paramecia", [], 35e7, 166, "West Blue", ARCS.SABAODY),
  addCharacter(["Basil Hawkins", "Hawkins"], "Male", "Hawkins Pirates", "Paramecia", [armament, observation], 32e7, 210, "North Blue", ARCS.SABAODY),
  addCharacter(["Scratchmen Apoo", "Apoo"], "Male", "On Air Pirates", "Paramecia", [armament, observation], 35e7, 256, "Grand Line", ARCS.SABAODY),
  addCharacter(["Duval"], "Male", "Rosy Life Riders", "None", [], 0, 470, "Grand Line", ARCS.SABAODY),
  addCharacter(["Shakuyaku", "Shakky"], "Female", "Shakky's Rip-off Bar", "None", [armament, observation], 0, 186, "Unknown", ARCS.SABAODY),
  addCharacter(["Tom"], "Male", "Tom's Workers", "None", [], 0, 296, "Grand Line", ARCS.WATER7),
  addCharacter(["Kokoro"], "Female", "Tom's Workers", "None", [], 0, 168, "Grand Line", ARCS.WATER7),
  addCharacter(["Kiwi"], "Female", "Franky Family", "None", [], 0, 187, "Grand Line", ARCS.WATER7),
  addCharacter(["Mozu"], "Female", "Franky Family", "None", [], 0, 187, "Grand Line", ARCS.WATER7),
  addCharacter(["Kalifa"], "Female", "CP0", "Paramecia", [], 0, 185, "Grand Line", ARCS.WATER7),
  addCharacter(["Kaku"], "Male", "CP0", "Zoan", [armament, observation], 0, 193, "East Blue", ARCS.WATER7),
  addCharacter(["Blueno"], "Male", "CP0", "Paramecia", [], 0, 258, "North Blue", ARCS.WATER7),
  addCharacter(["Kumadori"], "Male", "CP0", "None", [armament, observation], 0, 338, "South Blue", ARCS.ENIESLOBBY),
  addCharacter(["Fukurou"], "Male", "CP0", "None", [armament, observation], 0, 331, "Grand Line", ARCS.ENIESLOBBY),
  addCharacter(["Laboon"], "Male", "Crocus", "None", [], 0, 4e4, "West Blue", ARCS.REVERSEMOUNTAIN),
  addCharacter(["Ginny"], "Female", "Revolutionary Army", "None", [], 19e7, 174, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["Bell-m\xE8re", "Bellmere"], "Female", "Marines", "None", [], 0, 186, "East Blue", ARCS.ARLONGPARK),
  addCharacter(["Vander Decken IX"], "Male", "Flying Pirates", "Paramecia", [], 0, 352, "Grand Line", ARCS.FISHMANISLAND),
  addCharacter(["Rock", "Yeti Cool Brother 1"], "Male", "Caesar Clown", "None", [], 2e7, 4250, "Grand Line", ARCS.PUNKHAZARD),
  addCharacter(["Scotch", "Yeti Cool Brother 2"], "Male", "Caesar Clown", "None", [], 2e7, 4250, "Grand Line", ARCS.PUNKHAZARD),
  addCharacter(["Monet"], "Female", "Caesar Clown", "Logia", [], 0, 227, "North Blue", ARCS.PUNKHAZARD),
  addCharacter(["Paulie"], "Male", "Galley-La Company", "None", [], 0, 195, "Grand Line", ARCS.WATER7),
  addCharacter(["Iceburg"], "Male", "Galley-La Company", "None", [], 0, 199, "Grand Line", ARCS.WATER7),
  addCharacter(["Kalgara"], "Male", "Shandia", "None", [observation], 0, 222, "Grand Line", ARCS.SKYPIEA),
  addCharacter(["Gan Fall", "Fall"], "Male", "God of Skypiea", "None", [observation], 0, 180, "Grand Line", ARCS.SKYPIEA),
  addCharacter(["Chimney"], "Female", "Kokoro", "None", [], 0, 115, "Grand Line", ARCS.WATER7),
  addCharacter(["Chew"], "Male", "Arlong Pirates", "None", [], 55e5, 257, "Grand Line", ARCS.ARLONGPARK),
  addCharacter(["Kuroobi"], "Male", "Arlong Pirates", "None", [], 9e6, 252, "Grand Line", ARCS.ARLONGPARK),
  addCharacter(["Aisa"], "Female", "Shandia", "None", [observation], 0, 140, "Sky Islands", ARCS.SKYPIEA),
  addCharacter(["Hogback"], "Male", "Thriller Bark Pirates", "None", [], 0, 223, "West Blue", ARCS.THRILLERBARK),
  addCharacter(["Absalom"], "Male", "Thriller Bark Pirates", "Paramecia", [], 0, 195, "West Blue", ARCS.THRILLERBARK),
  addCharacter(["Perona"], "Female", "Thriller Bark Pirates", "Paramecia", [], 0, 160, "West Blue", ARCS.THRILLERBARK),
  addCharacter(["Victoria Cindry", "Cindry"], "Female", "Thriller Bark Pirates", "None", [], 0, 188, "West Blue", ARCS.THRILLERBARK),
  addCharacter(["Chouchou"], "Male", "Hocker", "None", [], 0, 40, "East Blue", ARCS.ORANGETOWN),
  addCharacter(["Gedatsu"], "Male", "Ukkari Hot-Spring Island", "None", [observation], 0, 220, "Sky Islands", ARCS.SKYPIEA),
  addCharacter(["Satori"], "Male", "God's Army", "None", [observation], 0, 179, "Sky Islands", ARCS.SKYPIEA),
  addCharacter(["Ohm"], "Male", "God's Army", "None", [observation], 0, 189, "Sky Islands", ARCS.SKYPIEA),
  addCharacter(["Shura"], "Male", "God's Army", "None", [observation], 0, 191, "Sky Islands", ARCS.SKYPIEA),
  // Vegapunks
  addCharacter(["Vegapunk"], "Male", "MADS", "Paramecia", [], 0, 314, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["Shaka"], "Male", "Marines", "None", [], 0, 220, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["Lilith"], "Female", "Marines", "None", [], 0, 204, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["Edison"], "Male", "Marines", "None", [], 0, 100, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["Pythagoras"], "Male", "Marines", "None", [], 0, 341, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["Atlas"], "Female", "Marines", "None", [], 0, 729, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["York"], "Female", "Marines", "None", [], 0, 482, "Grand Line", ARCS.EGGHEAD),
  // Seraphim
  addCharacter(["S-Snake"], "Female", "Seraphim", "Paramecia", [armament, observation], 0, 208, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["S-Bear"], "Male", "Seraphim", "Paramecia", [armament, observation], 0, 660, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["S-Hawk"], "Male", "Seraphim", "Paramecia", [armament, observation], 0, 212, "Grand Line", ARCS.EGGHEAD),
  addCharacter(["S-Shark"], "Male", "Seraphim", "Paramecia", [armament, observation], 0, 320, "Grand Line", ARCS.EGGHEAD)
];
function addCharacter(name, gender, affiliation, df, haki, bounty, height, origin, firstarc) {
  return {
    name,
    gender,
    affiliation,
    df,
    haki,
    bounty,
    height,
    origin,
    firstarc
  };
}
__name(addCharacter, "addCharacter");
__name2(addCharacter, "addCharacter");
var correctCharacter = CHARACTERS[getRandomDaily(0, CHARACTERS.length)];
var ARCS2 = [
  "Romance Dawn",
  "Orange Town",
  "Syrup Village",
  "Baratie",
  "Arlong Park",
  "Loguetown",
  "Reverse Mountain",
  "Whisky Peak",
  "Little Garden",
  "Drum Island",
  "Alabasta",
  "Jaya",
  "Skypiea",
  "Long Ring Long Land",
  "Water 7",
  "Enies Lobby",
  "Post-Enies Lobby",
  "Thriller Bark",
  "Sabaody Archipelago",
  "Amazon Lily",
  "Impel Down",
  "Marineford",
  "Post-War",
  "Return to Sabaody",
  "Fish-Man Island",
  "Punk Hazard",
  "Dressrosa",
  "Zou",
  "Whole Cake Island",
  "Reverie",
  "Wano Country",
  "Egghead",
  "Elbaf"
];
function getRandomDaily(min, max) {
  let date = /* @__PURE__ */ new Date();
  let datePieces = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()];
  let dailynum = +datePieces.join("");
  let uniqueNum = Math.pow(dailynum, 2);
  return uniqueNum % CHARACTERS.length;
}
__name(getRandomDaily, "getRandomDaily");
__name2(getRandomDaily, "getRandomDaily");
function compareArrays(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
__name(compareArrays, "compareArrays");
__name2(compareArrays, "compareArrays");
function convertCMtoFeetInches(numInCM) {
  const totalInches = numInCM / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
}
__name(convertCMtoFeetInches, "convertCMtoFeetInches");
__name2(convertCMtoFeetInches, "convertCMtoFeetInches");
function evaluteInfo(char, info) {
  if (info == "bounty" || info == "height") {
    if (char[info] < correctCharacter[info]) return 2;
    if (char[info] > correctCharacter[info]) return 3;
  }
  if (info == "firstarc") {
    if (ARCS2.indexOf(char[info]) < ARCS2.indexOf(correctCharacter[info])) return 2;
    if (ARCS2.indexOf(char[info]) > ARCS2.indexOf(correctCharacter[info])) return 3;
  }
  if (char[info] === correctCharacter[info]) {
    return 1;
  } else if (info === "height") {
    let { feet, inches } = convertCMtoFeetInches(char[info]);
    let { feet_to_guess, inches_to_guess } = convertCMtoFeetInches(correctCharacter[info]);
    if (feet == feet_to_guess && inches == inches_to_guess) return 1;
    if (char[info] < correctCharacter[info]) return 2;
    if (char[info] > correctCharacter[info]) return 3;
  } else if (info === "haki") {
    if (char[info].length === 0 && correctCharacter[info].length === 0) {
      return 1;
    } else if (char[info].length === 0 || correctCharacter[info].length === 0) {
      return 0;
    } else {
      if (compareArrays(char[info], correctCharacter[info])) {
        return 1;
      } else {
        return 2;
      }
    }
  }
  return 0;
}
__name(evaluteInfo, "evaluteInfo");
__name2(evaluteInfo, "evaluteInfo");
async function onRequest4(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const { user_id, guessed_character_name } = await context.request.json();
  if (!user_id || !guessed_character_name) {
    return new Response("Missing fields", { status: 400 });
  }
  const isCorrect = correctCharacter.name.includes(guessed_character_name);
  await context.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS DailyGuesses (
        user_id TEXT,
        day TEXT,
        character_name TEXT,
        guessed_at DATETIME DEFAULT CURRENT_TIMESTAMP,

        PRIMARY KEY (user_id, day, character_name)
    );`).run();
  const day = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  context.env.DB.prepare(`
      INSERT OR IGNORE INTO DailyGuesses (user_id, day, character_name)
      VALUES (?, ?, ?)`).bind(user_id, day, guessed_character_name).run();
  const guessed_character = CHARACTERS.find((character) => character.name.includes(guessed_character_name));
  return new Response(JSON.stringify({
    success: true,
    guessed_character,
    correctCharacter,
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
    headers: { "Content-Type": "application/json" }
  });
}
__name(onRequest4, "onRequest4");
__name2(onRequest4, "onRequest");
async function onRequest5(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const { channelId, message } = await context.request.json();
  const best_player = await context.env.DB.prepare(`
    SELECT user_id, guesses
    FROM Leaderboard
    WHERE DATE(time_completed) = DATE('now')
    ORDER BY guesses ASC, time_completed ASC
    LIMIT 1
  `).first();
  const global_name_response = await fetch(
    `https://discord.com/api/v10/users/${best_player.user_id}`,
    {
      headers: {
        "Authorization": `Bot ${context.env.DISCORD_TOKEN}`
      }
    }
  );
  const user = await global_name_response.json();
  const new_message = message + `BEST TODAY -> (${user.global_name}: ${best_player.guesses} guesses)`;
  const response = await fetch(
    `https://discord.com/api/v10/channels/${channelId}/messages`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bot ${context.env.DISCORD_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: new_message })
    }
  );
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
__name(onRequest5, "onRequest5");
__name2(onRequest5, "onRequest");
async function onRequest6(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const { code } = await context.request.json();
  const response = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: context.env.VITE_DISCORD_CLIENT_ID,
      client_secret: context.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code
    })
  });
  const { access_token } = await response.json();
  return new Response(JSON.stringify({ access_token }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
__name(onRequest6, "onRequest6");
__name2(onRequest6, "onRequest");
var routes = [
  {
    routePath: "/api/add-to-leaderboard",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest]
  },
  {
    routePath: "/api/get-guesses",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest2]
  },
  {
    routePath: "/api/get-player",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest3]
  },
  {
    routePath: "/api/guess",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest4]
  },
  {
    routePath: "/api/send-msg",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest5]
  },
  {
    routePath: "/api/token",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest6]
  }
];
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
__name2(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name2(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name2(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name2(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name2(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name2(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
__name2(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
__name2(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name2(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
__name2(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
__name2(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
__name2(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
__name2(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
__name2(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
__name2(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
__name2(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");
__name2(pathToRegexp, "pathToRegexp");
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
__name2(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name2(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name2(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name2((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// ../../../.volta/tools/image/packages/wrangler/lib/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// ../../../.volta/tools/image/packages/wrangler/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-ST7fAb/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = middleware_loader_entry_default;

// ../../../.volta/tools/image/packages/wrangler/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-ST7fAb/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=functionsWorker-0.9812384234196603.js.map
