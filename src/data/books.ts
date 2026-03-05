export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: "vipassana" | "buddha" | "pali" | "children" | "general";
  language: string;
  isFree: boolean;
  pdfUrl?: string;
  storeUrl?: string;
  coverImage?: string;
  pages?: number;
}

export const books: Book[] = [
  {
    id: "the-art-of-living",
    title: "The Art of Living: Vipassana Meditation",
    author: "William Hart (S.N. Goenka, Teacher)",
    description:
      "An introduction to the technique of Vipassana Meditation as taught by S.N. Goenka. The most widely read introduction to the practice.",
    category: "vipassana",
    language: "English",
    isFree: true,
    pdfUrl: "https://www.pariyatti.org/Free-Gifts",
    storeUrl: "https://store.pariyatti.org/Art-of-Living",
    pages: 180,
  },
  {
    id: "discourses-on-satipatthana",
    title: "Discourses on Satipatthana Sutta",
    author: "S.N. Goenka",
    description:
      "S.N. Goenka's commentary and instructions on the Satipatthana Sutta — the discourse on the four foundations of mindfulness.",
    category: "vipassana",
    language: "English",
    isFree: true,
    pdfUrl: "https://store.pariyatti.org/ebooks-shelf",
    storeUrl: "https://store.pariyatti.org/Discourses-on-Satipatthana-Sutta",
    pages: 146,
  },
  {
    id: "for-the-benefit-of-many",
    title: "For the Benefit of Many",
    author: "S.N. Goenka",
    description:
      "A collection of talks and writings by S.N. Goenka on Vipassana, Dhamma, and the universal applicability of the practice.",
    category: "vipassana",
    language: "English",
    isFree: false,
    storeUrl: "https://store.pariyatti.org/For-the-Benefit-of-Many",
    pages: 344,
  },
  {
    id: "light-of-dhamma",
    title: "The Light of Dhamma",
    author: "S.N. Goenka",
    description:
      "Collected essays and talks covering the philosophy and practice of Vipassana.",
    category: "vipassana",
    language: "English",
    isFree: true,
    pdfUrl: "https://store.pariyatti.org/ebooks-shelf",
    storeUrl: "https://store.pariyatti.org/Light-of-Dhamma",
    pages: 280,
  },
  {
    id: "dhammapada",
    title: "Dhammapada",
    author: "Gautama Buddha (trans. Acharya Buddharakkhita)",
    description:
      "The Dhammapada is one of the most widely read and best loved books of the Pali Canon — a collection of 423 verses of the Buddha.",
    category: "pali",
    language: "English",
    isFree: true,
    pdfUrl: "https://store.pariyatti.org/ebooks-shelf",
    storeUrl: "https://store.pariyatti.org/Dhammapada",
    pages: 200,
  },
  {
    id: "beyond-the-clouds",
    title: "Beyond the Clouds",
    author: "S.N. Goenka",
    description:
      "Goenkaji's poetic verse recitations, including the famous Doha verses chanted during meditation sittings.",
    category: "vipassana",
    language: "English",
    isFree: true,
    pdfUrl: "https://store.pariyatti.org/ebooks-shelf",
    storeUrl: "https://store.pariyatti.org/Beyond-the-Clouds",
    pages: 120,
  },
  {
    id: "mahasi-satipattana",
    title: "Satipatthana: The Direct Path to Realization",
    author: "Bhikkhu Analayo",
    description:
      "A comprehensive scholarly and practical study of the Satipatthana Sutta, the discourse that forms the basis of Vipassana practice.",
    category: "buddha",
    language: "English",
    isFree: false,
    storeUrl: "https://store.pariyatti.org/Satipatthana",
    pages: 350,
  },
  {
    id: "story-of-the-great-escape",
    title: "The Great Escape",
    author: "S.N. Goenka",
    description:
      "Stories and parables from the Dhamma tradition, collected from Goenkaji's discourses and talks.",
    category: "vipassana",
    language: "English",
    isFree: false,
    storeUrl: "https://store.pariyatti.org/Great-Escape",
    pages: 156,
  },
  {
    id: "pali-primer",
    title: "A Primer of the Pali Language",
    author: "Lily de Silva",
    description:
      "An accessible introduction to the Pali language, the language of the Buddhist scriptures. Perfect for those wanting to understand chanting.",
    category: "pali",
    language: "English",
    isFree: true,
    pdfUrl: "https://store.pariyatti.org/ebooks-shelf",
    storeUrl: "https://store.pariyatti.org/Primer-of-Pali",
    pages: 280,
  },
  {
    id: "children-anapana",
    title: "Anapana Meditation for Children",
    author: "Pariyatti Publishing",
    description:
      "A guide to teaching children the basics of Anapana meditation (breath awareness) in a fun and accessible way.",
    category: "children",
    language: "English",
    isFree: true,
    pdfUrl: "https://store.pariyatti.org/ebooks-shelf",
    storeUrl: "https://store.pariyatti.org/Anapana-for-Children",
    pages: 64,
  },
  {
    id: "questions-and-answers",
    title: "Questions and Answers with S.N. Goenka",
    author: "S.N. Goenka",
    description:
      "A collection of questions from students and Goenkaji's answers, covering everything from the basics to advanced aspects of the practice.",
    category: "vipassana",
    language: "English",
    isFree: false,
    storeUrl: "https://store.pariyatti.org/Questions-Answers",
    pages: 240,
  },
  {
    id: "noble-eightfold-path",
    title: "The Noble Eightfold Path",
    author: "Bhikkhu Bodhi",
    description:
      "An authoritative exposition of the Buddha's Noble Eightfold Path, by one of the foremost Pali scholars of our time.",
    category: "buddha",
    language: "English",
    isFree: true,
    pdfUrl: "https://store.pariyatti.org/ebooks-shelf",
    storeUrl: "https://store.pariyatti.org/Noble-Eightfold-Path",
    pages: 204,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "vipassana", label: "Vipassana" },
  { id: "buddha", label: "Buddha's Teachings" },
  { id: "pali", label: "Pali Canon" },
  { id: "children", label: "Children" },
  { id: "general", label: "General" },
] as const;
