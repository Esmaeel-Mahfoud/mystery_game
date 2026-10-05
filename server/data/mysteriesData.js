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
    title: "The Warden's Five",
    tagline: "Five men. Five caps. Not one could see his own.",
    intro:
        "November 9, 1925. Qal'at al-Samt, the Fortress of Silence, a prison in the Syrian desert. " +
        "The night before, the warden locked five prisoners in one cell and explained a game. " +
        "At dawn they would stand in a line on the stairs, all facing the same way, each man able to see only the men ahead of him. " +
        "The warden would place a black or white cap on every head. Then, starting from the back, each man would say one word, black or white, naming the color of his own cap. " +
        "Every man who named it correctly would walk free. Apart from that one word, nobody was allowed to speak, signal or turn his head. " +
        "At dawn, four of the five walked out of the gate. The warden wants to know how. " +
        "The prisoners are numbered 1 to 5 in the order they spoke. Prisoner 1 stood at the back and could see all four men ahead of him. Prisoner 5 stood at the front and could see no one. " +
        "You are the inspector sent from Aleppo. Find out.",
    isLocked: true,
    unlockAfterId: 1,
    stages: [
      {
        question:
            "Prisoner 1 said black. Did that mean he saw an even or an odd number of black caps ahead of him? (One word.)",
        clues: [
          {
            id: 1,
            title: "The Scratches on the Cell Wall",
            text: 'Scratched into the stone by the cell door: "BACK MAN COUNTS BLACK CAPS. EVEN = BLACK. ODD = WHITE."',
          },
          {
            id: 2,
            title: "The Guard's Log",
            text: "Prisoner 1 spoke first and said black. His own cap turned out to be white.",
          },
          {
            id: 3,
            title: "The Guard's Testimony",
            text: 'The guard says: "All night they whispered about counting, never about colors. The man at the back kept saying: my word is not for me."',
          },
        ],
        answer: "even",
        hints: [
          "Prisoner 1 could not see his own cap, so his word was not a guess about it.",
          "Check the wall again: which count goes with the word black?",
        ],
        successMessage:
            "Correct. His word was never about his own cap. It was a count, sent to the men ahead of him in the only way the rules allowed.",
      },
      {
        question: "What color was Prisoner 4's cap? (One word.)",
        clues: [
          {
            id: 1,
            title: "The Guard's Log",
            text: "Words spoken at dawn, in order. Prisoner 1: black. Prisoner 2: black. Prisoner 3: white. Prisoner 4 and Prisoner 5: the page is torn.",
          },
          {
            id: 2,
            title: "The Front of the Line",
            text: "Prisoner 5 stood at the front. He wore a white cap. Prisoner 4, right behind him, could see it.",
          },
          {
            id: 3,
            title: "The Guard's Remark",
            text: 'The guard says: "Prisoner 2 and Prisoner 3 both named their caps correctly."',
          },
        ],
        answer: "black",
        hints: [
          "Use the rule from the wall. Among the caps of Prisoners 2, 3, 4 and 5, the number of black ones must be even.",
          "Prisoners 2 and 3 were correct, so their words are their caps: black and white. Prisoner 5 is white. How many black caps are there so far?",
        ],
        successMessage:
            "Correct. With only one black cap among the others, Prisoner 4 needed a black cap of his own to make the count even.",
      },
      {
        question:
            "Which prisoner could not be sure that his own answer was right? (Just the number.)",
        clues: [
          {
            id: 1,
            title: "The Front of the Line",
            text: "Prisoner 5 stood at the front and could see no caps at all. But he heard every word spoken behind him, from Prisoner 1 to Prisoner 4.",
          },
          {
            id: 2,
            title: "The Back of the Line",
            text: "Prisoner 1 stood at the back and could see four caps. Nobody spoke before him, so he heard nothing.",
          },
          {
            id: 3,
            title: "The Guard Behind the Door",
            text: 'Through the cell door the guard overheard: "One of us must give up his own answer, so that all the others can be certain of theirs."',
          },
        ],
        answer: "1",
        hints: [
          "Do not choose the man who sees nothing. Ask instead: who heard nothing?",
          "Think about who speaks first, and who spends his word on the count.",
        ],
        successMessage:
            "Correct. Prisoner 1 spent his only word on the count and had no way of knowing his own cap. Everyone else could be certain.",
      },
    ],
    reveal:
        "The prisoners knew they could not save everyone, so they decided to save as many as they could. " +
        "They agreed that the man at the back, who could see four caps, would not try to name his own. " +
        "Instead he would count the black caps ahead of him: an even number, he would say black; an odd number, white. " +
        "On the stairs, Prisoner 1 saw two black caps and said black, which was wrong for his own white cap. " +
        "But his word told the others the count. Prisoner 2 saw only one black cap among the three ahead of him, so his own had to be black. " +
        "Prisoner 3 combined what he saw with what he had heard and knew his was white. Prisoner 4 did the same and named black. " +
        "Prisoner 5, who saw nothing at all, simply finished the count from the words behind him, and said white. " +
        "The warden had expected guesses, and expected most of them to be wrong. He had not expected five men to turn a single word into a message. " +
        "Four walked out of the gate at dawn. Prisoner 1 stayed behind the walls, having spent his own chance for theirs. " +
        "Case closed, Inspector. Sometimes a word carries more than its meaning.",
  },
];

export default initialMysteries;
