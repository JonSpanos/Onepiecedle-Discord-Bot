let armament = "Armament"
let observation = "Observation"
let conquerors = "Conquerors"
export const CHARACTERS = [
    // Strawhat Pirates
    addCharacter(["Monkey D. Luffy", "Luffy", "Straw Hat Luffy"], "Male", "Strawhat Pirates", "Paramecia", [armament, observation, conquerors], 3000000000, 174, "East Blue", "Romance Dawn"),
    addCharacter(["Roronoa Zoro", "Zoro", "Pirate Hunter"], "Male", "Strawhat Pirates", "None", [armament, observation, conquerors], 1111000000, 181, "East Blue", "Romance Dawn"),
    addCharacter(["Nami", "Cat Burglar"], "Female", "Strawhat Pirates", "None", [], 366000000, 170, "East Blue", "Orange Town"),
    addCharacter(["Usopp", "Sogeking", "King of Snipers"], "Male", "Strawhat Pirates", "None", [observation], 200000000, 176, "East Blue", "Syrup Village"),
    addCharacter(["Vinsmoke Sanji", "Sanji", "Black Leg", "Soba Mask"], "Male", "Strawhat Pirates", "None", [armament, observation], 1032000000, 180, "North Blue", "Baratie"),
    addCharacter(["Tony Tony Chopper", "Chopper", "Cotton Candy Lover"], "Male", "Strawhat Pirates", "Zoan", [], 1000, 90, "Grand Line", "Drum Island"),
    addCharacter(["Nico Robin", "Robin", "Miss All Sunday", "Devil Child"], "Female", "Strawhat Pirates", "Paramecia", [], 930000000, 188, "West Blue", "Whisky Peak"),
    addCharacter(["Franky", "Iron Man", "Cyborg", "Cutty Flam"], "Male", "Strawhat Pirates", "None", [], 944000000, 240, "Grand Line", "Water 7"),
    addCharacter(["Brook", "Soul King", "Humming Brook"], "Male", "Strawhat Pirates", "Paramecia", [], 383000000, 277, "West Blue", "Thriller Bark"),
    addCharacter(["Jinbe", "Knight of the Sea", "First Son of the Sea", "Boss Jinbe"], "Male", "Strawhat Pirates", "None", [armament, observation], 1100000000, 301, "Grand Line", "Impel Down"),
    
    // Misc. Major Villains (Unless they fit in more specific groupings like Admirals)
    addCharacter(["Alvida", "Iron-Mace"], "Female", "Cross Guild", "Paramecia", [], 5000000, 198, "East Blue", "Romance Dawn"),
    addCharacter(["Morgan", "Axe-Hand"], "Male", "Marines", "None", [], 0, 285, "East Blue", "Romance Dawn"),
    addCharacter(["Kuro"], "Male", "Black Cat Pirates", "None", [], 16000000, 207, "East Blue", "Syrup Village"),
    addCharacter(["Krieg", "Don Krieg"], "Male", "Krieg Pirates", "None", [], 17000000, 243, "East Blue", "Baratie"),
    addCharacter(["Arlong", "Arlong the Saw"], "Male", "Arlong Pirates", "None", [], 20000000, 263, "Grand Line", "Arlong Park"),
    addCharacter(["Smoker"], "Male", "Marines", "Logia", [armament, observation], 500000000, 209, "Grand Line", "Loguetown"),
    addCharacter(["Bellamy"], "Male", "None", "Paramecia", [armament, observation], 195000000, 240, "North Blue", "Jaya"),
    addCharacter(["Enel", "Eneru"], "Male", "Automata", "Logia", [observation], 0, 266, "Sky Islands", "Skypiea"),
    addCharacter(["Foxy"], "Male", "Foxy Pirates", "Paramecia", [], 24000000, 180, "South Blue", "Long Ring Long Land"),
    addCharacter(["Rob Lucci", "Lucci"], "Male", "CP0", "Zoan", [armament, observation], 0, 212, "Grand Line", "Water 7"),
    addCharacter(["Gecko Moria", "Moria"], "Male", "Thriller Bark Pirates", "Paramecia", [], 320000000, 692, "West Blue", "Thriller Bark"),
    addCharacter(["Hody Jones"], "Male", "New Fish-Man Pirates", "None", [], 0, 331, "Grand Line", "Fish-Man Island"),
    addCharacter(["Caesar Clown", "Master"], "Male", "NEO MADS", "Logia", [], 0, 309, "Grand Line", "Punk Hazard"),
    addCharacter(["Donquixote Doflamingo", "Doflamingo"], "Male", "Donquixote Pirates", "Paramecia", [armament, observation, conquerors], 340000000, 305, "Red Line", "Jaya"),
    addCharacter(["Jack"], "Male", "Beasts Pirates", "Zoan", [armament, observation], 1000000000, 830, "Grand Line", "Zou"),
    addCharacter(["Kurozumi Orochi", "Orochi"], "Male", "Wano Country", "Zoan", [], 0, 350, "Grand Line", "Wano Country"),

    // Admirals
    addCharacter(["Akainu", "Sakazuki"], "Male", "Marines", "Logia", [armament, observation], 5000000000, 306, "North Blue", "Enies Lobby"),
    addCharacter(["Kuzan", "Aokiji"], "Male", "Blackbeard Pirates", "Logia", [armament, observation], 0, 298, "South Blue", "Long Ring Long Land"),
    addCharacter(["Borsalino", "Kizaru"], "Male", "Marines", "Logia", [armament, observation], 3000000000, 302, "North Blue", "Sabaody Archipelago"),
    addCharacter(["Issho", "Fujitora"], "Male", "Marines", "Paramecia", [armament, observation], 3000000000, 270, "Grand Line", "Dressrosa"),
    addCharacter(["Aramaki", "Ryokugyu", "Green Bull"], "Male", "Marines", "Logia", [armament, observation], 3000000000, 308, "South Blue", "Reverie"),

    // Emperors
    addCharacter(["Charlotte Linlin", "Big Mom", "Linlin"], "Female", "Big Mom Pirates", "Paramecia", [armament, observation, conquerors], 4388000000, 880, "Grand Line", "Fish-Man Island"),
    addCharacter(["Kaido"], "Male", "Beasts Pirates", "Zoan", [armament, observation, conquerors], 4611100000, 710, "Grand Line", "Dressrosa"),
    addCharacter(["Edward Newgate", "Whitebeard"], "Male", "Paramecia", [armament, observation, conquerors], 5046000000, 666, "Grand Line", "Jaya"),
    addCharacter(["Shanks", "Red-Haired Shanks"], "Male", "Red Hair Pirates", "None", [armament, observation, conquerors], 4048900000, 199, "West Blue", "Romance Dawn"),
    addCharacter(["Blackbeard", "Marshall D. Teach", "Teach"], "Male", "Blackbeard Pirates", "Paramecia", [armament, observation, conquerors], 3996000000, 344, "Grand Line", "Jaya"),
    
    // Cross Guild
    addCharacter(["Buggy The Clown", "Buggy"], "Male", "Cross Guild", "Paramecia", [], 3189000000, 192, "Grand Line", "Orange Town"),
    addCharacter(["Crocodile", "Mr. 0"], "Male", "Cross Guild", "Logia", [], 1965000000, 253, "Grand Line", "Little Garden"),
    addCharacter(["Dracule Mihawk", "Mihawk"], "Male", "Cross Guild", "None", [armament, observation], 3590000000, 198, "Grand Line", "Baratie"),
    
    // Blackbeard Pirates
    addCharacter(["Jesus Burgess", "Burgess"], "Male", "Blackbeard Pirates", "Paramecia", [armament, observation], 20000000, 355, "Grand Line", "Jaya"),
    addCharacter(["Shiryu"], "Male", "Blackbeard Pirates", "Paramecia", [armament, observation], 0, 340, "Grand Line", "Impel Down"),
    addCharacter(["Van Augur", "Augur"], "Male", "Blackbeard Pirates", "Paramecia", [], 64000000, 340, "Grand Line", "Jaya"),
    addCharacter(["Avalo Pizarro", "Pizarro"], "Male", "Blackbeard Pirates", "Paramecia", [], 0, 505, "North Blue", "Impel Down"),
    addCharacter(["Lafitte"], "Male", "Blackbeard Pirates", "Unknown", [], 42200000, 340, "West Blue", "Jaya"),
    addCharacter(["Catarina Devon", "Devon"], "Female", "Blackbeard Pirates", "Zoan", [], 0, 361, "South Blue", "Impel Down"),
    addCharacter(["Sanjuan Wolf", "Wolf"], "Male", "Blackbeard Pirates", "Paramecia", [], 0, 18000, "West Blue", "Impel Down"),
    addCharacter(["Vasco Shot", "Shot"], "Male", "Blackbeard Pirates", "Paramecia", [], 0, 573, "South Blue", "Impel Down"),
    addCharacter(["Doc Q", "Q"], "Male", "Blackbeard Pirates", "Paramecia", [], 72000000, 342, "North Blue", "Jaya"),

    // Heart Pirates
    addCharacter(["Trafalgar D. Water Law", "Trafalgar Law", "Law"], "Male", "Heart Pirates", "Paramecia", [armament, observation], 3000000000, 191, "North Blue", "Sabaody Archipelago"),
    addCharacter(["Bepo"], "Male", "Heart Pirates", "None", [], 1500, 240, "Grand Line", "Sabaody Archipelago"),

    // Kid Pirates
    addCharacter(["Eustass Kid", "Kid", "Useless Mid", "Mid"], "Male", "Kid Pirates", "Paramecia", [armament, observation], 3000000000, 205, "South Blue", "Sabaody Archipelago"),
    addCharacter(["Killer", "Kamazo"], "Male", "Kid Pirates", "Zoan", [armament, observation], 200000000, 195, "South Blue", "Sabaody Archipelago"),


    addCharacter(["Crocus"], "Male", "Roger Pirates", "None", [observation], 0, 203, "Grand Line", "Reverse Mountain"),
    addCharacter(["Bartholomew Kuma", "Kuma"], "Male", "Revolutionary Army", "Paramecia", [armament, observation], 296000000, 689, "South Blue", "Jaya"),
    addCharacter(["Carrot"], "Female", "Mokomo Dukedom", "None", [], 0, 161, "Grand Line", "Zou"),
    addCharacter(["Pedro"], "Male", "Mokomo Dukedom", "None", [armament, observation], 382000000, 233, "Grand Line", "Zou"),
    addCharacter(["Dorry"], "Male", "Giant Warrior Pirates", "None", [], 1800000000, 2260, "Grand Line", "Little Garden"),
    addCharacter(["Brogy"], "Male", "Giant Warrior Pirates", "None", [], 1800000000, 2130, "Grand Line", "Little Garden"),
    addCharacter(["Hatchan", "Hatchi"], "Male", "Takoyaki 8", "None", [], 8000000, 220, "East Blue", "Arlong Park"),
]

function addCharacter(name, gender, affiliation, df = "None", haki = [], bounty, height, origin, firstarc) {
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
