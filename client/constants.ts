let armament = "Armament"
let observation = "Observation"
let conquerors = "Conquerors"
export const ARCS = {
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
}

export const CHARACTERS = [
    // Strawhat Pirates
    addCharacter(["Monkey D. Luffy", "Luffy", "Straw Hat Luffy"], "Male", "Strawhat Pirates", "Paramecia", [armament, observation, conquerors], 3000000000, 174, "East Blue", ARCS.ROMANCEDAWN),
    addCharacter(["Roronoa Zoro", "Zoro", "Pirate Hunter"], "Male", "Strawhat Pirates", "None", [armament, observation, conquerors], 1111000000, 181, "East Blue", ARCS.ROMANCEDAWN),
    addCharacter(["Nami", "Cat Burglar"], "Female", "Strawhat Pirates", "None", [], 366000000, 170, "East Blue", "Orange Town"),
    addCharacter(["Usopp", "Sogeking", "King of Snipers"], "Male", "Strawhat Pirates", "None", [observation], 200000000, 176, "East Blue", ARCS.SYRUPVILLAGE),
    addCharacter(["Vinsmoke Sanji", "Sanji", "Black Leg", "Soba Mask"], "Male", "Strawhat Pirates", "None", [armament, observation], 1032000000, 180, "North Blue", ARCS.BARATIE),
    addCharacter(["Tony Tony Chopper", "Chopper", "Cotton Candy Lover"], "Male", "Strawhat Pirates", "Zoan", [], 1000, 90, "Grand Line", ARCS.DRUMISLAND),
    addCharacter(["Nico Robin", "Robin", "Miss All Sunday", "Devil Child"], "Female", "Strawhat Pirates", "Paramecia", [], 930000000, 188, "West Blue", ARCS.WHISKYPEAK),
    addCharacter(["Franky", "Iron Man", "Cyborg", "Cutty Flam"], "Male", "Strawhat Pirates", "None", [], 944000000, 240, "Grand Line", ARCS.WATER7),
    addCharacter(["Brook", "Soul King", "Humming Brook"], "Male", "Strawhat Pirates", "Paramecia", [], 383000000, 277, "West Blue", ARCS.THRILLERBARK),
    addCharacter(["Jinbe", "Knight of the Sea", "First Son of the Sea", "Boss Jinbe"], "Male", "Strawhat Pirates", "None", [armament, observation], 1100000000, 301, "Grand Line", ARCS.IMPELDOWN),
    
    // Misc. Major Villains (Unless they fit in more specific groupings like Admirals)
    addCharacter(["Alvida", "Iron-Mace"], "Female", "Cross Guild", "Paramecia", [], 5000000, 198, "East Blue", ARCS.ROMANCEDAWN),
    addCharacter(["Morgan", "Axe-Hand"], "Male", "Marines", "None", [], 0, 285, "East Blue", ARCS.ROMANCEDAWN),
    addCharacter(["Kuro"], "Male", "Black Cat Pirates", "None", [], 16000000, 207, "East Blue", ARCS.SYRUPVILLAGE),
    addCharacter(["Krieg", "Don Krieg"], "Male", "Krieg Pirates", "None", [], 17000000, 243, "East Blue", ARCS.BARATIE),
    addCharacter(["Wapol"], "Male", "Evil Black Drum Island", "Paramecia", [], 0, 207, "Grand Line", ARCS.DRUMISLAND),
    addCharacter(["Arlong", "Arlong the Saw"], "Male", "Arlong Pirates", "None", [], 20000000, 263, "Grand Line", ARCS.ARLONGPARK),
    addCharacter(["Smoker"], "Male", "Marines", "Logia", [armament, observation], 500000000, 209, "Grand Line", ARCS.LOGUETOWN),
    addCharacter(["Bellamy"], "Male", "None", "Paramecia", [armament, observation], 195000000, 240, "North Blue", ARCS.JAYA),
    addCharacter(["Enel", "Eneru"], "Male", "Automata", "Logia", [observation], 0, 266, "Sky Islands", ARCS.SKYPIEA),
    addCharacter(["Foxy"], "Male", "Foxy Pirates", "Paramecia", [], 24000000, 180, "South Blue", ARCS.LONGRING),
    addCharacter(["Rob Lucci", "Lucci"], "Male", "CP0", "Zoan", [armament, observation], 0, 212, "Grand Line", ARCS.WATER7),
    addCharacter(["Gecko Moria", "Moria"], "Male", "Thriller Bark Pirates", "Paramecia", [], 320000000, 692, "West Blue", ARCS.THRILLERBARK),
    addCharacter(["Hody Jones"], "Male", "New Fish-Man Pirates", "None", [], 0, 331, "Grand Line", ARCS.FISHMANISLAND),
    addCharacter(["Caesar Clown", "Master"], "Male", "NEO MADS", "Logia", [], 0, 309, "Grand Line", ARCS.PUNKHAZARD),
    addCharacter(["Donquixote Doflamingo", "Doflamingo"], "Male", "Donquixote Pirates", "Paramecia", [armament, observation, conquerors], 340000000, 305, "Red Line", ARCS.JAYA),
    addCharacter(["Jack"], "Male", "Beasts Pirates", "Zoan", [armament, observation], 1000000000, 830, "Grand Line", ARCS.ZOU),
    addCharacter(["Kurozumi Orochi", "Orochi"], "Male", "Wano Country", "Zoan", [], 0, 350, "Grand Line", ARCS.WANOCOUNTRY),

    // Baroque Works
    addCharacter(["Daz Bonez", "Mr. 1"], "Male", "Cross Guild", "Paramecia", [], 75000000, 212, "West Blue", ARCS.ALABASTA),
    addCharacter(["Bentham", "Bon Clay", "Mr. 2 Bon Kurei"], "Male", "Newkama Land", "Paramecia", [], 32000000, 238, "East Blue", ARCS.LITTLEGARDEN),
    addCharacter(["Galdino", "Mr. 3"], "Male", "Cross Guild", "Paramecia", [], 24000000, 179, "South Blue", ARCS.LITTLEGARDEN),
    addCharacter(["Babe", "Mr. 4"], "Male", "New Spiders Cafe", "None", [], 3200000, 218, "Grand Line", ARCS.ALABASTA),


    // Admirals
    addCharacter(["Akainu", "Sakazuki"], "Male", "Marines", "Logia", [armament, observation], 5000000000, 306, "North Blue", ARCS.ENIESLOBBY),
    addCharacter(["Kuzan", "Aokiji"], "Male", "Blackbeard Pirates", "Logia", [armament, observation], 0, 298, "South Blue", ARCS.LONGRING),
    addCharacter(["Borsalino", "Kizaru"], "Male", "Marines", "Logia", [armament, observation], 3000000000, 302, "North Blue", ARCS.SABAODY),
    addCharacter(["Issho", "Fujitora"], "Male", "Marines", "Paramecia", [armament, observation], 3000000000, 270, "Grand Line", ARCS.DRESSROSA),
    addCharacter(["Aramaki", "Ryokugyu", "Green Bull"], "Male", "Marines", "Logia", [armament, observation], 3000000000, 308, "South Blue", ARCS.REVERIE),

    // Emperors
    addCharacter(["Charlotte Linlin", "Big Mom", "Linlin"], "Female", "Big Mom Pirates", "Paramecia", [armament, observation, conquerors], 4388000000, 880, "Grand Line", ARCS.FISHMANISLAND),
    addCharacter(["Kaido"], "Male", "Beasts Pirates", "Zoan", [armament, observation, conquerors], 4611100000, 710, "Grand Line", ARCS.DRESSROSA),
    addCharacter(["Edward Newgate", "Whitebeard"], "Male", "Whitebeard Pirates", "Paramecia", [armament, observation, conquerors], 5046000000, 666, "Grand Line", ARCS.JAYA),
    addCharacter(["Shanks", "Red-Haired Shanks"], "Male", "Red Hair Pirates", "None", [armament, observation, conquerors], 4048900000, 199, "West Blue", ARCS.ROMANCEDAWN),
    addCharacter(["Blackbeard", "Marshall D. Teach", "Teach"], "Male", "Blackbeard Pirates", "Logia", [armament, observation, conquerors], 3996000000, 344, "Grand Line", ARCS.JAYA),
    
    // Cross Guild
    addCharacter(["Buggy The Clown", "Buggy"], "Male", "Cross Guild", "Paramecia", [], 3189000000, 192, "Grand Line", ARCS.ORANGETOWN),
    addCharacter(["Crocodile", "Mr. 0"], "Male", "Cross Guild", "Logia", [], 1965000000, 253, "Grand Line", ARCS.LITTLEGARDEN),
    addCharacter(["Dracule Mihawk", "Mihawk"], "Male", "Cross Guild", "None", [armament, observation], 3590000000, 198, "Grand Line", ARCS.BARATIE),
    
    // Blackbeard Pirates
    addCharacter(["Jesus Burgess", "Burgess"], "Male", "Blackbeard Pirates", "Paramecia", [armament, observation], 20000000, 355, "Grand Line", ARCS.JAYA),
    addCharacter(["Shiryu"], "Male", "Blackbeard Pirates", "Paramecia", [armament, observation], 0, 340, "Grand Line", ARCS.IMPELDOWN),
    addCharacter(["Van Augur", "Augur"], "Male", "Blackbeard Pirates", "Paramecia", [], 64000000, 340, "Grand Line", ARCS.JAYA),
    addCharacter(["Avalo Pizarro", "Pizarro"], "Male", "Blackbeard Pirates", "Paramecia", [], 0, 505, "North Blue", ARCS.IMPELDOWN),
    addCharacter(["Lafitte"], "Male", "Blackbeard Pirates", "Unknown", [], 42200000, 340, "West Blue", ARCS.JAYA),
    addCharacter(["Catarina Devon", "Devon"], "Female", "Blackbeard Pirates", "Zoan", [], 0, 361, "South Blue", ARCS.IMPELDOWN),
    addCharacter(["Sanjuan Wolf", "Wolf"], "Male", "Blackbeard Pirates", "Paramecia", [], 0, 18000, "West Blue", ARCS.IMPELDOWN),
    addCharacter(["Vasco Shot", "Shot"], "Male", "Blackbeard Pirates", "Paramecia", [], 0, 573, "South Blue", ARCS.IMPELDOWN),
    addCharacter(["Doc Q", "Q"], "Male", "Blackbeard Pirates", "Paramecia", [], 72000000, 342, "North Blue", ARCS.JAYA),

    // Heart Pirates
    addCharacter(["Trafalgar D. Water Law", "Trafalgar Law", "Law"], "Male", "Heart Pirates", "Paramecia", [armament, observation], 3000000000, 191, "North Blue", ARCS.SABAODY),
    addCharacter(["Bepo"], "Male", "Heart Pirates", "None", [], 1500, 240, "Grand Line", ARCS.SABAODY),

    // Kid Pirates
    addCharacter(["Eustass Kid", "Kid", "Useless Mid", "Mid"], "Male", "Kid Pirates", "Paramecia", [armament, observation], 3000000000, 205, "South Blue", ARCS.SABAODY),
    addCharacter(["Killer", "Kamazo"], "Male", "Kid Pirates", "Zoan", [armament, observation], 200000000, 195, "South Blue", ARCS.SABAODY),

    addCharacter(["Tsuru"], "Female", "Marines", "Paramecia", [armament, observation], 500000000, 204, "North Blue", ARCS.JAYA),
    addCharacter(["Monkey D. Garp", "Garp"], "Male", "Marines", "None", [armament, observation, conquerors], 3000000000, 287, "East Blue", ARCS.ARLONGPARK),
    addCharacter(["Nefertari Vivi", "Vivi", "Ms. Wednesday"], "Female", "Alabasta Kingdom", "None", [], 0, 169, "Grand Line", ARCS.REVERSEMOUNTAIN),
    addCharacter(["Nefertari Cobra", "Cobra", "King of Alabasta"], "Male", "Alabasta Kingdom", "None", [], 0, 182, "Grand Line", ARCS.DRUMISLAND),
    addCharacter(["Boa Hancock", "Hancock", "Pirate Empress"], "Female", "Kuja Pirates", "Paramecia", [armament, observation, conquerors], 1659000000, 191, "Calm Belt", ARCS.AMAZONLILY),
    addCharacter(["Donquixote Rosinante", "Rosinante", "Corazon"], "Male", "Marines", "Paramecia", [], 0, 293, "Red Line", ARCS.DRESSROSA),
    addCharacter(["Crocus"], "Male", "Roger Pirates", "None", [observation], 0, 203, "Grand Line", ARCS.REVERSEMOUNTAIN),
    addCharacter(["Bartholomew Kuma", "Kuma"], "Male", "Revolutionary Army", "Paramecia", [armament, observation], 296000000, 689, "South Blue", ARCS.JAYA),
    addCharacter(["Carrot"], "Female", "Mokomo Dukedom", "None", [], 0, 161, "Grand Line", ARCS.ZOU),
    addCharacter(["Pedro"], "Male", "Mokomo Dukedom", "None", [armament, observation], 382000000, 233, "Grand Line", ARCS.ZOU),
    addCharacter(["Dorry"], "Male", "Giant Warrior Pirates", "None", [], 1800000000, 2260, "Grand Line", ARCS.LITTLEGARDEN),
    addCharacter(["Brogy"], "Male", "Giant Warrior Pirates", "None", [], 1800000000, 2130, "Grand Line", ARCS.LITTLEGARDEN),
    addCharacter(["Hatchan", "Hatchi"], "Male", "Takoyaki 8", "None", [], 8000000, 220, "East Blue", ARCS.ARLONGPARK),
]

function addCharacter(name : String[], gender : String, affiliation : String, df : String, haki : String[], bounty : Number, height : Number, origin : String, firstarc : String) {
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
    }
}
