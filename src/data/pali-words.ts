export interface PaliWord {
  word: string;
  pronunciation: string;
  meaning: string;
  context: string;
  category: string;
}

export const CATEGORIES = [
  "Core Concepts",
  "Three Characteristics",
  "Brahmaviharas",
  "Noble Eightfold Path",
  "Meditation Terms",
  "Sutta & Teachings",
  "Mental Factors",
  "Practice & Path",
] as const;

export const paliWords: PaliWord[] = [
  // Core Concepts
  {
    word: "Dhamma",
    pronunciation: "DAH-mah",
    meaning: "Truth / law of nature",
    context:
      "The universal law of nature as taught by the Buddha. Also refers to the Buddha's teachings.",
    category: "Core Concepts",
  },
  {
    word: "Sila",
    pronunciation: "SEE-lah",
    meaning: "Moral conduct / virtue",
    context:
      "The foundation of Dhamma practice. The five precepts form the basis of sila.",
    category: "Core Concepts",
  },
  {
    word: "Samadhi",
    pronunciation: "sah-MAH-dee",
    meaning: "Concentration",
    context:
      "The second pillar of the Noble Eightfold Path. Developed through Anapana meditation.",
    category: "Core Concepts",
  },
  {
    word: "Panna",
    pronunciation: "PAHN-yah",
    meaning: "Wisdom / insight",
    context:
      "The third pillar. The experiential wisdom of anicca, dukkha, and anatta.",
    category: "Core Concepts",
  },
  {
    word: "Nibbana",
    pronunciation: "nib-BAH-nah",
    meaning: "Liberation / extinguishing",
    context:
      "The cessation of craving, aversion, and ignorance. The ultimate goal of Dhamma practice.",
    category: "Core Concepts",
  },
  {
    word: "Sangha",
    pronunciation: "SAHNG-gah",
    meaning: "Community of practitioners",
    context:
      "The community of meditators walking the path of Dhamma together.",
    category: "Core Concepts",
  },
  {
    word: "Tisarana",
    pronunciation: "ti-SAH-rah-nah",
    meaning: "Three Refuges",
    context:
      "Taking refuge in the Buddha (the teacher), Dhamma (the teaching), and Sangha (the community).",
    category: "Core Concepts",
  },
  {
    word: "Pancasila",
    pronunciation: "pahn-cha-SEE-lah",
    meaning: "Five Precepts",
    context:
      "The five moral guidelines: no killing, no stealing, no sexual misconduct, no lying, no intoxicants.",
    category: "Core Concepts",
  },
  {
    word: "Dana",
    pronunciation: "DAH-nah",
    meaning: "Generosity / giving",
    context:
      "Selfless giving, particularly supporting the Dhamma and those practising it. Vipassana courses run on dana.",
    category: "Core Concepts",
  },

  // Three Characteristics
  {
    word: "Anicca",
    pronunciation: "ah-NIT-chah",
    meaning: "Impermanence",
    context:
      "One of the three characteristics of existence. Everything that arises must pass away.",
    category: "Three Characteristics",
  },
  {
    word: "Dukkha",
    pronunciation: "DOOK-kah",
    meaning: "Suffering / unsatisfactoriness",
    context:
      "The First Noble Truth — the unsatisfactory nature of conditioned existence.",
    category: "Three Characteristics",
  },
  {
    word: "Anatta",
    pronunciation: "ah-NAT-tah",
    meaning: "Non-self",
    context:
      "The third characteristic of existence — there is no permanent, unchanging self.",
    category: "Three Characteristics",
  },

  // Brahmaviharas
  {
    word: "Metta",
    pronunciation: "MET-tah",
    meaning: "Loving-kindness",
    context:
      "Boundless goodwill toward all beings. Practised at the end of each meditation session.",
    category: "Brahmaviharas",
  },
  {
    word: "Karuna",
    pronunciation: "kah-ROO-nah",
    meaning: "Compassion",
    context: "The wish for all beings to be free from suffering.",
    category: "Brahmaviharas",
  },
  {
    word: "Mudita",
    pronunciation: "moo-DEE-tah",
    meaning: "Sympathetic joy",
    context:
      "Rejoicing in the happiness and good fortune of others.",
    category: "Brahmaviharas",
  },
  {
    word: "Upekkha",
    pronunciation: "oo-PEK-kah",
    meaning: "Equanimity",
    context:
      "The balanced, unattached mind that does not cling or avert.",
    category: "Brahmaviharas",
  },

  // Noble Eightfold Path
  {
    word: "Samma Ditthi",
    pronunciation: "sahm-MAH DIT-tee",
    meaning: "Right understanding / right view",
    context:
      "The first factor of the Noble Eightfold Path. Understanding the law of kamma and the Four Noble Truths.",
    category: "Noble Eightfold Path",
  },
  {
    word: "Samma Sankappa",
    pronunciation: "sahm-MAH sahn-KAHP-pah",
    meaning: "Right thought / right intention",
    context:
      "Thoughts of renunciation, goodwill, and harmlessness. The second factor of the Noble Eightfold Path.",
    category: "Noble Eightfold Path",
  },
  {
    word: "Samma Vaca",
    pronunciation: "sahm-MAH VAH-chah",
    meaning: "Right speech",
    context:
      "Abstaining from lying, divisive speech, harsh speech, and idle chatter.",
    category: "Noble Eightfold Path",
  },
  {
    word: "Samma Kammanta",
    pronunciation: "sahm-MAH kahm-MAHN-tah",
    meaning: "Right action",
    context:
      "Abstaining from killing, stealing, and sexual misconduct.",
    category: "Noble Eightfold Path",
  },
  {
    word: "Samma Ajiva",
    pronunciation: "sahm-MAH AH-jee-vah",
    meaning: "Right livelihood",
    context:
      "Earning a living in a way that does not harm or exploit others.",
    category: "Noble Eightfold Path",
  },
  {
    word: "Samma Vayama",
    pronunciation: "sahm-MAH vah-YAH-mah",
    meaning: "Right effort",
    context:
      "The diligent effort to prevent and abandon unwholesome states, and to develop and maintain wholesome states.",
    category: "Noble Eightfold Path",
  },
  {
    word: "Samma Sati",
    pronunciation: "sahm-MAH SAH-tee",
    meaning: "Right awareness / right mindfulness",
    context:
      "Continuous awareness of body, sensations, mind, and mental contents (the four Satipatthanas).",
    category: "Noble Eightfold Path",
  },
  {
    word: "Samma Samadhi",
    pronunciation: "sahm-MAH sah-MAH-dee",
    meaning: "Right concentration",
    context:
      "One-pointed concentration of a wholesome nature, developed through meditation practice.",
    category: "Noble Eightfold Path",
  },

  // Meditation Terms
  {
    word: "Anapana",
    pronunciation: "ah-NAH-pah-nah",
    meaning: "Mindfulness of breathing",
    context:
      "The first step of Vipassana meditation. Observation of natural breath.",
    category: "Meditation Terms",
  },
  {
    word: "Vipassana",
    pronunciation: "vi-PAH-sah-nah",
    meaning: "Insight / clear-seeing",
    context:
      "Seeing things as they truly are — the practice of observing impermanence at the level of bodily sensations.",
    category: "Meditation Terms",
  },
  {
    word: "Bhavana",
    pronunciation: "BHAH-vah-nah",
    meaning: "Mental cultivation / meditation",
    context: "The practice of developing and purifying the mind.",
    category: "Meditation Terms",
  },
  {
    word: "Sankara",
    pronunciation: "SAHN-kah-rah",
    meaning: "Mental formation / reaction",
    context:
      "Conditioned mental reactions stored in the mind. Vipassana dissolves old sankaras.",
    category: "Meditation Terms",
  },
  {
    word: "Vedana",
    pronunciation: "vay-DAH-nah",
    meaning: "Sensation / feeling",
    context:
      "Body sensations — pleasant, unpleasant, or neutral. The key observation point in Vipassana.",
    category: "Meditation Terms",
  },
  {
    word: "Sati",
    pronunciation: "SAH-tee",
    meaning: "Awareness / mindfulness",
    context:
      "Continuous, moment-to-moment awareness. The foundation of Vipassana practice.",
    category: "Meditation Terms",
  },
  {
    word: "Sampajanna",
    pronunciation: "sahm-pah-JAHN-nah",
    meaning: "Thorough understanding / equanimity",
    context:
      "The quality of understanding impermanence while observing sensations — awareness combined with wisdom.",
    category: "Meditation Terms",
  },
  {
    word: "Adhitthana",
    pronunciation: "ah-DIT-tah-nah",
    meaning: "Strong determination",
    context:
      "The firm determination not to move during group sittings (adhitthana sittings) in a Vipassana course.",
    category: "Meditation Terms",
  },

  // Mental Factors
  {
    word: "Phassa",
    pronunciation: "PAHS-sah",
    meaning: "Contact",
    context:
      "The meeting of sense organ, sense object, and consciousness. A link in dependent origination.",
    category: "Mental Factors",
  },
  {
    word: "Vinnana",
    pronunciation: "vin-YAH-nah",
    meaning: "Consciousness",
    context:
      "Awareness at the six sense doors. Part of the five aggregates (khandhas).",
    category: "Mental Factors",
  },
  {
    word: "Tanha",
    pronunciation: "TAHN-hah",
    meaning: "Craving / thirst",
    context:
      "The origin of suffering. Craving for sensual pleasure, existence, or non-existence.",
    category: "Mental Factors",
  },
  {
    word: "Lobha",
    pronunciation: "LOH-bah",
    meaning: "Greed / attachment",
    context:
      "One of the three root defilements. Clinging to pleasant experiences.",
    category: "Mental Factors",
  },
  {
    word: "Dosa",
    pronunciation: "DOH-sah",
    meaning: "Aversion / hatred",
    context:
      "One of the three root defilements. Pushing away unpleasant experiences.",
    category: "Mental Factors",
  },
  {
    word: "Moha",
    pronunciation: "MOH-hah",
    meaning: "Ignorance / delusion",
    context:
      "One of the three root defilements. Not understanding the true nature of reality.",
    category: "Mental Factors",
  },
  {
    word: "Kamma",
    pronunciation: "KAHM-mah",
    meaning: "Action / deed",
    context:
      "Intentional action of body, speech, or mind that produces results (vipaka). The law of cause and effect.",
    category: "Mental Factors",
  },

  // Sutta & Teachings
  {
    word: "Sutta",
    pronunciation: "SOO-tah",
    meaning: "Discourse / teaching",
    context:
      "A discourse of the Buddha as recorded in the Pali Canon.",
    category: "Sutta & Teachings",
  },
  {
    word: "Satipatthana",
    pronunciation: "sah-tee-paht-TAH-nah",
    meaning: "Foundations of mindfulness",
    context:
      "The four foundations: body (kaya), sensations (vedana), mind (citta), and mental contents (dhamma). The Maha Satipatthana Sutta is the principal teaching of Vipassana.",
    category: "Sutta & Teachings",
  },
  {
    word: "Paticcasamuppada",
    pronunciation: "pah-TIT-chah sahm-oop-PAH-dah",
    meaning: "Dependent origination",
    context:
      "The chain of 12 links explaining how suffering arises and ceases. A core teaching of the Buddha.",
    category: "Sutta & Teachings",
  },
  {
    word: "Bojjhanga",
    pronunciation: "bohj-JAHNG-gah",
    meaning: "Factors of enlightenment",
    context:
      "The seven factors: mindfulness, investigation, energy, rapture, tranquility, concentration, equanimity.",
    category: "Sutta & Teachings",
  },
  {
    word: "Khandha",
    pronunciation: "KAHN-dah",
    meaning: "Aggregate / group",
    context:
      "The five aggregates that make up a being: form, sensation, perception, mental formations, consciousness.",
    category: "Sutta & Teachings",
  },

  // Practice & Path
  {
    word: "Parami",
    pronunciation: "PAH-rah-mee",
    meaning: "Perfection / spiritual quality",
    context:
      "The ten perfections developed over lifetimes: generosity, morality, renunciation, wisdom, effort, patience, truthfulness, determination, loving-kindness, equanimity.",
    category: "Practice & Path",
  },
  {
    word: "Sadhu",
    pronunciation: "SAH-doo",
    meaning: "Well done / excellent",
    context:
      "An expression of appreciation and agreement. Said three times (sadhu, sadhu, sadhu) after sharing merits.",
    category: "Practice & Path",
  },
  {
    word: "Mangala",
    pronunciation: "MAHN-gah-lah",
    meaning: "Blessing / auspiciousness",
    context:
      "The Mangala Sutta lists the highest blessings: good association, self-development, and Nibbana.",
    category: "Practice & Path",
  },
  {
    word: "Doha",
    pronunciation: "DOH-hah",
    meaning: "Devotional verse / couplet",
    context:
      "Hindi and Rajasthani devotional couplets sung by S.N. Goenka to inspire meditators on the path.",
    category: "Practice & Path",
  },
  {
    word: "Bhavatu Sabba Mangalam",
    pronunciation: "BHAH-vah-too SAHB-bah MAHN-gah-lahm",
    meaning: "May all beings be happy",
    context:
      "The blessing chanted at the close of each meditation session and at the end of Metta practice.",
    category: "Practice & Path",
  },
];

export function getDailyPaliWord(): PaliWord {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  return paliWords[dayOfYear % paliWords.length];
}

export function getWordsByCategory(category: string): PaliWord[] {
  return paliWords.filter((w) => w.category === category);
}
