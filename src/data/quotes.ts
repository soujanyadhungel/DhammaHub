export interface DailyQuote {
  text: string;
  author: string;
  source?: string;
}

export const quotes: DailyQuote[] = [
  {
    text: "Be happy, be peaceful, be liberated.",
    author: "S.N. Goenka",
  },
  {
    text: "The entire path of Dhamma is a universal path. It is not sectarian. Anicca (impermanence), dukkha (suffering), and anatta (non-self) are universal truths.",
    author: "S.N. Goenka",
  },
  {
    text: "You are your own master. You can purify yourself. No one else can do it for you.",
    author: "S.N. Goenka",
    source: "Day 1 Discourse",
  },
  {
    text: "The whole path is a path of observation, starting with the observation of bodily sensations.",
    author: "S.N. Goenka",
    source: "Day 4 Discourse",
  },
  {
    text: "Every moment that you are generating love, compassion, goodwill — you are benefiting. The entire atmosphere around you is benefited.",
    author: "S.N. Goenka",
  },
  {
    text: "Equanimity is not indifference. It is perfect balance of mind.",
    author: "S.N. Goenka",
    source: "Day 9 Discourse",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Gautama Buddha",
  },
  {
    text: "Work out your own salvation. Do not depend on others.",
    author: "Gautama Buddha",
    source: "Dhammapada",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Gautama Buddha",
  },
  {
    text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
    author: "Gautama Buddha",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Gautama Buddha",
  },
  {
    text: "You will not be punished for your anger; you will be punished by your anger.",
    author: "Gautama Buddha",
  },
  {
    text: "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
    author: "Gautama Buddha",
  },
  {
    text: "Meditation brings wisdom; lack of meditation leaves ignorance.",
    author: "Gautama Buddha",
    source: "Dhammapada",
  },
  {
    text: "Observe the anicca — every sensation that arises must pass away. Nothing is permanent.",
    author: "S.N. Goenka",
    source: "Day 3 Discourse",
  },
  {
    text: "The technique of Vipassana is not a retreat from life. It teaches you how to live in the midst of the world with a calm and balanced mind.",
    author: "S.N. Goenka",
  },
  {
    text: "You have to work very hard. Nobody else can do the work for you. It is your liberation.",
    author: "S.N. Goenka",
    source: "Day 2 Discourse",
  },
  {
    text: "Better than a thousand hollow words, is one word that brings peace.",
    author: "Gautama Buddha",
    source: "Dhammapada",
  },
  {
    text: "Irrigators channel waters; fletchers straighten arrows; carpenters bend wood; the wise master themselves.",
    author: "Gautama Buddha",
    source: "Dhammapada",
  },
  {
    text: "The real meditation is how you live your life.",
    author: "S.N. Goenka",
  },
];

export function getDailyQuote(): DailyQuote {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  return quotes[dayOfYear % quotes.length];
}
