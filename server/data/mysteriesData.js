const initialMysteries = [
  {
    id: 1,
    title: "The Last Lamp",
    tagline: "Three keepers. One cold lighthouse. Zero witnesses.",
    intro:
      "December 15, 1931. The supply boat Al-Amal reaches Ras al-Noor, a lonely lighthouse on the Syrian coast. " +
      "No flag on the pole. No smoke from the chimney. Nobody waiting on the pier. " +
      "Inside, the table is set, the beds are unmade, and the back door swings in the wind. " +
      "Three keepers lived here: Jamil (head keeper), Murad (assistant, with a bad cough) and young Sami. " +
      "You are the inspector sent from Latakia. Find out what happened.",
    isLocked: false,
    unlockAfterId: null,
    stages: [
      {
        question:
          "One keeper left the lighthouse without his coat. Who was it?",
        clues: [
          {
            id: 1,
            title: "The Coat Hooks",
            text: "Three hooks by the door, labelled JAMIL, MURAD and SAMI. Two are empty. One heavy oilskin coat still hangs on its hook: the one above the name MURAD.",
          },
          {
            id: 2,
            title: "The Boots",
            text: "Three pairs of boots stood under the hooks. All three pairs are gone. Whoever left, left in a hurry.",
          },
          {
            id: 3,
            title: "The Cough Drops",
            text: 'A tin of cough drops on the windowsill, with a note: "For Murad. Rest, and do NOT go out in the cold. J."',
          },
        ],
        answer: "murad",
        hints: [
          "Look at the name above the hook that still has a coat.",
          "The answer is one of the three keepers: Jamil, Murad or Sami.",
        ],
        successMessage:
          "Correct. Murad ran out into the storm with no coat. That is not a man going for a walk.",
      },
      {
        question:
          "On which day of December did the lamp burn for the last time? (Just the day number.)",
        clues: [
          {
            id: 1,
            title: "The Oil Ledger",
            text: "Dec 1: oil tank filled with 20 litres. Rule of the station: the lamp is lit every night at dusk and burns exactly 1 litre per night.",
          },
          {
            id: 2,
            title: "The Gauge",
            text: "The oil gauge on the tank reads 6 litres.",
          },
          {
            id: 3,
            title: "The Last Log Entry",
            text: 'Dec 13, Jamil\'s handwriting: "Storm rising. Waves reach the lower steps. Lamp lit as usual." The next page is blank.',
          },
        ],
        answer: "14",
        hints: [
          "The lamp was already lit on the night of Dec 1.",
          "20 minus 6 is the number of nights it burned. Count that many nights starting from Dec 1.",
        ],
        successMessage:
          "Correct. The lamp burned until the night of the 14th. The log stops a day earlier than the light does.",
      },
      {
        question:
          "Where were the keepers when the storm struck? (A place on the island, two words.)",
        clues: [
          {
            id: 1,
            title: "The Kitchen Slate",
            text: 'Chalk on the kitchen slate: "Crates at West Landing are loose. All hands. J."',
          },
          {
            id: 2,
            title: "The Stopped Clock",
            text: 'The kitchen clock stopped at 9:40 PM. Pinned beside it, the tide table: "Dec 14, high tide 9:30 PM. Storm surge expected."',
          },
          {
            id: 3,
            title: "The Landing",
            text: "Down at the platform, supply crates lie overturned, a thick rope is snapped clean, and seaweed hangs from a railing far above the normal waterline.",
          },
        ],
        answer: "west landing",
        hints: [
          "Read the chalk on the slate again.",
          "It is a direction followed by a kind of platform where boats unload.",
        ],
        successMessage: "Correct. The West Landing. The case is closed.",
      },
    ],
    reveal:
      "On the night of December 14, the storm surge rose far higher than anyone predicted. " +
      "Jamil and Sami went down to the West Landing to save the supply crates. " +
      "Murad, sick and ordered to stay in bed, saw a giant wave coming from the window. " +
      "He ran out without his coat to warn them, and did not even stop to close the back door. " +
      "The wave took all three keepers together. The clock stopped at 9:40 PM. " +
      "The lamp, lit by Jamil at dusk as always, was the last thing at Ras al-Noor to go dark. " +
      "Case closed, Inspector. The sea keeps its own records.",
  },

  {
    id: 2,
    title: "The Bab Al-Hara Challenge",
    tagline: "A missing key. A locked gate. One suspicious neighbor.",
    intro:
      "You have entered the famous neighborhood of Bab Al-Hara. " +
      "One morning, Abu Issam discovers that the key to the neighborhood gate has disappeared. " +
      "Three people were near the gate the night before: Abu Issam, Abu Shihab and Feryal. " +
      "Each person tells a different story. Your job is to find out who took the key.",
    isLocked: true,
    unlockAfterId: 1,
    stages: [
      {
        question: "Who was standing beside Abu Issam when he locked the gate?",
        clues: [
          {
            id: 1,
            title: "Abu Issam's Statement",
            text: 'Abu Issam says: "I locked the gate at sunset and put the key in my pocket."',
          },
          {
            id: 2,
            title: "The Empty Pocket",
            text: "Abu Issam's pocket was empty when he returned home. He remembers having the key when he left the gate.",
          },
          {
            id: 3,
            title: "Feryal's Statement",
            text: 'Feryal says: "I saw Abu Shihab standing beside Abu Issam at the gate just before it was locked."',
          },
        ],
        answer: "abu shihab",
        hints: [
          "Think about who was next to Abu Issam at the gate.",
          "The answer is the person mentioned by Feryal.",
        ],
        successMessage:
          "Correct. Abu Shihab was the last person seen beside Abu Issam before the key disappeared.",
      },

      {
        question:
          "Where did Abu Shihab go right after the gate was locked? (Two words.)",
        clues: [
          {
            id: 1,
            title: "The Alley",
            text: "A neighbor saw Abu Shihab walking quickly toward the old coffee shop.",
          },
          {
            id: 2,
            title: "The Coffee Shop Owner",
            text: "The coffee shop owner remembers Abu Shihab arriving alone, looking worried, and asking whether any strangers had come by that evening.",
          },
          {
            id: 3,
            title: "The Footprints",
            text: "Fresh footprints led from the gate toward the coffee shop. No other footprints went in the opposite direction.",
          },
        ],
        answer: "coffee shop",
        hints: [
          "Look at where the footprints lead.",
          "It is the place where Abu Shihab went after leaving the gate.",
        ],
        successMessage:
          "Correct. Abu Shihab went straight to the coffee shop after the gate was locked.",
      },

      {
        question: "Where was the missing key hidden? (Two words.)",
        clues: [
          {
            id: 1,
            title: "The Search",
            text: "A search of the coffee shop found nothing on the tables, in the drawers, or behind the counter.",
          },
          {
            id: 2,
            title: "The Entrance",
            text: "Near the entrance stands a wooden box the owner uses to store old neighborhood papers and spare tools. Its lid is slightly open.",
          },
          {
            id: 3,
            title: "Abu Shihab's Confession",
            text: 'Abu Shihab finally admits: "I only wanted the gate locked for one night. I hid the key where nobody would think to look, among the old papers and the spare tools."',
          },
        ],
        answer: "wooden box",
        hints: [
          "Where in the coffee shop are old papers and spare tools kept?",
          "Two words: the material of the container, then the container itself.",
        ],
        successMessage:
          "Correct. The key was hidden in the wooden box. The mystery is solved.",
      },
    ],

    reveal:
      "That evening, a stranger had been asking about the festival money kept in Abu Issam's shop. " +
      "Abu Shihab feared a theft in the night and wanted the gate to stay locked until morning, so no one could open it. " +
      "Just after Abu Issam locked the gate, Abu Shihab took the key from his pocket. " +
      "He walked straight to the coffee shop, asked the owner about strangers, and hid the key in the wooden box near the entrance. " +
      "He never meant to keep it. He only wanted one safe night for the neighborhood. " +
      "The key was found, the gate was opened, and the Bab Al-Hara mystery was solved.",
  },
];

export default initialMysteries;
