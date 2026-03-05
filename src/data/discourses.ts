export interface Discourse {
  id: string;
  day: number;
  title: string;
  description: string;
  duration: string; // e.g. "1:12:00"
  audioUrl: string;
  videoUrl?: string;
  transcript?: string;
}

export interface ChantingTrack {
  id: string;
  title: string;
  source: string; // e.g. "Sutta Nipata" or day reference
  duration: string;
  audioUrl: string;
  language: string;
}

export interface DohaTrack {
  id: string;
  title: string;
  day: number;
  duration: string;
  audioUrl: string;
}

const BASE = "https://discourses.dhamma.org/oml/recordings/uuid";

// Goenka 10-day course discourses — English audio from discourses.dhamma.org
// Requires old student login at discourses.dhamma.org
export const discourses: Discourse[] = [
  {
    id: "discourse-1",
    day: 1,
    title: "Day 1 — Anicca: The Law of Impermanence",
    description:
      "Introduction to impermanence and the technique of Anapana. The mind and its role in misery.",
    duration: "1:10:00",
    audioUrl: `${BASE}/cc4706aa-67d3-43b4-8a23-020eac9a5b90.mp3`,
  },
  {
    id: "discourse-2",
    day: 2,
    title: "Day 2 — The Roots of Misery",
    description:
      "Craving, aversion, and ignorance as the three roots of suffering. How the mind multiplies misery.",
    duration: "1:08:00",
    audioUrl: `${BASE}/1f34b969-487f-49c2-9d32-9c2535d99546.mp3`,
  },
  {
    id: "discourse-3",
    day: 3,
    title: "Day 3 — The Noble Truths",
    description:
      "The Four Noble Truths and the path of Vipassana. Beginning to work with sensations.",
    duration: "1:12:00",
    audioUrl: `${BASE}/fc264375-2012-421a-ab1e-0bf2aafc8dc0.mp3`,
  },
  {
    id: "discourse-4",
    day: 4,
    title: "Day 4 — Arising and Passing",
    description:
      "The beginning of Vipassana proper. Observing the arising and passing of sensations throughout the body.",
    duration: "1:15:00",
    audioUrl: `${BASE}/242526a6-17ca-498d-b49b-9aab1bc21edb.mp3`,
  },
  {
    id: "discourse-5",
    day: 5,
    title: "Day 5 — The Entire Structure",
    description:
      "Working through the entire body systematically. Understanding the depth of the practice.",
    duration: "1:20:00",
    audioUrl: `${BASE}/63dfbf5a-0b0f-484e-a57b-607f74fcddc1.mp3`,
  },
  {
    id: "discourse-6",
    day: 6,
    title: "Day 6 — The Sankhara Cycle",
    description:
      "How sankaras (mental formations) are created and dissolved through equanimous observation.",
    duration: "1:18:00",
    audioUrl: `${BASE}/377a74a7-54e6-49bf-b44e-bc1e5cf99b1a.mp3`,
  },
  {
    id: "discourse-7",
    day: 7,
    title: "Day 7 — The Field of Sensations",
    description:
      "Deepening the practice. The importance of equanimity when facing strong sensations.",
    duration: "1:22:00",
    audioUrl: `${BASE}/01cf3957-8159-441d-9e30-5fb2e977dbe6.mp3`,
  },
  {
    id: "discourse-8",
    day: 8,
    title: "Day 8 — Walking the Path",
    description:
      "Understanding dependent origination and how Vipassana breaks the chain of suffering.",
    duration: "1:25:00",
    audioUrl: `${BASE}/9b056e95-df8e-4abc-9e4b-3a491b75e9a2.mp3`,
  },
  {
    id: "discourse-9",
    day: 9,
    title: "Day 9 — Metta: Loving-Kindness",
    description:
      "Introduction to Metta Bhavana — sharing the merits of meditation with all beings.",
    duration: "1:15:00",
    audioUrl: `${BASE}/74b590e8-712a-4bc3-959a-062feb02e724.mp3`,
  },
  {
    id: "discourse-10",
    day: 10,
    title: "Day 10 — Noble Silence Ends",
    description:
      "The final discourse. Returning to the world with the tools of Vipassana. How to maintain the practice.",
    duration: "1:30:00",
    audioUrl: `${BASE}/03ae221e-a8a6-4507-83d5-fa07c0c6bead.mp3`,
  },
  {
    id: "discourse-10-service",
    day: 10,
    title: "Day 10 — Benefits of Dhamma Service",
    description:
      "The value of selfless service (dāna) in maintaining one's practice and supporting others on the path.",
    duration: "0:45:00",
    audioUrl: `${BASE}/514ce9e3-e4af-48d2-a8eb-62bab576ab9f.mp3`,
  },
  {
    id: "discourse-11",
    day: 11,
    title: "Day 11 — Closing Discourse",
    description:
      "Final instructions for daily practice. How to live a Dhamma life in the world.",
    duration: "0:40:00",
    audioUrl: `${BASE}/6da64d9c-e681-4efb-8fd8-cf94bd80f0a5.mp3`,
  },
];

