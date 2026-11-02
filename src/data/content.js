import { BIRTHDAY_AUTH_CONFIG } from '../config/birthdayAuth';

export { BIRTHDAY_AUTH_CONFIG };

export const NAYANA_DATA = {
  websiteTitle: "A Day Made for You ♡",
  recipientName: "Nayana",
  birthdayDate: "November 3, 2026",
  birthdayMonth: "November",
  birthdayDay: 3,
  birthdayYear: 2026,
  birthYear: 2005,
  auth: BIRTHDAY_AUTH_CONFIG,

  // 1. Opening / Hero Section
  hero: {
    smallHeading: "A Little Birthday Surprise for You...",
    mainHeading: "A Day Made for You ♡",
    quote: "“November 3rd — a special day, because it's your birthday!”",
    description: "I made this little website just for you, with some pictures, memories, and a few words I wanted to share. Hope you enjoy going through it and that it makes your birthday a little more special. ♡",
    buttonText: "Enter Your Little Surprise",
    envelopeBadge: "For Nayana ♡",
    waxSealLetter: "N",
  },

  // 2. Chapter 1 — Your Special Day / It's Your Day!
  littleMoments: {
    sectionTag: "01 • Little Moments",
    sectionTitle: "It's Your Day!",
    subtitle: "November 3, 2026 • ♡",
    date: "November 3",
    location: "Nayana's Birthday",
    dateBadge: "November 3 • Nayana's Birthday",
    subheading: "November 3, 2026 • ♡",
    polaroidAlt: "Your Special Day • November 3",
    polaroidCaption: "November 3, 2026",
    stickyNote: "A day to celebrate ♡",
    paragraphs: [
      "Happy Birthday, Nayana!",
      "Hope you have a great day and get to enjoy it without worrying about anything else for a while.",
      "I hope things go well with your exams and that you get the results you're hoping for. Wishing you lots of happiness and good things in the year ahead.",
      "Have a lovely birthday! ♡"
    ]
  },

  // 3. Chapter 2 — Captured Smiles
  capturedSmiles: {
    sectionTag: "02 • Captured Smiles",
    sectionTitle: "Captured Smiles",
    mainTitle: "That One Smile ♡",
    subtitle: "A gallery celebrating her smile, personality and favourite pictures.",
    paragraphs: [
      "I still remember the day we met.",
      "I was so shy to talk to you. I couldn't even say all the things I wanted to. But there's one thing I still remember clearly — your smile.",
      "Maybe you were thinking, 'Ee chekkan entha ingane?' 😂",
      "I don't know what you were thinking at that moment, but I still remember that smile.",
      "Even today, when I think about that day, it makes me smile too.",
      "Sometimes, even small moments become the sweetest memories. ♡"
    ],
    filterLabels: {
      all: "All Pictures",
      favourites: "Favourite Moments",
      smiles: "Smiles"
    }
  },

  // 4. Chapter 3 — A Note for You
  noteForYou: {
    sectionTag: "03 • A Note for You",
    sectionTitle: "A Note for You",
    subtitle: "A few words I wanted to share with you.",
    firstNote: {
      title: "Little Things I Appreciate ♡",
      paragraphs: [
        "There are a few things about you that I really like.",
        "Even though we're far away, you still keep in touch. I honestly didn't expect that, and it means a lot to me.",
        "I also love your funny side and the way you can make a conversation more fun.",
        "And at the same time, you're mature and sensible when it matters.",
        "I guess it's these little things that make you such a lovely person. Stay the way you are. ♡"
      ]
    },
    secondNote: {
      title: "A Wish for Your Future ♡",
      paragraphs: [
        "I know you're working hard and preparing for your exams.",
        "I just want to wish you all the very best. I hope all your hard work pays off and you get the results you've been dreaming of.",
        "Don't stress too much, believe in yourself, and keep going.",
        "I hope this year brings you lots of happiness, success, and beautiful moments.",
        "You've got this, Nayana! All the very best! ❤️"
      ]
    }
  },

  // 5. Chapter 4 — Your Day
  yourDay: {
    sectionTag: "04 • Your Day",
    sectionTitle: "The Day the World Got a Little Brighter",
    subtitle: "November 3rd — a special day to celebrate someone truly wonderful.",
    birthday: "November 3, 2026",
    quote: "“November 3rd — a special day to celebrate someone truly wonderful.”",
    paragraphs: [
      "On your special day, I hope you get countless reasons to smile.",
      "May your dreams come true, your efforts bring success, and your days be filled with happiness.",
      "Keep smiling, keep shining, and always be yourself.",
      "Happy Birthday, Nayana! ♡"
    ]
  },

  // 6. Final Section — Until We Meet Again
  untilWeMeetAgain: {
    sectionTag: "Until We Meet Again",
    sectionTitle: "Until We Meet Again ♡",
    paragraphs: [
      "One last thing, Nayana...",
      "I really hope we get to meet again someday.",
      "Maybe we'll have more time to talk, laugh and create some new memories.",
      "Until then, let's keep in touch just like we do now.",
      "Take care, keep smiling, and all the very best for everything ahead.",
      "Hope to see you again soon! ♡"
    ]
  },

  // 7. Footer
  footer: {
    mainTitle: "A Day Made for You ♡",
    description: "“A little collection of happiness, memories and birthday wishes.”",
   
  }
};

// Backward-compatibility export alias
export const MUSEUM_DATA = {
  museumTitle: NAYANA_DATA.websiteTitle,
  subtitle: "Curated for November 3, 2026",
  celebrationDate: "November 3, 2026",
  relationshipStartDate: "2025-11-03",
  partnerName: "Nayana",
  senderName: "With Warm Wishes",
  hero: {
    badge: "For Nayana ♡",
    envelopeInvitation: NAYANA_DATA.hero.smallHeading,
    envelopeSubtext: "Click the wax seal to open your surprise",
    waxSealLetter: "N",
    welcomeTeaser: NAYANA_DATA.hero.description,
    enterButtonText: NAYANA_DATA.hero.buttonText,
  },
  birthdayLetter: {
    heading: "A Note for You",
    subheading: NAYANA_DATA.noteForYou.subtitle,
    date: "November 3rd",
    salutation: "Dear Nayana,"
  }
};
