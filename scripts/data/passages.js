export const passages = {
  general: [
    {
      text: "The ___ (1) ___ sunset painted the sky with shades of orange, while the ___ (2) ___ wind whispered through the trees.",
      answers: ["radiant", "gentle"],
      wordBox: ["radiant", "gentle", "dull", "harsh"],
      hints: ["Means bright or glowing", "Means soft or mild"],
      explanations: ["'Radiant' describes shining brightly.", "'Gentle' means calm and soothing."],
      clueWords: [["sunset","sky"], ["wind","trees"]]
    },
    {
      text: "The ___ (1) ___ explorer ventured into the ___ (2) ___ jungle.",
      answers: ["brave", "dense"],
      wordBox: ["brave", "dense", "timid", "sparse"],
      hints: ["Means courageous", "Means thick or crowded"],
      explanations: ["'Brave' means showing courage.", "'Dense' describes something closely packed."],
      clueWords: [["explorer"], ["jungle"]]
    }
  ],
  synonyms: [
    {
      text: "Her ___ (1) ___ speech inspired the crowd, despite the ___ (2) ___ conditions outside.",
      answers: ["eloquent", "dreary"],
      wordBox: ["eloquent", "dreary", "quiet", "cheerful"],
      hints: ["Expressive and persuasive", "Gloomy or dull"],
      explanations: ["'Eloquent' means well-spoken.", "'Dreary' describes something bleak."],
      clueWords: [["speech"], ["conditions"]]
    }
  ],
  antonyms: [
    {
      text: "The ___ (1) ___ day turned into a ___ (2) ___ night.",
      answers: ["bright", "dark"],
      wordBox: ["bright", "dark", "dull", "light"],
      hints: ["Means full of light", "Means absence of light"],
      explanations: ["'Bright' means shining.", "'Dark' means lacking light."],
      clueWords: [["day"], ["night"]]
    }
  ],
  academic: [
    {
      text: "The professor’s ___ (1) ___ lecture clarified the ___ (2) ___ concept.",
      answers: ["lucid", "complex"],
      wordBox: ["lucid", "complex", "vague", "simple"],
      hints: ["Means clear and easy to understand", "Means complicated"],
      explanations: ["'Lucid' means clearly expressed.", "'Complex' means intricate."],
      clueWords: [["lecture"], ["concept"]]
    }
 ],

  contextInference: [
  {
    text: "The mountain’s ___ (1) ___ path wound around rocky cliffs, and the ___ (2) ___ winds made every step ___ (3) ___; despite the ___ (4) ___ weather, the team ___ (5) ___ to the summit.",
    answers: ["steep", "biting", "treacherous", "inclement", "persevered"],
    wordBox: [
      "steep", "biting", "treacherous", "inclement", "persevered",
      "gentle", "calm", "failed", "mild", "abandoned"
    ],
    hints: [
      "Very inclined or sharply rising.",
      "Cutting cold wind.",
      "Dangerous and unstable.",
      "Stormy or severe.",
      "Continued despite difficulty."
    ],
    explanations: [
      "'Steep' means sharply inclined.",
      "'Biting' describes a cold, cutting wind.",
      "'Treacherous' means hazardous and unstable.",
      "'Inclement' describes unpleasant weather.",
      "'Persevered' means persisted in spite of obstacles."
    ],
    clueWords: [["path","cliffs"],["winds"],["step"],["weather"],["team"]]
  },
  {
    text: "The brightly ___ (1) ___ decorations hung from every booth, and the ___ (2) ___ music made the crowd ___ (3) ___; although the ___ (4) ___ sun beat down, the volunteers ___ (5) ___ throughout the day.",
    answers: ["colored", "upbeat", "cheerful", "relentless", "endured"],
    wordBox: [
      "colored", "upbeat", "cheerful", "relentless", "endured",
      "dull", "slow", "relaxed", "faltered", "paused"
    ],
    hints: [
      "Filled with bright hues.",
      "Lively and optimistic.",
      "Feeling happy and joyful.",
      "Constant and unyielding.",
      "Lasted through challenges."
    ],
    explanations: [
      "'Colored' means having color applied.",
      "'Upbeat' describes lively, happy music.",
      "'Cheerful' means noticeably happy.",
      "'Relentless' means nonstop or unwavering.",
      "'Endured' means suffered through patiently."
    ],
    clueWords: [["decorations"],["music"],["crowd"],["sun"],["volunteers"]]
  },
  {
    text: "Our guides dove into the ___ (1) ___ ocean waters, where the ___ (2) ___ current swept past; with their ___ (3) ___ equipment, they ___ (4) ___ to collect samples despite the ___ (5) ___ pressure.",
    answers: ["turbid", "powerful", "specialized", "managed", "immense"],
    wordBox: [
      "turbid", "powerful", "specialized", "managed", "immense",
      "clear", "weak", "generic", "struggled", "halted"
    ],
    hints: [
      "Muddy or not clear.",
      "Very strong.",
      "Designed for a specific purpose.",
      "Succeeded in coping.",
      "Extremely large."
    ],
    explanations: [
      "'Turbid' means cloudy or muddy.",
      "'Powerful' describes great strength.",
      "'Specialized' means designed for a particular use.",
      "'Managed' means handled successfully.",
      "'Immense' means very large."
    ],
    clueWords: [["waters"],["current"],["equipment"],["collect"],["pressure"]]
  },
  {
    text: "The dormant seeds sprouted quickly after the spring rain, and the ___ (1) ___ farmers worked ___ (2) ___ to tend the fields; despite the ___ (3) ___ pests, the crops ___ (4) ___ and ___ (5) ___ beautifully.",
    answers: ["diligent", "tirelessly", "voracious", "flourished", "grew"],
    wordBox: [
      "diligent", "tirelessly", "voracious", "flourished", "grew",
      "lazy", "occasionally", "shrunk", "ignored", "withered"
    ],
    hints: [
      "Shows careful and persistent effort.",
      "Without resting.",
      "Eating a lot.",
      "Developed successfully.",
      "Increased in size or number."
    ],
    explanations: [
      "'Diligent' means showing careful effort.",
      "'Tirelessly' means without stopping.",
      "'Voracious' describes consuming great quantities.",
      "'Flourished' means grew vigorously.",
      "'Grew' means increased in size."
    ],
    clueWords: [["farmers"],["worked"],["pests"],["crops"],["rain"]]
  },
  {
    text: "The ___ (1) ___ nurse rushed down the corridor, carrying the ___ (2) ___ medication; with ___ (3) ___ precision, she ___ (4) ___ each dose on time, even under ___ (5) ___ pressure.",
    answers: ["experienced", "life-saving", "remarkable", "administered", "enormous"],
    wordBox: [
      "experienced", "life-saving", "remarkable", "administered", "enormous",
      "novice", "routine", "skipped", "minimal", "extreme"
    ],
    hints: [
      "Having done it many times.",
      "Crucial for saving lives.",
      "Very noteworthy.",
      "Gave out.",
      "Very great."
    ],
    explanations: [
      "'Experienced' means highly skilled.",
      "'Life-saving' describes something that prevents death.",
      "'Remarkable' means worthy of attention.",
      "'Administered' means gave out medication.",
      "'Enormous' means huge in scale."
    ],
    clueWords: [["nurse"],["medication"],["precision"],["dose"],["pressure"]]
  },
  {
    text: "The gridlocked traffic jam stretched for miles, and the ___ (1) ___ horns ___ (2) ___ incessantly; frustrated drivers ___ (3) ___ their engines while the sun ___ (4) ___ overhead, yet the roadwork crew ___ (5) ___.",
    answers: ["blaring", "echoed", "revved", "beat", "persevered"],
    wordBox: [
      "blaring", "echoed", "revved", "beat", "persevered",
      "whispered", "stopped", "paused", "hammered", "faltered"
    ],
    hints: [
      "Making a loud sound.",
      "Resounded repeatedly.",
      "Increased engine speed.",
      "Struck rhythmically.",
      "Continued despite difficulties."
    ],
    explanations: [
      "'Blaring' means loudly sounding.",
      "'Echoed' means repeated sound.",
      "'Revved' means increased engine speed.",
      "'Beat' means struck repeatedly.",
      "'Persevered' means kept going."
    ],
    clueWords: [["horns"],["jam"],["drivers"],["sun"],["crew"]]
  },
  {
    text: "The ___ (1) ___ software update introduced ___ (2) ___ features, improving ___ (3) ___ performance and ___ (4) ___ security; as a result, user complaints ___ (5) ___.",
    answers: ["recent", "innovative", "system", "enhanced", "diminished"],
    wordBox: [
      "recent", "innovative", "system", "enhanced", "diminished",
      "old", "basic", "increased", "weakened", "outdated"
    ],
    hints: [
      "Happened just now.",
      "Creative and new.",
      "Related to the whole setup.",
      "Improved.",
      "Became fewer."
    ],
    explanations: [
      "'Recent' means just occurred.",
      "'Innovative' describes new ideas.",
      "'System' refers to the entire structure.",
      "'Enhanced' means made better.",
      "'Diminished' means reduced in number."
    ],
    clueWords: [["update"],["features"],["performance"],["security"],["complaints"]]
  },
  {
    text: "At dawn, the ___ (1) ___ deer emerged from the woods and ___ (2) ___ across the meadow; despite the ___ (3) ___ winds, they ___ (4) ___ calmly before the hunters ___ (5) ___.",
    answers: ["shy", "bounded", "chilly", "grazed", "arrived"],
    wordBox: [
      "shy", "bounded", "chilly", "grazed", "arrived",
      "bold", "strolled", "frozen", "raced", "escaped"
    ],
    hints: [
      "Timid or easily frightened.",
      "Jumped quickly.",
      "Cold and crisp.",
      "Fed on grass.",
      "Came."
    ],
    explanations: [
      "'Shy' means timid.",
      "'Bounded' means leapt.",
      "'Chilly' means cold.",
      "'Grazed' means fed on grass.",
      "'Arrived' means came to a place."
    ],
    clueWords: [["deer"],["meadow"],["winds"],["calmly"],["hunters"]]
  },
  {
    text: "Her ___ (1) ___ research paper presented a ___ (2) ___ argument, demonstrating ___ (3) ___ analysis and ___ (4) ___ evidence; consequently, her grade ___ (5) ___.",
    answers: ["comprehensive", "coherent", "rigorous", "substantial", "improved"],
    wordBox: [
      "comprehensive", "coherent", "rigorous", "substantial", "improved",
      "brief", "chaotic", "weak", "lessened", "worsened"
    ],
    hints: [
      "Covering all aspects.",
      "Logically consistent.",
      "Thorough and detailed.",
      "Large in amount.",
      "Went up."
    ],
    explanations: [
      "'Comprehensive' means complete.",
      "'Coherent' means logical.",
      "'Rigorous' means thorough.",
      "'Substantial' means significant.",
      "'Improved' means got better."
    ],
    clueWords: [["paper"],["argument"],["analysis"],["evidence"],["grade"]]
  },
  {
    text: "The ___ (1) ___ spacecraft entered ___ (2) ___ orbit, where the ___ (3) ___ engines performed ___ (4) ___ maneuvers; despite the ___ (5) ___ conditions, the crew remained safe.",
    answers: ["orbital", "geostationary", "thrusters", "precise", "harsh"],
    wordBox: [
      "orbital", "geostationary", "thrusters", "precise", "harsh",
      "distant", "weak", "rudimentary", "complex", "gentle"
    ],
    hints: [
      "Relating to orbit.",
      "Stationary above a fixed point.",
      "Small directional engines.",
      "Accurate and exact.",
      "Unpleasantly severe."
    ],
    explanations: [
      "'Orbital' means related to an orbit.",
      "'Geostationary' means fixed over one area.",
      "'Thrusters' are small rocket engines.",
      "'Precise' means exact.",
      "'Harsh' means severe."
    ],
    clueWords: [["spacecraft"],["orbit"],["engines"],["maneuvers"],["conditions"]]
  }
],

  definitionMatch: [
  {
    text: "After hiking for hours, she was ___ (1) ___; her partner’s ___ (2) ___ encouragement kept them going, and at the summit they felt ___ (3) ___, capturing photos with ___ (4) ___ cameras before heading back to their ___ (5) ___ camp.",
    answers: [
      "exhausted",
      "steadfast",
      "euphoric",
      "compact",
      "remote"
    ],
    wordBox: [
      "exhausted","steadfast","euphoric","compact","remote",
      "hesitant","timid","bulky","crowded","familiar"
    ],
    hints: [
      "Very tired.",
      "Firmly loyal or unwavering.",
      "Extremely happy.",
      "Small and portable.",
      "Distant and isolated."
    ],
    explanations: [
      "'Exhausted' means extremely tired.",
      "'Steadfast' means firmly loyal or unwavering.",
      "'Euphoric' means feeling intense excitement and happiness.",
      "'Compact' means small and easy to carry.",
      "'Remote' means located far away."
    ],
    clueWords: [
      ["hiking","hours"], ["encouragement"], ["summit","felt"],
      ["cameras"], ["camp"]
    ]
  },
  {
    text: "The museum’s ___ (1) ___ exhibit featured ___ (2) ___ artifacts; visitors admired the ___ (3) ___ craftsmanship and purchased ___ (4) ___ souvenirs before leaving in complete ___ (5) ___.",
    answers: [
      "temporary",
      "ancient",
      "intricate",
      "authentic",
      "awe"
    ],
    wordBox: [
      "temporary","ancient","intricate","authentic","awe",
      "permanent","modern","simple","fake","indifference"
    ],
    hints: [
      "Lasting for only a limited time.",
      "Very old.",
      "Very detailed.",
      "Genuine.",
      "Feeling of wonder."
    ],
    explanations: [
      "'Temporary' means lasting only for a short time.",
      "'Ancient' means belonging to the very distant past.",
      "'Intricate' means having many complex details.",
      "'Authentic' means genuine or real.",
      "'Awe' means a feeling of reverential respect mixed with fear or wonder."
    ],
    clueWords: [
      ["exhibit"], ["artifacts"], ["craftsmanship"],
      ["souvenirs"], ["leaving"]
    ]
  },
  {
    text: "His voice was ___ (1) ___ over the microphone, delivering ___ (2) ___ instructions; the crew worked with ___ (3) ___ precision, ensuring every ___ (4) ___ task was completed, earning him ___ (5) ___ praise.",
    answers: [
      "amplified",
      "clear",
      "meticulous",
      "assigned",
      "commendable"
    ],
    wordBox: [
      "amplified","clear","meticulous","assigned","commendable",
      "muffled","vague","careless","optional","undeserved"
    ],
    hints: [
      "Made louder.",
      "Easy to understand.",
      "Extremely careful.",
      "Given out.",
      "Worthy of praise."
    ],
    explanations: [
      "'Amplified' means made louder.",
      "'Clear' means easy to understand.",
      "'Meticulous' means showing great attention to detail.",
      "'Assigned' means given as a duty or task.",
      "'Commendable' means deserving praise."
    ],
    clueWords: [
      ["microphone"], ["instructions"], ["precision"],
      ["task"], ["praise"]
    ]
  },
  {
    text: "The novel’s ___ (1) ___ plot and ___ (2) ___ characters drew ___ (3) ___ reviews; critics praised the author’s ___ (4) ___ style and called the book a ___ (5) ___ success.",
    answers: [
      "complex",
      "vivid",
      "rave",
      "distinctive",
      "resounding"
    ],
    wordBox: [
      "complex","vivid","rave","distinctive","resounding",
      "simple","dull","mixed","generic","quiet"
    ],
    hints: [
      "Complicated.",
      "Producing powerful images.",
      "Enthusiastic.",
      "Unique.",
      "Emphatic or thunderous."
    ],
    explanations: [
      "'Complex' means consisting of many interrelated parts.",
      "'Vivid' means producing powerful feelings or strong impressions.",
      "'Rave' means highly enthusiastic.",
      "'Distinctive' means characteristic of one person or thing.",
      "'Resounding' means unmistakable or emphatic."
    ],
    clueWords: [
      ["plot"], ["characters"], ["reviews"],
      ["style"], ["success"]
    ]
  },
  {
    text: "During the audit, the ___ (1) ___ accountant identified ___ (2) ___ discrepancies; his ___ (3) ___ approach and ___ (4) ___ attention to detail saved the company from ___ (5) ___ losses.",
    answers: [
      "veteran",
      "numerous",
      "methodical",
      "scrupulous",
      "potential"
    ],
    wordBox: [
      "veteran","numerous","methodical","scrupulous","potential",
      "novice","few","haphazard","careless","irreversible"
    ],
    hints: [
      "Experienced.",
      "Many.",
      "Systematic.",
      "Thoroughly honest/careful.",
      "Possible but not yet realized."
    ],
    explanations: [
      "'Veteran' means having long experience.",
      "'Numerous' means great in number.",
      "'Methodical' means done according to a systematic plan.",
      "'Scrupulous' means very careful to do what is right.",
      "'Potential' describes something that could happen in the future."
    ],
    clueWords: [
      ["audit"], ["discrepancies"], ["approach"],
      ["attention"], ["losses"]
    ]
  },
  {
    text: "The tech startup secured ___ (1) ___ funding, enabling them to ___ (2) ___ development; their ___ (3) ___ prototype impressed investors and led to a ___ (4) ___ acquisition by a major ___ (5) ___.",
    answers: [
      "substantial",
      "accelerate",
      "innovative",
      "lucrative",
      "conglomerate"
    ],
    wordBox: [
      "substantial","accelerate","innovative","lucrative","conglomerate",
      "minimal","delay","conventional","risky","startup"
    ],
    hints: [
      "Large in amount.",
      "Speed up.",
      "New and original.",
      "Profitable.",
      "Large corporation."
    ],
    explanations: [
      "'Substantial' means large or significant.",
      "'Accelerate' means to increase speed.",
      "'Innovative' means introducing new ideas.",
      "'Lucrative' means producing a great deal of profit.",
      "'Conglomerate' means a large corporation formed by merging."
    ],
    clueWords: [
      ["funding"], ["development"], ["prototype"],
      ["acquisition"], ["major"]
    ]
  },
  {
    text: "After months of training, the athlete’s ___ (1) ___ improvements were ___ (2) ___; her coach’s ___ (3) ___ feedback and her own ___ (4) ___ routines led to a ___ (5) ___ performance.",
    answers: [
      "incremental",
      "remarkable",
      "constructive",
      "rigorous",
      "stellar"
    ],
    wordBox: [
      "incremental","remarkable","constructive","rigorous","stellar",
      "minimal","lackluster","destructive","lenient","poor"
    ],
    hints: [
      "Small increases.",
      "Worthy of notice.",
      "Helpful.",
      "Strict or thorough.",
      "Excellent."
    ],
    explanations: [
      "'Incremental' means occurring in small steps.",
      "'Remarkable' means worthy of attention.",
      "'Constructive' means intended to help.",
      "'Rigorous' means thorough and strict.",
      "'Stellar' means outstanding."
    ],
    clueWords: [
      ["training"], ["improvements"], ["feedback"],
      ["routines"], ["performance"]
    ]
  },
  {
    text: "The chef’s ___ (1) ___ menu featured ___ (2) ___ ingredients, blending ___ (3) ___ and modern flavors; guests raved about the ___ (4) ___ presentation and the restaurant’s ___ (5) ___ atmosphere.",
    answers: [
      "seasonal",
      "locally sourced",
      "traditional",
      "artful",
      "inviting"
    ],
    wordBox: [
      "seasonal","locally sourced","traditional","artful","inviting",
      "exotic","mass-produced","modern","bland","sterile"
    ],
    hints: [
      "Appropriate to the season.",
      "Obtained from nearby.",
      "Long-established.",
      "Skillfully made.",
      "Welcoming."
    ],
    explanations: [
      "'Seasonal' means using produce available in a particular season.",
      "'Locally sourced' means obtained from nearby producers.",
      "'Traditional' means following long-established customs.",
      "'Artful' means skillfully made or arranged.",
      "'Inviting' means attractive and welcoming."
    ],
    clueWords: [
      ["menu"], ["ingredients"], ["flavors"],
      ["presentation"], ["atmosphere"]
    ]
  },
  {
    text: "The teacher’s ___ (1) ___ explanation simplified the ___ (2) ___ concept, and her ___ (3) ___ examples helped students grasp ___ (4) ___ ideas, resulting in ___ (5) ___ comprehension.",
    answers: [
      "concise",
      "abstract",
      "practical",
      "complex",
      "enhanced"
    ],
    wordBox: [
      "concise","abstract","practical","complex","enhanced",
      "verbose","concrete","useless","simple","diminished"
    ],
    hints: [
      "Brief and clear.",
      "Hard to visualize.",
      "Useful.",
      "Complicated.",
      "Improved."
    ],
    explanations: [
      "'Concise' means expressing much in few words.",
      "'Abstract' means existing in thought but not physical form.",
      "'Practical' means useful and sensible.",
      "'Complex' means consisting of many parts.",
      "'Enhanced' means improved."
    ],
    clueWords: [
      ["explanation"], ["concept"], ["examples"],
      ["ideas"], ["comprehension"]
    ]
  },
  {
    text: "Despite ___ (1) ___ challenges, the research team’s ___ (2) ___ dedication led to ___ (3) ___ discoveries; their ___ (4) ___ efforts and ___ (5) ___ collaborations set new benchmarks.",
    answers: [
      "formidable",
      "unwavering",
      "groundbreaking",
      "tireless",
      "international"
    ],
    wordBox: [
      "formidable","unwavering","groundbreaking","tireless","international",
      "minor","wavering","routine","sporadic","local"
    ],
    hints: [
      "Difficult to overcome.",
      "Steady and resolute.",
      "Innovative.",
      "Without stopping.",
      "Between nations."
    ],
    explanations: [
      "'Formidable' means inspiring fear or respect through being powerful.",
      "'Unwavering' means steady and resolute.",
      "'Groundbreaking' means introducing new ideas or methods.",
      "'Tireless' means showing great effort without rest.",
      "'International' means involving more than one nation."
    ],
    clueWords: [
      ["challenges"], ["dedication"], ["discoveries"],
      ["efforts"], ["collaborations"]
    ]
  }
],

  synonymContrast: [
  {
    text: "He was rich, but his brother was ___ (1) ___; whereas his sister lived quite ___ (2) ___, yet their bond remained ___ (3) ___ despite financial ___ (4) ___ and occasional ___ (5) ___.",
    answers: ["poor", "modestly", "unbreakable", "disparities", "tensions"],
    wordBox: [
      "poor", "modestly", "unbreakable", "disparities", "tensions",
      "wealthy", "extravagantly", "fragile", "differences", "harmony"
    ],
    hints: [
      "Opposite of rich.",
      "Opposite of lavishly.",
      "Cannot be broken.",
      "Large differences.",
      "Strained relations."
    ],
    explanations: [
      "'Poor' is the antonym of 'rich'.",
      "'Modestly' contrasts with 'extravagantly'.",
      "'Unbreakable' means cannot be broken.",
      "'Disparities' are significant differences.",
      "'Tensions' are feelings of strain or stress."
    ],
    clueWords: [["but"],["whereas"],["bond"],["financial"],["occasional"]]
  },
  {
    text: "The desert days were ___ (1) ___, whereas the nights became ___ (2) ___; still, travelers learned to be ___ (3) ___ in heat and ___ (4) ___ in cold, yet their determination stayed ___ (5) ___.",
    answers: ["scorching", "frigid", "resilient", "vigilant", "unyielding"],
    wordBox: [
      "scorching", "frigid", "resilient", "vigilant", "unyielding",
      "mild", "warm", "fragile", "careless", "flexible"
    ],
    hints: [
      "Extremely hot.",
      "Extremely cold.",
      "Able to recover quickly.",
      "Watchful and alert.",
      "Not giving way."
    ],
    explanations: [
      "'Scorching' contrasts with 'freezing'.",
      "'Frigid' is the antonym of 'sweltering'.",
      "'Resilient' means able to withstand hardship.",
      "'Vigilant' means keeping careful watch.",
      "'Unyielding' means not giving up."
    ],
    clueWords: [["whereas"],["nights"],["learned"],["heat"],["yet"]]
  },
  {
    text: "Her voice was ___ (1) ___ on stage, but offstage it turned ___ (2) ___; nevertheless, she remained ___ (3) ___, showing ___ (4) ___ courage and ___ (5) ___ resolve.",
    answers: ["powerful", "soft", "confident", "tremendous", "steady"],
    wordBox: [
      "powerful", "soft", "confident", "tremendous", "steady",
      "weak", "harsh", "shy", "little", "faltering"
    ],
    hints: [
      "Strong and commanding.",
      "Quiet and gentle.",
      "Self-assured.",
      "Very great.",
      "Firm and unwavering."
    ],
    explanations: [
      "'Powerful' contrasts with 'soft'.",
      "'Soft' is the antonym of 'loud'.",
      "'Confident' means self-assured.",
      "'Tremendous' means very great in amount.",
      "'Steady' means not wavering."
    ],
    clueWords: [["but"],["offstage"],["remained"],["showing"],["resolve"]]
  },
  {
    text: "The river flowed ___ (1) ___ through the valley; however, upstream it ran ___ (2) ___, yet fishermen stayed ___ (3) ___ and ___ (4) ___ for their catch, demonstrating ___ (5) ___ patience.",
    answers: ["gently", "rapidly", "steadfast", "patient", "enduring"],
    wordBox: [
      "gently", "rapidly", "steadfast", "patient", "enduring",
      "roughly", "slowly", "wavering", "impatient", "fleeting"
    ],
    hints: [
      "Smooth and calm.",
      "Fast and strong.",
      "Firm in belief.",
      "Able to wait calmly.",
      "Continuing for a long time."
    ],
    explanations: [
      "'Gently' contrasts with 'rapidly'.",
      "'Rapidly' is the antonym of 'slowly'.",
      "'Steadfast' means firmly loyal.",
      "'Patient' means able to endure waiting.",
      "'Enduring' means lasting a long time."
    ],
    clueWords: [["valley"],["upstream"],["fishermen"],["catch"],["patience"]]
  },
  {
    text: "The city skyline looked ___ (1) ___ at dawn, but by noon it appeared ___ (2) ___; still, residents stayed ___ (3) ___, enjoying ___ (4) ___ breezes and ___ (5) ___ views.",
    answers: ["serene", "chaotic", "unperturbed", "gentle", "panoramic"],
    wordBox: [
      "serene", "chaotic", "unperturbed", "gentle", "panoramic",
      "turbulent", "busy", "anxious", "fierce", "limited"
    ],
    hints: [
      "Calm and peaceful.",
      "Disorderly and confusing.",
      "Not disturbed.",
      "Mild and soft.",
      "Wide-ranging."
    ],
    explanations: [
      "'Serene' contrasts with 'chaotic'.",
      "'Chaotic' is the antonym of 'orderly'.",
      "'Unperturbed' means not disturbed.",
      "'Gentle' means mild and pleasant.",
      "'Panoramic' means wide view."
    ],
    clueWords: [["dawn"],["noon"],["residents"],["breezes"],["views"]]
  },
  {
    text: "Her lecture was ___ (1) ___ and ___ (2) ___; however, the follow-up Q&A was ___ (3) ___ because participants felt more ___ (4) ___, demonstrating ___ (5) ___ engagement.",
    answers: ["informative", "concise", "lengthy", "inquisitive", "active"],
    wordBox: [
      "informative", "concise", "lengthy", "inquisitive", "active",
      "unhelpful", "verbose", "brief", "indifferent", "passive"
    ],
    hints: [
      "Providing useful information.",
      "Brief and to the point.",
      "Extended in time.",
      "Showing curiosity.",
      "Involving participation."
    ],
    explanations: [
      "'Informative' means providing information.",
      "'Concise' means brief and clear.",
      "'Lengthy' is the antonym of 'brief'.",
      "'Inquisitive' means curious.",
      "'Active' means participating."
    ],
    clueWords: [["lecture"],["follow-up"],["participants"],["felt"],["engagement"]]
  },
  {
    text: "Although the mountain trails were ___ (1) ___, the forest paths were ___ (2) ___; still, hikers felt ___ (3) ___ as they switched from one to the other, enjoying ___ (4) ___ terrain and ___ (5) ___ air.",
    answers: ["steep", "flat", "refreshed", "varied", "crisp"],
    wordBox: [
      "steep", "flat", "refreshed", "varied", "crisp",
      "gentle", "uneven", "tired", "monotonous", "humid"
    ],
    hints: [
      "Rising sharply.",
      "Level and even.",
      "Reinvigorated.",
      "Different kinds.",
      "Cool and clean."
    ],
    explanations: [
      "'Steep' contrasts with 'flat'.",
      "'Flat' is the antonym of 'inclined'.",
      "'Refreshed' means feeling revived.",
      "'Varied' means different.",
      "'Crisp' means cool and fresh."
    ],
    clueWords: [["mountain"],["forest"],["hikers"],["terrain"],["air"]]
  },
  {
    text: "The early morning air was ___ (1) ___, but by afternoon it turned ___ (2) ___; regardless, joggers remained ___ (3) ___, taking ___ (4) ___ strides and maintaining ___ (5) ___ spirits.",
    answers: ["cool", "sweltering", "steady", "brisk", "uplifted"],
    wordBox: [
      "cool", "sweltering", "steady", "brisk", "uplifted",
      "warm", "chilly", "uneven", "sluggish", "depressed"
    ],
    hints: [
      "Moderately cold.",
      "Uncomfortably hot.",
      "Constant.",
      "Energetic.",
      "Cheerful."
    ],
    explanations: [
      "'Cool' contrasts with 'sweltering'.",
      "'Sweltering' means extremely hot.",
      "'Steady' means consistent.",
      "'Brisk' means quick and energetic.",
      "'Uplifted' means raised in spirits."
    ],
    clueWords: [["morning"],["afternoon"],["joggers"],["strides"],["spirits"]]
  },
  {
    text: "His argument was ___ (1) ___ and ___ (2) ___; however, the counterpoint proved ___ (3) ___, forcing him to ___ (4) ___ and accept ___ (5) ___ evidence.",
    answers: ["sound", "convincing", "unassailable", "rethink", "contradictory"],
    wordBox: [
      "sound", "convincing", "unassailable", "rethink", "contradictory",
      "flawed", "weak", "question", "ignore", "supportive"
    ],
    hints: [
      "Logically valid.",
      "Persuasive.",
      "Impossible to attack.",
      "Think again.",
      "Opposing."
    ],
    explanations: [
      "'Sound' means valid and reliable.",
      "'Convincing' means persuasive.",
      "'Unassailable' means impossible to dispute.",
      "'Rethink' means reconsider.",
      "'Contradictory' means conflicting."
    ],
    clueWords: [["argument"],["counterpoint"],["proved"],["forcing"],["evidence"]]
  },
  {
    text: "The company’s profits were ___ (1) ___ last quarter, yet expenses remained ___ (2) ___; still, management stayed ___ (3) ___, implementing ___ (4) ___ strategies and achieving ___ (5) ___ growth.",
    answers: ["robust", "elevated", "optimistic", "innovative", "sustainable"],
    wordBox: [
      "robust", "elevated", "optimistic", "innovative", "sustainable",
      "weak", "reduced", "pessimistic", "standard", "short-term"
    ],
    hints: [
      "Strong and healthy.",
      "High or raised.",
      "Hopeful.",
      "Creative.",
      "Able to be maintained."
    ],
    explanations: [
      "'Robust' means strong.",
      "'Elevated' means raised or high.",
      "'Optimistic' means hopeful for success.",
      "'Innovative' means introducing new ideas.",
      "'Sustainable' means maintainable."
    ],
    clueWords: [["profits"],["expenses"],["management"],["strategies"],["growth"]]
  }
],

  morphologicalAffix: [
  {
    text: "Her strict ___ (1) ___ to protocol earned respect; her ___ (2) ___ in front of clients proved invaluable, and she demonstrated true ___ (3) ___ by sharing resources. Her ___ (4) ___ at meetings and her ___ (5) ___ attitude inspired all.",
    answers: [
      "adherence",
      "confidence",
      "generosity",
      "participation",
      "positivity"
    ],
    wordBox: [
      "adherence","confidence","generosity","participation","positivity",
      "obedience","anxiety","exclusion","minority","negativity"
    ],
    hints: [
      "Sticking firmly to rules.",
      "Self-assured belief.",
      "Willingness to give.",
      "Act of taking part.",
      "State of being positive."
    ],
    explanations: [
      "'Adherence' is the noun form of 'adhere' (to stick).",
      "'Confidence' comes from 'confide', meaning self-assurance.",
      "'Generosity' is from 'generous', meaning giving freely.",
      "'Participation' is from 'participate', meaning take part.",
      "'Positivity' is from 'positive', meaning optimistic."
    ],
    clueWords: [["protocol"],["clients"],["sharing"],["meetings"],["attitude"]]
  },
  {
    text: "The lab prioritized ___ (1) ___ of samples, using ___ (2) ___ procedures to maintain integrity; they relied on ___ (3) ___ techniques, followed by ___ (4) ___ to verify results and thorough ___ (5) ___ of protocols.",
    answers: [
      "standardization",
      "sterilization",
      "calibration",
      "validation",
      "documentation"
    ],
    wordBox: [
      "standardization","sterilization","calibration","validation","documentation",
      "normalization","randomization","evaluation","analysis","examination"
    ],
    hints: [
      "Making uniform according to a standard.",
      "Making free of microbes.",
      "Adjusting instruments to standards.",
      "Confirming accuracy.",
      "Recording details in writing."
    ],
    explanations: [
      "'Standardization' is the process of making consistent.",
      "'Sterilization' means killing all microorganisms.",
      "'Calibration' is adjusting equipment for accuracy.",
      "'Validation' means confirming something is correct.",
      "'Documentation' is recording information."
    ],
    clueWords: [["samples"],["procedures"],["techniques"],["verify"],["protocols"]]
  },
  {
    text: "Her ___ (1) ___ on opening night reflected weeks of ___ (2) ___; the audience’s ___ (3) ___ fueled her ___ (4) ___, and the critics praised her ___ (5) ___.",
    answers: [
      "performance",
      "training",
      "encouragement",
      "improvement",
      "excellence"
    ],
    wordBox: [
      "performance","training","encouragement","improvement","excellence",
      "mistrust","trainee","deterrence","eruption","transience"
    ],
    hints: [
      "Act of presenting.",
      "Process of practicing.",
      "Supportive motivating words.",
      "Process of getting better.",
      "State of being outstanding."
    ],
    explanations: [
      "'Performance' is the noun from 'perform'.",
      "'Training' comes from 'train'.",
      "'Encouragement' is from 'encourage'.",
      "'Improvement' is from 'improve'.",
      "'Excellence' is from 'excel'."
    ],
    clueWords: [["opening"],["weeks"],["audience"],["fueled"],["critics"]]
  },
  {
    text: "If errors ___ (1) ___ repeatedly, teams must ___ (2) ___ the process; failure to ___ (3) ___ can result in major ___ (4) ___, prompting them to ___ (5) ___ the workflow.",
    answers: [
      "recur",
      "redo",
      "revalidate",
      "disruptions",
      "revamp"
    ],
    wordBox: [
      "recur","redo","revalidate","disruptions","revamp",
      "occur","fail","validate","operations","improve"
    ],
    hints: [
      "Happen again.",
      "Do again.",
      "Confirm again.",
      "Interruptions.",
      "Make new or improved."
    ],
    explanations: [
      "'Recur' is 'cur' (run) with re- prefix.",
      "'Redo' is 'do' with re- prefix.",
      "'Revalidate' is 'validate' with re- prefix.",
      "'Disruptions' comes from 'disrupt' + -ion.",
      "'Revamp' is 'vamp' with re- prefix meaning renovate."
    ],
    clueWords: [["errors"],["teams"],["failure"],["major"],["workflow"]]
  },
  {
    text: "With limited resources, the project remained ___ (1) ___; its design was highly ___ (2) ___, and materials were ___ (3) ___. The resulting product proved ___ (4) ___ and ___ (5) ___ for future updates.",
    answers: [
      "manageable",
      "readable",
      "sustainable",
      "adaptable",
      "suitable"
    ],
    wordBox: [
      "manageable","readable","sustainable","adaptable","suitable",
      "edible","comfortable","portable","predictable","inevitable"
    ],
    hints: [
      "Able to be handled.",
      "Easy to read.",
      "Able to be maintained.",
      "Able to adjust.",
      "Appropriate or fitting."
    ],
    explanations: [
      "'Manageable' is 'manage' + -able.",
      "'Readable' is 'read' + -able.",
      "'Sustainable' is 'sustain' + -able.",
      "'Adaptable' is 'adapt' + -able.",
      "'Suitable' is 'suit' + -able."
    ],
    clueWords: [["resources"],["design"],["materials"],["product"],["updates"]]
  },
  {
    text: "Her ___ (1) ___ shone through every project, boosting team ___ (2) ___. The system’s ___ (3) ___ ensured minimal downtime, while its ___ (4) ___ and the ___ (5) ___ of solutions impressed stakeholders.",
    answers: [
      "creativity",
      "productivity",
      "reliability",
      "flexibility",
      "stability"
    ],
    wordBox: [
      "creativity","productivity","reliability","flexibility","stability",
      "clarity","security","complexity","simplicity","density"
    ],
    hints: [
      "Ability to create new ideas.",
      "Output per time unit.",
      "Dependability.",
      "Ability to adapt.",
      "State of firmness."
    ],
    explanations: [
      "'Creativity' is 'create' + -ivity.",
      "'Productivity' is 'produce' + -ivity.",
      "'Reliability' is 'rely' + -ability.",
      "'Flexibility' is 'flex' + -ibility.",
      "'Stability' is 'stable' + -ity."
    ],
    clueWords: [["project"],["boosting"],["system"],["downtime"],["stakeholders"]]
  },
  {
    text: "In the lab, scientists tested ___ (1) ___ agents against ___ (2) ___ strains; they developed ___ (3) ___ creams, explored ___ (4) ___ compounds, and assessed ___ (5) ___ sprays for safety.",
    answers: [
      "antibacterial",
      "antifungal",
      "antiviral",
      "anti-inflammatory",
      "antiseptic"
    ],
    wordBox: [
      "antibacterial","antifungal","antiviral","anti-inflammatory","antiseptic",
      "inflammatory","toxic","allergenic","natural","synthetic"
    ],
    hints: [
      "Against bacteria.",
      "Against fungi.",
      "Against viruses.",
      "Against inflammation.",
      "Preventing infection."
    ],
    explanations: [
      "Each uses 'anti-' prefix + root to mean 'against'."
    ],
    clueWords: [["tested"],["strains"],["creams"],["compounds"],["sprays"]]
  },
  {
    text: "Her passion for wildlife led her to become a ___ (1) ___; she collaborated with a ___ (2) ___ to track migration, consulted a ___ (3) ___ on habitat changes, and joined an ___ (4) ___ group before publishing as a respected ___ (5) ___.",
    answers: [
      "biologist",
      "zoologist",
      "ecologist",
      "conservationist",
      "naturalist"
    ],
    wordBox: [
      "biologist","zoologist","ecologist","conservationist","naturalist",
      "scientist","environmentalist","botanist","geologist","chemist"
    ],
    hints: [
      "Studies living organisms.",
      "Studies animals.",
      "Studies ecosystems.",
      "Works to preserve nature.",
      "Studies nature."
    ],
    explanations: [
      "Each is formed by adding '-ist' to a root denoting a field."
    ],
    clueWords: [["wildlife"],["track"],["habitat"],["group"],["publishing"]]
  },
  {
    text: "At the workshop, each ___ (1) ___ provided clear ___ (2) ___; the ___ (3) ___ materials were ___ (4) ___, and even ___ (5) ___ participants left confident.",
    answers: [
      "instructors",
      "instructions",
      "instructional",
      "uninstructed",
      "constructive"
    ],
    wordBox: [
      "instructors","instructions","instructional","uninstructed","constructive",
      "destructive","uneducated","informal","productive","directive"
    ],
    hints: [
      "People who teach.",
      "Directions given.",
      "Related to teaching.",
      "Not taught.",
      "Helpful and positive."
    ],
    explanations: [
      "Each is formed from 'instruct' or 'construct' with prefixes/suffixes."
    ],
    clueWords: [["workshop"],["provided"],["materials"],["participants"],["left"]]
  },
  {
    text: "To optimize the network, engineers had to ___ (1) ___ servers; after a temporary ___ (2) ___, they established stable ___ (3) ___, then worked to ___ (4) ___ redundant links and ensure ___ (5) ___ reliability.",
    answers: [
      "reconnect",
      "disconnection",
      "connections",
      "interconnect",
      "interoperability"
    ],
    wordBox: [
      "reconnect","disconnection","connections","interconnect","interoperability",
      "disconnect","interconnection","receiver","integration","reconstruction"
    ],
    hints: [
      "Connect again.",
      "Act of disconnecting.",
      "Established links.",
      "Connect between.",
      "Ability to work together."
    ],
    explanations: [
      "Each word shows how prefixes or suffixes alter the meaning of the root."
    ],
    clueWords: [["optimize"],["temporary"],["stable"],["redundant"],["reliability"]]
  }
],

  collocationCloze: [
  {
    text: "To stay alert, Mark started his day with a ___ (1) ___ coffee and a ___ (2) ___ breakfast; he then made a ___ (3) ___ decision, set a ___ (4) ___ pace, and tackled the task with ___ (5) ___ energy.",
    answers: ["strong", "hearty", "tough", "steady", "boundless"],
    wordBox: [
      "strong", "hearty", "tough", "steady", "boundless",
      "weak", "light", "quick", "slow", "limited"
    ],
    hints: [
      "Collocates with 'coffee'.",
      "Collocates with 'breakfast'.",
      "Collocates with 'decision'.",
      "Collocates with 'pace'.",
      "Collocates with 'energy'."
    ],
    explanations: [
      "'Strong coffee' means coffee with a high concentration.",
      "'Hearty breakfast' means a filling, nutritious meal.",
      "'Tough decision' means a difficult choice.",
      "'Steady pace' means a constant speed.",
      "'Boundless energy' means limitless vigor."
    ],
    clueWords: [
      ["coffee"], ["breakfast"], ["decision"], ["pace"], ["energy"]
    ]
  },
  {
    text: "Despite the ___ (1) ___ rain, the ___ (2) ___ traffic caused delays; commuters sought ___ (3) ___ shelter, admired the ___ (4) ___ view, and waited with ___ (5) ___ patience.",
    answers: ["heavy", "gridlocked", "temporary", "picturesque", "unwavering"],
    wordBox: [
      "heavy", "gridlocked", "temporary", "picturesque", "unwavering",
      "light", "smooth", "permanent", "boring", "fragile"
    ],
    hints: [
      "Collocates with 'rain'.",
      "Collocates with 'traffic'.",
      "Collocates with 'shelter'.",
      "Collocates with 'view'.",
      "Collocates with 'patience'."
    ],
    explanations: [
      "'Heavy rain' means intense rainfall.",
      "'Gridlocked traffic' means completely blocked vehicles.",
      "'Temporary shelter' means short-term protection.",
      "'Picturesque view' means visually attractive scenery.",
      "'Unwavering patience' means steadfast endurance."
    ],
    clueWords: [
      ["rain"], ["traffic"], ["shelter"], ["view"], ["patience"]
    ]
  },
  {
    text: "After the scandal, the company issued a ___ (1) ___ apology and implemented ___ (2) ___ measures; they also launched a ___ (3) ___ campaign, rebuilt ___ (4) ___ relationships, and restored ___ (5) ___ confidence.",
    answers: ["sincere", "corrective", "nationwide", "business", "public"],
    wordBox: [
      "sincere", "corrective", "nationwide", "business", "public",
      "forced", "temporary", "local", "personal", "private"
    ],
    hints: [
      "Collocates with 'apology'.",
      "Collocates with 'measures'.",
      "Collocates with 'campaign'.",
      "Collocates with 'relationships'.",
      "Collocates with 'confidence'."
    ],
    explanations: [
      "'Sincere apology' means genuine expression of regret.",
      "'Corrective measures' means actions to fix a problem.",
      "'Nationwide campaign' means an effort across the whole country.",
      "'Business relationships' means professional connections.",
      "'Public confidence' means trust by the general population."
    ],
    clueWords: [
      ["apology"], ["measures"], ["campaign"], ["relationships"], ["confidence"]
    ]
  },
  {
    text: "During the storm, the ___ (1) ___ winds knocked out power; neighbors used ___ (2) ___ generators, lit ___ (3) ___ candles, shared ___ (4) ___ meals, and maintained ___ (5) ___ spirits.",
    answers: ["fierce", "portable", "flickering", "home-cooked", "high"],
    wordBox: [
      "fierce", "portable", "flickering", "home-cooked", "high",
      "mild", "stationary", "steady", "takeout", "low"
    ],
    hints: [
      "Collocates with 'winds'.",
      "Collocates with 'generators'.",
      "Collocates with 'candles'.",
      "Collocates with 'meals'.",
      "Collocates with 'spirits'."
    ],
    explanations: [
      "'Fierce winds' means very strong winds.",
      "'Portable generators' means easily movable power sources.",
      "'Flickering candles' means candles with unsteady flame.",
      "'Home-cooked meals' means food made at home.",
      "'High spirits' means cheerful mood."
    ],
    clueWords: [
      ["winds"], ["generators"], ["candles"], ["meals"], ["spirits"]
    ]
  },
  {
    text: "The athlete set a new ___ (1) ___ record and received a ___ (2) ___ ovation; sponsors offered ___ (3) ___ support, fans showed ___ (4) ___ loyalty, and journalists wrote ___ (5) ___ articles.",
    answers: ["world", "standing", "financial", "unwavering", "glowing"],
    wordBox: [
      "world", "standing", "financial", "unwavering", "glowing",
      "national", "seated", "emotional", "fleeting", "critical"
    ],
    hints: [
      "Collocates with 'record'.",
      "Collocates with 'ovation'.",
      "Collocates with 'support'.",
      "Collocates with 'loyalty'.",
      "Collocates with 'articles'."
    ],
    explanations: [
      "'World record' means highest global achievement.",
      "'Standing ovation' means audience on their feet applauding.",
      "'Financial support' means monetary backing.",
      "'Unwavering loyalty' means constant faithfulness.",
      "'Glowing articles' means very positive write-ups."
    ],
    clueWords: [
      ["record"], ["ovation"], ["support"], ["loyalty"], ["articles"]
    ]
  },
  {
    text: "She made a ___ (1) ___ decision, booked a ___ (2) ___ flight, packed a ___ (3) ___ suitcase, arranged ___ (4) ___ transport, and embarked on a ___ (5) ___ adventure.",
    answers: ["spontaneous", "direct", "rolling", "private", "thrilling"],
    wordBox: [
      "spontaneous", "direct", "rolling", "private", "thrilling",
      "planned", "connecting", "heavy", "public", "mundane"
    ],
    hints: [
      "Collocates with 'decision'.",
      "Collocates with 'flight'.",
      "Collocates with 'suitcase'.",
      "Collocates with 'transport'.",
      "Collocates with 'adventure'."
    ],
    explanations: [
      "'Spontaneous decision' means made without planning.",
      "'Direct flight' means nonstop journey.",
      "'Rolling suitcase' means suitcase with wheels.",
      "'Private transport' means exclusive conveyance.",
      "'Thrilling adventure' means exciting experience."
    ],
    clueWords: [
      ["decision"], ["flight"], ["suitcase"], ["transport"], ["adventure"]
    ]
  },
  {
    text: "At the gala, guests enjoyed a ___ (1) ___ meal, sampled ___ (2) ___ wine, danced to ___ (3) ___ music, admired ___ (4) ___ decorations, and left with ___ (5) ___ memories.",
    answers: ["lavish", "vintage", "live", "exquisite", "lasting"],
    wordBox: [
      "lavish", "vintage", "live", "exquisite", "lasting",
      "simple", "modern", "recorded", "plain", "fleeting"
    ],
    hints: [
      "Collocates with 'meal'.",
      "Collocates with 'wine'.",
      "Collocates with 'music'.",
      "Collocates with 'decorations'.",
      "Collocates with 'memories'."
    ],
    explanations: [
      "'Lavish meal' means lavishly provided feast.",
      "'Vintage wine' means high-quality old wine.",
      "'Live music' means performed in person.",
      "'Exquisite decorations' means extremely beautiful adornments.",
      "'Lasting memories' means enduring recollections."
    ],
    clueWords: [
      ["meal"], ["wine"], ["music"], ["decorations"], ["memories"]
    ]
  },
  {
    text: "In her new role, she faced a ___ (1) ___ challenge, held ___ (2) ___ meetings, devised ___ (3) ___ strategies, managed ___ (4) ___ crises, and achieved ___ (5) ___ success.",
    answers: ["formidable", "weekly", "effective", "multiple", "unprecedented"],
    wordBox: [
      "formidable", "weekly", "effective", "multiple", "unprecedented",
      "minor", "monthly", "ineffective", "single", "ordinary"
    ],
    hints: [
      "Collocates with 'challenge'.",
      "Collocates with 'meetings'.",
      "Collocates with 'strategies'.",
      "Collocates with 'crises'.",
      "Collocates with 'success'."
    ],
    explanations: [
      "'Formidable challenge' means intimidating task.",
      "'Weekly meetings' means gatherings every week.",
      "'Effective strategies' means plans that work.",
      "'Multiple crises' means several emergencies.",
      "'Unprecedented success' means neverachieved success before."
    ],
    clueWords: [
      ["challenge"], ["meetings"], ["strategies"], ["crises"], ["success"]
    ]
  },
  {
    text: "The charity organized a ___ (1) ___ fundraiser, offered ___ (2) ___ incentives, built ___ (3) ___ partnerships, raised ___ (4) ___ funds, and made a ___ (5) ___ impact.",
    answers: ["high-profile", "attractive", "strategic", "substantial", "lasting"],
    wordBox: [
      "high-profile", "attractive", "strategic", "substantial", "lasting",
      "low-key", "repulsive", "random", "minimal", "short-lived"
    ],
    hints: [
      "Collocates with 'fundraiser'.",
      "Collocates with 'incentives'.",
      "Collocates with 'partnerships'.",
      "Collocates with 'funds'.",
      "Collocates with 'impact'."
    ],
    explanations: [
      "'High-profile fundraiser' means a widely known event.",
      "'Attractive incentives' means appealing rewards.",
      "'Strategic partnerships' means carefully planned alliances.",
      "'Substantial funds' means large amounts of money.",
      "'Lasting impact' means enduring effect."
    ],
    clueWords: [
      ["fundraiser"], ["incentives"], ["partnerships"], ["funds"], ["impact"]
    ]
  },
  {
    text: "For the presentation, he prepared a ___ (1) ___ report, used ___ (2) ___ visuals, maintained ___ (3) ___ eye contact, spoke in a ___ (4) ___ tone, and concluded with a ___ (5) ___ summary.",
    answers: ["detailed", "compelling", "steady", "conversational", "concise"],
    wordBox: [
      "detailed", "compelling", "steady", "conversational", "concise",
      "brief", "dry", "wandering", "formal", "lengthy"
    ],
    hints: [
      "Collocates with 'report'.",
      "Collocates with 'visuals'.",
      "Collocates with 'eye contact'.",
      "Collocates with 'tone'.",
      "Collocates with 'summary'."
    ],
    explanations: [
      "'Detailed report' means including many specifics.",
      "'Compelling visuals' means very persuasive images.",
      "'Steady eye contact' means consistent gaze.",
      "'Conversational tone' means friendly speaking style.",
      "'Concise summary' means brief overview."
    ],
    clueWords: [
      ["report"], ["visuals"], ["eye contact"], ["tone"], ["summary"]
    ]
  }
],

  grammaticalRole: [
  {
    text: "The cat moved ___ (1) ___ across the floor, and the dog barked ___ (2) ___; the children watched ___ (3) ___, then laughed ___ (4) ___ when the puppy ___ (5) ___ playfully.",
    answers: ["silently", "loudly", "curiously", "joyfully", "approached"],
    wordBox: [
      "silently",
      "loudly",
      "curiously",
      "joyfully",
      "approached",
      "silent",
      "loud",
      "curious",
      "joyful",
      "approach"
    ],
    hints: [
      "Describe how the cat moved (adverb).",
      "Describe how the dog barked (adverb).",
      "Describe how they watched (adverb).",
      "Describe how they laughed (adverb).",
      "Action verb meaning came near."
    ],
    explanations: [
      "'Silently' is an adverb modifying 'moved.'",
      "'Loudly' is an adverb modifying 'barked.'",
      "'Curiously' is an adverb modifying 'watched.'",
      "'Joyfully' is an adverb modifying 'laughed.'",
      "'Approached' is the past-tense verb meaning 'came near.'"
    ],
    clueWords: [["moved"],["barked"],["watched"],["laughed"],["puppy"]]
  },
  {
    text: "She sang ___ (1) ___ at the concert, then smiled ___ (2) ___ when the audience applauded; afterwards, she felt ___ (3) ___ and thanked them ___ (4) ___ before leaving ___ (5) ___.",
    answers: ["beautifully", "gracefully", "elated", "sincerely", "reluctantly"],
    wordBox: [
      "beautifully",
      "gracefully",
      "elated",
      "sincerely",
      "reluctantly",
      "beautiful",
      "graceful",
      "happy",
      "genuine",
      "willingly"
    ],
    hints: [
      "How she sang (adverb).",
      "How she smiled (adverb).",
      "How she felt (adjective).",
      "How she thanked them (adverb).",
      "How she left (adverb)."
    ],
    explanations: [
      "'Beautifully' is an adverb modifying 'sang.'",
      "'Gracefully' is an adverb modifying 'smiled.'",
      "'Elated' is an adjective describing her feeling.",
      "'Sincerely' is an adverb modifying 'thanked.'",
      "'Reluctantly' is an adverb modifying 'leaving.'"
    ],
    clueWords: [["sang"],["smiled"],["felt"],["thanked"],["leaving"]]
  },
  {
    text: "They worked ___ (1) ___ to finish on time, and their ___ (2) ___ efforts impressed the manager; he praised them ___ (3) ___ and rewarded them ___ (4) ___ for their ___ (5) ___ performance.",
    answers: ["diligently", "collective", "publicly", "generously", "outstanding"],
    wordBox: [
      "diligently",
      "collective",
      "publicly",
      "generously",
      "outstanding",
      "diligent",
      "collectively",
      "privately",
      "stingily",
      "ordinary"
    ],
    hints: [
      "How they worked (adverb).",
      "Describing 'efforts' (adjective).",
      "How he praised them (adverb).",
      "How he rewarded them (adverb).",
      "Describing 'performance' (adjective)."
    ],
    explanations: [
      "'Diligently' is an adverb modifying 'worked.'",
      "'Collective' is an adjective modifying 'efforts.'",
      "'Publicly' is an adverb modifying 'praised.'",
      "'Generously' is an adverb modifying 'rewarded.'",
      "'Outstanding' is an adjective describing 'performance.'"
    ],
    clueWords: [["worked"],["efforts"],["praised"],["rewarded"],["performance"]]
  },
  {
    text: "The teacher explained the concept ___ (1) ___, answered questions ___ (2) ___, and assigned the homework ___ (3) ___; students then studied ___ (4) ___ to master the material and felt ___ (5) ___ afterward.",
    answers: ["clearly", "thoroughly", "promptly", "individually", "confident"],
    wordBox: [
      "clearly",
      "thoroughly",
      "promptly",
      "individually",
      "confident",
      "clear",
      "complete",
      "late",
      "together",
      "unsure"
    ],
    hints: [
      "How she explained (adverb).",
      "How she answered (adverb).",
      "How she assigned (adverb).",
      "How students studied (adverb).",
      "How they felt (adjective)."
    ],
    explanations: [
      "'Clearly' is an adverb modifying 'explained.'",
      "'Thoroughly' is an adverb modifying 'answered.'",
      "'Promptly' is an adverb modifying 'assigned.'",
      "'Individually' is an adverb modifying 'studied.'",
      "'Confident' is an adjective describing their feeling."
    ],
    clueWords: [["explained"],["questions"],["assigned"],["studied"],["felt"]]
  },
  {
    text: "Please hand me the ___ (1) ___ from the drawer; then cut ___ (2) ___ with those ___ (3) ___; afterwards, wash them ___ (4) ___ and store them ___ (5) ___.",
    answers: ["scissors", "carefully", "vegetables", "knives", "properly"],
    wordBox: [
      "scissors",
      "carefully",
      "vegetables",
      "knives",
      "properly",
      "scissor",
      "easily",
      "fruits",
      "tools",
      "haphazardly"
    ],
    hints: [
      "Name of the tool (noun).",
      "How to cut (adverb).",
      "What to cut (noun).",
      "Another tool (noun).",
      "How to store (adverb)."
    ],
    explanations: [
      "'Scissors' is a plural noun naming the tool.",
      "'Carefully' is an adverb modifying 'cut.'",
      "'Vegetables' is a noun object of 'cut.'",
      "'Knives' is a plural noun naming a tool.",
      "'Properly' is an adverb modifying 'store.'"
    ],
    clueWords: [["drawer"],["cut"],["those"],["wash"],["store"]]
  },
  {
    text: "They will arrive ___ (1) ___ tomorrow morning, and we should greet them ___ (2) ___; afterwards, we’ll travel ___ (3) ___ to the venue and return ___ (4) ___ by evening so everyone can rest ____(5) ___.",
    answers: ["early", "warmly", "directly", "promptly", "peacefully"],
    wordBox: [
      "early",
      "warmly",
      "directly",
      "promptly",
      "peacefully",
      "late",
      "coldly",
      "indirectly",
      "eventually",
      "restfully"
    ],
    hints: [
      "When they arrive (adverb).",
      "How to greet them (adverb).",
      "How to travel (adverb).",
      "How to return (adverb).",
      "How they should rest (adverb)."
    ],
    explanations: [
      "'Early' is an adverb modifying 'arrive.'",
      "'Warmly' is an adverb modifying 'greet.'",
      "'Directly' is an adverb modifying 'travel.'",
      "'Promptly' is an adverb modifying 'return.'",
      "'Peacefully' is an adverb modifying 'rest.'"
    ],
    clueWords: [["arrive"],["greet"],["travel"],["return"],["rest"]]
  },
  {
    text: "Her ___ (1) ___ impressed the judges as she delivered her speech ___ (2) ___; later, she answered questions ___ (3) ___ and exited the stage ___ (4) ___, leaving the crowd ___ (5) ___.",
    answers: ["delivery", "eloquently", "confidently", "gracefully", "awed"],
    wordBox: [
      "delivery",
      "eloquently",
      "confidently",
      "gracefully",
      "awed",
      "delayed",
      "garbled",
      "tentatively",
      "awkwardly",
      "indifferent"
    ],
    hints: [
      "Style of speaking (noun).",
      "How she spoke (adverb).",
      "How she answered (adverb).",
      "How she exited (adverb).",
      "How the crowd felt (adjective)."
    ],
    explanations: [
      "'Delivery' is a noun naming the manner of speaking.",
      "'Eloquently' is an adverb modifying 'delivered.'",
      "'Confidently' is an adverb modifying 'answered.'",
      "'Gracefully' is an adverb modifying 'exited.'",
      "'Awed' is an adjective describing the crowd."
    ],
    clueWords: [["speech"],["delivered"],["questions"],["stage"],["crowd"]]
  },
  {
    text: "The scientists analyzed the data ___ (1) ___, wrote up their findings ___ (2) ___, and presented them ___ (3) ___ to peers; afterward, they relaxed ___ (4) ___ and celebrated ___ (5) ___.",
    answers: ["meticulously", "thoroughly", "professionally", "casually", "joyously"],
    wordBox: [
      "meticulously",
      "thoroughly",
      "professionally",
      "casually",
      "joyously",
      "hastily",
      "briefly",
      "formally",
      "seriously",
      "quietly"
    ],
    hints: [
      "How they analyzed (adverb).",
      "How they wrote (adverb).",
      "How they presented (adverb).",
      "How they relaxed (adverb).",
      "How they celebrated (adverb)."
    ],
    explanations: [
      "'Meticulously' means with great attention to detail.",
      "'Thoroughly' means completely and carefully.",
      "'Professionally' means in a businesslike manner.",
      "'Casually' means informally or comfortably.",
      "'Joyously' means with great joy."
    ],
    clueWords: [["analyzed"],["written"],["presented"],["relaxed"],["celebrated"]]
  },
  {
    text: "Please speak ___ (1) ___ during the interview, answer questions ___ (2) ___, and maintain ___ (3) ___ posture; afterward, you may sit ___ (4) ___ and wait ___ (5) ___ for feedback.",
    answers: ["clearly", "honestly", "professional", "quietly", "anxiously"],
    wordBox: [
      "clearly",
      "honestly",
      "professional",
      "quietly",
      "anxiously",
      "vaguely",
      "deceptively",
      "casual",
      "loudly",
      "patiently"
    ],
    hints: [
      "How to speak (adverb).",
      "How to answer (adverb).",
      "Describe 'posture' (adjective).",
      "How to sit (adverb).",
      "How to wait (adverb)."
    ],
    explanations: [
      "'Clearly' is an adverb modifying 'speak.'",
      "'Honestly' is an adverb modifying 'answer.'",
      "'Professional' is an adjective modifying 'posture.'",
      "'Quietly' is an adverb modifying 'sit.'",
      "'Anxiously' is an adverb modifying 'wait.'"
    ],
    clueWords: [["interview"],["questions"],["posture"],["sit"],["wait"]]
  },
  {
    text: "They collaborated ___ (1) ___ on the project, shared ideas ___ (2) ___, and resolved conflicts ___ (3) ___; as a result, they delivered results ___ (4) ___ and celebrated ___ (5) ___.",
    answers: ["seamlessly", "openly", "amicably", "efficiently", "together"],
    wordBox: [
      "seamlessly",
      "openly",
      "amicably",
      "efficiently",
      "together",
      "awkwardly",
      "secretly",
      "hostilely",
      "slowly",
      "alone"
    ],
    hints: [
      "How to collaborate (adverb).",
      "How to share (adverb).",
      "How to resolve (adverb).",
      "How to deliver (adverb).",
      "How to celebrate (adverb)."
    ],
    explanations: [
      "'Seamlessly' means smoothly without interruption.",
      "'Openly' means without concealment.",
      "'Amicably' means in a friendly manner.",
      "'Efficiently' means quickly and effectively.",
      "'Together' means with each other."
    ],
    clueWords: [["collaborated"],["shared"],["resolved"],["delivered"],["celebrated"]]
  }
],

  connectorClue: [
  {
    text: "Although ___ (1) ___ were ___ (2) ___, we ___ (3) ___ on schedule because ___ (4) ___ remained ___ (5) ___.",
    answers: ["delays", "inevitable", "proceeded", "circumstances", "favorable"],
    wordBox: [
      "delays", "inevitable", "proceeded", "circumstances", "favorable",
      "changes", "avoidable", "halted", "plans", "uncertain"
    ],
    hints: [
      "Interruptions in timing",
      "Unavoidable",
      "Moved forward",
      "Situations or conditions",
      "Helpful or advantageous"
    ],
    explanations: [
      "'Delays' are interruptions in timing.",
      "'Inevitable' means cannot be avoided.",
      "'Proceeded' means continued forward.",
      "'Circumstances' are conditions or facts.",
      "'Favorable' means advantageous."
    ],
    clueWords: [["Although"],["were"],["we"],["because"],["remained"]]
  },
  {
    text: "Since ___ (1) ___ is ___ (2) ___, you must ___ (3) ___ it; otherwise, ___ (4) ___ may ___ (5) ___.",
    answers: ["equipment", "damaged", "replace", "breakdowns", "occur"],
    wordBox: [
      "equipment", "damaged", "replace", "breakdowns", "occur",
      "furniture", "new", "maintain", "repairs", "prevent"
    ],
    hints: [
      "Tools or machinery",
      "Harmed or impaired",
      "Swap out",
      "Failures in operation",
      "Happen"
    ],
    explanations: [
      "'Equipment' refers to tools or machinery.",
      "'Damaged' means harmed or impaired.",
      "'Replace' means swap out with a new one.",
      "'Breakdowns' are failures in operation.",
      "'Occur' means to happen."
    ],
    clueWords: [["Since"],["is"],["must"],["otherwise"],["may"]]
  },
  {
    text: "Because ___ (1) ___ was ___ (2) ___, they ___ (3) ___ indoors; nonetheless, the ___ (4) ___ managed to ___ (5) ___.",
    answers: ["weather", "inclement", "gathered", "team", "improvise"],
    wordBox: [
      "weather", "inclement", "gathered", "team", "improvise",
      "venue", "pleasant", "scattered", "group", "create"
    ],
    hints: [
      "Atmospheric conditions",
      "Stormy or severe",
      "Met together",
      "A group working together",
      "Make do with what's available"
    ],
    explanations: [
      "'Weather' refers to the state of the atmosphere.",
      "'Inclement' means stormy or severe.",
      "'Gathered' means came together in one place.",
      "'Team' is a group of people working together.",
      "'Improvise' means create solutions on the spot."
    ],
    clueWords: [["Because"],["was"],["they"],["nonetheless"],["managed"]]
  },
  {
    text: "However, ___ (1) ___ had ___ (2) ___, so the committee ___ (3) ___ the proposal and ___ (4) ___ further ___ (5) ___.",
    answers: ["feedback", "arrived", "postponed", "requested", "information"],
    wordBox: [
      "feedback", "arrived", "postponed", "requested", "information",
      "data", "departed", "approved", "obtained", "consent"
    ],
    hints: [
      "Comments or opinions",
      "Came in",
      "Delayed",
      "Asked for",
      "Facts or details"
    ],
    explanations: [
      "'Feedback' means comments or opinions.",
      "'Arrived' means came in or was received.",
      "'Postponed' means delayed until later.",
      "'Requested' means asked for.",
      "'Information' means facts or details."
    ],
    clueWords: [["However"],["had"],["so"],["and"],["further"]]
  },
  {
    text: "Despite ___ (1) ___ being ___ (2) ___, the students ___ (3) ___ to complete their assignments and ___ (4) ___ the ___ (5)___.",
    answers: ["instructions", "ambiguous", "managed", "submit", "work"],
    wordBox: [
      "instructions", "ambiguous", "managed", "submit", "work",
      "guidelines", "clear", "failed", "review", "reports"
    ],
    hints: [
      "Directions or orders",
      "Unclear or vague",
      "Succeeded in",
      "Turn in",
      "Tasks or assignments"
    ],
    explanations: [
      "'Instructions' are directions or orders.",
      "'Ambiguous' means unclear or open to interpretation.",
      "'Managed' means succeeded in doing.",
      "'Submit' means turn in for evaluation.",
      "'Work' refers to tasks or assignments."
    ],
    clueWords: [["Despite"],["being"],["the students"],["and"],["the"]]
  },
  {
    text: "Unless ___ (1) ___ is ___ (2) ___, you cannot ___ (3) ___; therefore, ___ (4) ___ must be ___ (5) ___.",
    answers: ["authentication", "verified", "access", "credentials", "validated"],
    wordBox: [
      "authentication", "verified", "access", "credentials", "validated",
      "registration", "denied", "login", "password", "confirmed"
    ],
    hints: [
      "Process of confirming identity",
      "Proven true",
      "Enter or use",
      "Login details",
      "Checked for accuracy"
    ],
    explanations: [
      "'Authentication' is the process of confirming identity.",
      "'Verified' means proven true or accurate.",
      "'Access' means enter or use a system.",
      "'Credentials' are login details.",
      "'Validated' means checked for accuracy."
    ],
    clueWords: [["Unless"],["is"],["you"],["therefore"],["must"]]
  },
  {
    text: "While ___ (1) ___ was ___ (2) ___, the engineers ___ (3) ___ to test the prototype and ___ (4) ___ the ___ (5)___.",
    answers: ["system", "unstable", "continued", "monitor", "results"],
    wordBox: [
      "system", "unstable", "continued", "monitor", "results",
      "device", "stable", "halted", "analyze", "data"
    ],
    hints: [
      "Set of components",
      "Not steady",
      "Kept going",
      "Observe or check",
      "Outcomes of tests"
    ],
    explanations: [
      "'System' refers to a set of components working together.",
      "'Unstable' means not steady or secure.",
      "'Continued' means kept going.",
      "'Monitor' means observe or check continuously.",
      "'Results' are outcomes of tests."
    ],
    clueWords: [["While"],["was"],["the engineers"],["and"],["the"]]
  },
  {
    text: "Therefore, ___ (1) ___ was ___ (2) ___, and they ___ (3) ___ a ___ (4) ___; so ___ (5) ___ improved.",
    answers: ["efficiency", "increased", "implemented", "new procedure", "performance"],
    wordBox: [
      "efficiency", "increased", "implemented", "new procedure", "performance",
      "productivity", "declined", "designed", "process", "results"
    ],
    hints: [
      "Ability to do something well",
      "Went up",
      "Put into effect",
      "A method or set of steps",
      "How well something works"
    ],
    explanations: [
      "'Efficiency' means ability to do something well with minimal waste.",
      "'Increased' means went up or became greater.",
      "'Implemented' means put into effect.",
      "'New procedure' is a method or set of steps recently adopted.",
      "'Performance' refers to how well something works."
    ],
    clueWords: [["Therefore"],["was"],["and"],["a"],["so"]]
  },
  {
    text: "If ___ (1) ___ is ___ (2) ___, the program will ___ (3) ___; otherwise, ___ (4) ___ may ___ (5) ___.",
    answers: ["input", "correct", "proceed", "errors", "occur"],
    wordBox: [
      "input", "correct", "proceed", "errors", "occur",
      "output", "invalid", "start", "failures", "happen"
    ],
    hints: [
      "Data provided",
      "Accurate",
      "Move forward",
      "Mistakes",
      "Take place"
    ],
    explanations: [
      "'Input' is data provided to a system.",
      "'Correct' means accurate or free from error.",
      "'Proceed' means move forward or continue.",
      "'Errors' are mistakes.",
      "'Occur' means take place."
    ],
    clueWords: [["If"],["is"],["will"],["otherwise"],["may"]]
  },
  {
    text: "So ___ (1) ___ was his ___ (2) ___ that he ___ (3) ___, although ___ (4) ___ were ___ (5) ___.",
    answers: ["strong", "argument", "won", "opponents", "skeptical"],
    wordBox: [
      "strong", "argument", "won", "opponents", "skeptical",
      "weak", "claim", "lost", "supporters", "convinced"
    ],
    hints: [
      "Opposite of weak",
      "Reason or set of reasons",
      "Prevailed in debate",
      "People who disagree",
      "Doubtful"
    ],
    explanations: [
      "'Strong' is the antonym of 'weak.'",
      "'Argument' is a set of reasons supporting a position.",
      "'Won' means prevailed or was victorious.",
      "'Opponents' are people who disagree.",
      "'Skeptical' means having doubts."
    ],
    clueWords: [["So"],["was"],["he"],["although"],["were"]]
  }
    ]
  };
};