// Morning chanting tracks — Pali suttas chanted by S.N. Goenka
// One for each day of a 10-day course
export const chantingTracks: ChantingTrack[] = [
  {
    id: "chanting-day1",
    title: "Atanatiya Sutta (short)",
    source: "Day 1 Morning Chanting",
    duration: "12:00",
    audioUrl: `${BASE}/82ca37d9-e648-4bdf-a266-ebff0c84e0f8.mp3`,
    language: "Pali",
  },
  {
    id: "chanting-day2",
    title: "Ratana Sutta",
    source: "Day 2 Morning Chanting",
    duration: "10:00",
    audioUrl: `${BASE}/a0d1da8f-5317-416a-9208-ccd72dc4c97e.mp3`,
    language: "Pali",
  },
  {
    id: "chanting-day3",
    title: "Karaniyametta Sutta",
    source: "Day 3 Morning Chanting",
    duration: "8:00",
    audioUrl: `${BASE}/c56e57a3-aac2-4ec2-bc2f-f734a38fe58e.mp3`,
    language: "Pali",
  },
  {
    id: "chanting-day4",
    title: "Jayamangala Atthagatha",
    source: "Day 4 Morning Chanting",
    duration: "10:00",
    audioUrl: `${BASE}/41e2dd0e-2eda-4503-afaf-9c9da6cfef5d.mp3`,
    language: "Pali",
  },
  {
    id: "chanting-day5",
    title: "Tikapatthana (short)",
    source: "Day 5 Morning Chanting",
    duration: "15:00",
    audioUrl: `${BASE}/22c99db8-b97d-406f-833f-5dd733393a24.mp3`,
    language: "Pali",
  },
  {
    id: "chanting-day6",
    title: "Paticcasamuppada",
    source: "Day 6 Morning Chanting",
    duration: "12:00",
    audioUrl: `${BASE}/09270e3c-ccdf-451c-adf3-57fb403bf0e8.mp3`,
    language: "Pali",
  },
  {
    id: "chanting-day7",
    title: "Bojjhanga Paritta",
    source: "Day 7 Morning Chanting",
    duration: "10:00",
    audioUrl: `${BASE}/08971e9b-acc6-4576-804c-89ec2eee809f.mp3`,
    language: "Pali",
  },
  {
    id: "chanting-day8",
    title: "Mittanisamsa",
    source: "Day 8 Morning Chanting",
    duration: "8:00",
    audioUrl: `${BASE}/2bdefba3-4657-4faa-8f28-78972577b96b.mp3`,
    language: "Pali",
  },
  {
    id: "chanting-day9",
    title: "Mangala Sutta",
    source: "Day 9 Morning Chanting",
    duration: "10:00",
    audioUrl: `${BASE}/106bf13f-5d36-4fef-85a2-8d3826baf1c5.mp3`,
    language: "Pali",
  },
];

// Doha tracks — Hindi/Rajasthani devotional songs by S.N. Goenka
export const dohaTracks: DohaTrack[] = [
  {
    id: "doha-day1",
    title: "Hindi Dohas 1",
    day: 1,
    duration: "8:00",
    audioUrl: `${BASE}/6bad9350-e2d2-4e65-8efa-ab9bcbfbd1a3.mp3`,
  },
  {
    id: "doha-day2",
    title: "Hindi Dohas 2",
    day: 2,
    duration: "8:00",
    audioUrl: `${BASE}/110aa5be-b780-44a2-a385-2a6d9fe830cf.mp3`,
  },
  {
    id: "doha-day3",
    title: "Rajasthani Dohas 1",
    day: 3,
    duration: "8:00",
    audioUrl: `${BASE}/4c9ca6b7-0609-4a30-bb1b-433d6fa8c1a3.mp3`,
  },
  {
    id: "doha-day4",
    title: "Rajasthani Dohas 2",
    day: 4,
    duration: "8:00",
    audioUrl: `${BASE}/fea628c4-55ba-4771-9515-990a5cb1eb11.mp3`,
  },
  {
    id: "doha-day5",
    title: "Anicca Dohas",
    day: 5,
    duration: "8:00",
    audioUrl: `${BASE}/05f6abe5-18e3-483e-8e14-8fd144a4aa44.mp3`,
  },
  {
    id: "doha-day6",
    title: "Samatha Dohas",
    day: 6,
    duration: "8:00",
    audioUrl: `${BASE}/a15e7360-e253-4efa-b20e-531f31b11309.mp3`,
  },
  {
    id: "doha-day7",
    title: "Jo Dhare So Paya Dohas 1",
    day: 7,
    duration: "8:00",
    audioUrl: `${BASE}/19b26af6-6e68-45f5-bf56-d25f63b007b4.mp3`,
  },
  {
    id: "doha-day8",
    title: "Jo Dhare So Paya Dohas 2",
    day: 8,
    duration: "8:00",
    audioUrl: `${BASE}/5ecfd8dd-f2b9-4b8f-818f-316e43b307f0.mp3`,
  },
];
