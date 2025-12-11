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
    addCharacter(["Monkey D. Luffy", "Luffy", "Straw Hat Luffy"], "Male", "Strawhat Pirates", "Zoan", [armament, observation, conquerors], 3000000000, 174, "East Blue", ARCS.ROMANCEDAWN),
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
    addCharacter(["Mohji"], "Male", "Cross Guild", "None", [], 0, 197, "East Blue", ARCS.ORANGETOWN),
    addCharacter(["Cabaji"], "Male", "Cross Guild", "None", [], 0, 208, "East Blue", ARCS.ORANGETOWN),
    
    // Whitebeard Pirates
    addCharacter(["Marco"], "Male", "Whitebeard Pirates", "Zoan", [armament, observation], 1374000000, 203, "Grand Line", ARCS.JAYA),
    addCharacter(["Portgas D. Ace", "Ace"], "Male", "Whitebeard Pirates", "Logia", [armament, observation, conquerors], 550000000, 185, "South Blue", ARCS.DRUMISLAND),
    addCharacter(["Izou"], "Male", "Whitebeard Pirates", "None", [armament, observation], 510000000, 192, "Grand Line", ARCS.MARINEFORD),
    addCharacter(["Jozu"], "Male", "Whitebeard Pirates", "Paramecia", [armament, observation], 0, 503, "West Blue", ARCS.JAYA),

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
    
    // Revolutionaries
    addCharacter(["Monkey D. Dragon", "Dragon"], "Male", "Revolutionary Army", "None", [], 0, 256, "East Blue", ARCS.LOGUETOWN),
    addCharacter(["Emporio Ivankov", "Ivankov"], "Male", "Revolutionary Army", "Paramecia", [], 100000000, 449, "Grand Line", ARCS.IMPELDOWN),
    addCharacter(["Belo Betty", "Betty"], "Female", "Revolutionary Army", "Paramecia", [armament, observation], 457000000, 196, "East Blue", ARCS.REVERIE),
    addCharacter(["Sabo"], "Male", "Revolutionary Army", "Logia", [armament, observation], 602000000, 187, "East Blue", ARCS.POSTWAR),
    

    // Charlotte Family
    addCharacter(["Charlotte Pudding", "Pudding"], "Female", "Charlotte Family", "Paramecia", [], 0, 166, "Grand Line", ARCS.FISHMANISLAND),
    addCharacter(["Charlotte Katakuri", "Katakuri"], "Male", "Charlotte Family", "Paramecia", [armament, observation, conquerors], 1057000000, 509, "Grand Line", ARCS.WCI),
    addCharacter(["Charlotte Perospero", "Perospero"], "Male", "Charlotte Family", "Paramecia", [armament, observation], 700000000, 333, "Grand Line", ARCS.WCI),
    addCharacter(["Charlotte Cracker", "Cracker"], "Male", "Charlotte Family", "Paramecia", [armament, observation], 860000000, 307, "Grand Line", ARCS.WCI),
    addCharacter(["Charlotte Mont-d'Or", "Mont-d'Or", "Montdor"], "Male", "Charlotte Family", "Paramecia", [], 1200000, 260, "Grand Line", ARCS.WCI),
    addCharacter(["Charlotte Brûlée", "Brûlée", "Brulee"], "Female", "Charlotte Family", "Paramecia", [], 0, 350, "Grand Line", ARCS.WCI),
    addCharacter(["Charlotte Smoothie", "Smoothie"], "Female", "Charlotte Family", "Paramecia", [armament, observation], 932000000, 464, "Grand Line", ARCS.WCI),
    addCharacter(["Charlotte Chiffon", "Chiffon"], "Female", "Fire Tank Pirates", "None", [], 0, 215, "Grand Line", ARCS.WCI),
    addCharacter(["Charlotte Lola", "Lola"], "Female", "Rolling Pirates", "None", [], 24000000, 215, "Grand Line", ARCS.THRILLERBARK),
    addCharacter(["Pound"], "Male", "Charlotte Family", "None", [], 0, 731, "Grand Line", ARCS.WCI),

    // Mokomo Dukedom
    addCharacter(["Carrot"], "Female", "Mokomo Dukedom", "None", [], 0, 161, "Grand Line", ARCS.ZOU),
    addCharacter(["Pedro"], "Male", "Mokomo Dukedom", "None", [armament, observation], 382000000, 233, "Grand Line", ARCS.ZOU),
    addCharacter(["Nekomamushi", "Cat Viper", "Viper"], "Male", "Mokomo Dukedom", "None", [armament, observation], 0, 522, "Grand Line", ARCS.ZOU),
    addCharacter(["Wanda"], "Female", "Mokomo Dukedom", "None", [], 0, 181, "Grand Line", ARCS.ZOU),
    addCharacter(["Inuarashi", "Dogstorm"], "Male", "Mokomo Dukedom", "None", [armament, observation], 0, 511, "Grand Line", ARCS.ZOU),


    addCharacter(["Sentomaru"], "Male", "Marines", "None", [armament, observation], 500000000, 279, "Grand Line", ARCS.SABAODY),
    addCharacter(["Tsuru"], "Female", "Marines", "Paramecia", [armament, observation], 500000000, 204, "North Blue", ARCS.JAYA),
    addCharacter(["Monkey D. Garp", "Garp"], "Male", "Marines", "None", [armament, observation, conquerors], 3000000000, 287, "East Blue", ARCS.ARLONGPARK),
    addCharacter(["Nefertari Vivi", "Vivi", "Ms. Wednesday"], "Female", "Alabasta Kingdom", "None", [], 0, 169, "Grand Line", ARCS.REVERSEMOUNTAIN),
    addCharacter(["Nefertari Cobra", "Cobra", "King of Alabasta"], "Male", "Alabasta Kingdom", "None", [], 0, 182, "Grand Line", ARCS.DRUMISLAND),
    addCharacter(["Boa Hancock", "Hancock", "Pirate Empress"], "Female", "Kuja Pirates", "Paramecia", [armament, observation, conquerors], 1659000000, 191, "Calm Belt", ARCS.AMAZONLILY),
    addCharacter(["Donquixote Rosinante", "Rosinante", "Corazon"], "Male", "Marines", "Paramecia", [], 0, 293, "Red Line", ARCS.DRESSROSA),
    addCharacter(["Crocus"], "Male", "Roger Pirates", "None", [observation], 0, 203, "Grand Line", ARCS.REVERSEMOUNTAIN),
    addCharacter(["Bartholomew Kuma", "Kuma"], "Male", "Revolutionary Army", "Paramecia", [armament, observation], 296000000, 689, "South Blue", ARCS.JAYA),
    addCharacter(["Dorry"], "Male", "Giant Warrior Pirates", "None", [], 1800000000, 2260, "Grand Line", ARCS.LITTLEGARDEN),
    addCharacter(["Brogy"], "Male", "Giant Warrior Pirates", "None", [], 1800000000, 2130, "Grand Line", ARCS.LITTLEGARDEN),
    addCharacter(["Hatchan", "Hatchi"], "Male", "Takoyaki 8", "None", [], 8000000, 220, "East Blue", ARCS.ARLONGPARK),
    addCharacter(["Mansherry"], "Female", "Tontatta Kingdom", "Paramecia", [], 0, 20, "Grand Line", ARCS.DRESSROSA),
    addCharacter(["Makino"], "Female", "Partys Bar", "None", [], 0, 166, "East Blue", ARCS.ROMANCEDAWN),
    addCharacter(["Gaimon"], "Male", "None", "None", [], 0, 130, "East Blue", ARCS.SYRUPVILLAGE),
    addCharacter(["Nojiko"], "Female", "None", "None", [], 0, 170, "East Blue", ARCS.ARLONGPARK),
    addCharacter(["Portgas D. Ace", "Ace"], "Male", "Whitebeard Pirates", "Logia", [armament, observation, conquerors], 550000000, 185, "South Blue", ARCS.DRUMISLAND),
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
    addCharacter(["Gol D. Roger", "Roger", "Gold Roger"], "Male", "Roger Pirates", "None", [armament, observation, conquerors], 5564000000, 274, "East Blue", ARCS.ROMANCEDAWN),
    addCharacter(["Viola"], "Female", "Riku Family", "Paramecia", [], 0, 178, "Grand Line", ARCS.DRESSROSA),
    addCharacter(["Sengoku"], "Male", "Marines", "Zoan", [armament, observation, conquerors], 0, 278, "South Blue", ARCS.JAYA),
    addCharacter(["Gin"], "Male", "Krieg Pirates", "None", [], 12000000, 186, "East Blue", ARCS.BARATIE),
    addCharacter(["Baby 5", "5"], "Female", "Happo Navy", "Paramecia", [], 0, 181, "North Blue", ARCS.PUNKHAZARD),
    addCharacter(["Curly Dadan", "Dadan"], "Female", "Dadan Family", "None", [], 0, 221, "East Blue", ARCS.POSTENIESLOBBY),
    addCharacter(["Vergo"], "Male", "Donquixote Pirates", "None", [armament, observation], 0, 247, "North Blue", ARCS.PUNKHAZARD),
    addCharacter(["Trebol"], "Male", "Donquixote Pirates", "Paramecia", [armament, observation], 0, 349, "North Blue", ARCS.DRESSROSA),
    addCharacter(["Sugar"], "Female", "Donquixote Pirates", "Paramecia", [], 0, 110, "North Blue", ARCS.PUNKHAZARD),
    addCharacter(["Senor Pink", "Pink"], "Male", "Donquixote Pirates", "Paramecia", [], 0, 244, "North Blue", ARCS.DRESSROSA),
    addCharacter(["Kyros", "Toy Soldier"], "Male", "Corrida Colosseum", "None", [], 0, 298, "Grand Line", ARCS.DRESSROSA),
    addCharacter(["Koby", "Coby"], "Male", "Marines", "None", [armament, observation], 500000000, 167, "East Blue", ARCS.ROMANCEDAWN),
    addCharacter(["Hiriluk"], "Male", "None", "None", [], 0, 213, "Grand Line", ARCS.DRUMISLAND),
    addCharacter(["Dalton"], "Male", "Sakura Kingdom", "Zoan", [], 0, 218, "Grand Line", ARCS.DRUMISLAND),
    addCharacter(["Kureha"], "Female", "Sakura Kingdom", "None", [], 0, 188, "Grand Line", ARCS.DRUMISLAND),
    addCharacter(["Tama", "Kurozumi Tama"], "Female", "Kurozumi Family", "Paramecia", [], 0, 108, "Grand Line", ARCS.WANOCOUNTRY),
    addCharacter(["Jewelry Bonney", "Bonney"], "Female", "Bonney Pirates", "Paramecia", [armament], 320000000, 174, "Red Line", ARCS.SABAODY),
    addCharacter(["X Drake", "Drake"], "Male", "Marines", "Zoan", [armament, observation], 222000000, 233, "North Blue", ARCS.SABAODY),
    addCharacter(["Capone Bege", "Bege"], "Male", "Fire Tank Pirates", "Paramecia", [], 350000000, 166, "West Blue", ARCS.SABAODY),
    addCharacter(["Basil Hawkins", "Hawkins"], "Male", "Hawkins Pirates", "Paramecia", [armament, observation], 320000000, 210, "North Blue", ARCS.SABAODY),
    addCharacter(["Scratchmen Apoo", "Apoo"], "Male", "On Air Pirates", "Paramecia", [armament, observation], 350000000, 256, "Grand Line", ARCS.SABAODY),
    addCharacter(["Duval"], "Male", "Rosy Life Riders", "None", [], 0, 470, "Grand Line", ARCS.SABAODY),
    addCharacter(["Shakuyaku", "Shakky"], "Female", "Shakky's Rip-off Bar", "None", [armament, observation], 0, 186, "Unknown", ARCS.SABAODY),
    addCharacter(["Tom"], "Male", "Tom's Workers", "None", [], 0, 296, "Grand Line", ARCS.WATER7),
    addCharacter(["Kokoro"], "Female", "Tom's Workers", "None", [], 0, 168, "Grand Line", ARCS.WATER7),
    addCharacter(["Kiwi"], "Female", "Franky Family", "None", [], 0, 187, "Grand Line", ARCS.WATER7),
    addCharacter(["Mozu"], "Female", "Franky Family", "None", [], 0, 187, "Grand Line", ARCS.WATER7),
    addCharacter(["Kalifa"], "Female", "CP0", "Paramecia", [], 0, 185, "Grand Line", ARCS.WATER7),
    addCharacter(["Kaku"], "Male", "CP0", "Zoan", [armament, observation], 0, 193, "East Blue", ARCS.WATER7),
    addCharacter(["Blueno"], "Male", "CP0", "Paramecia", [], 0, 258, "North Blue", ARCS.WATER7),
    addCharacter(["Laboon"], "Male", "Crocus", "None", [], 0, 40000, "West Blue", ARCS.REVERSEMOUNTAIN),
    
    
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
