export interface AppItem {
  id: string;
  name: string;
  developer: string;
  description: string;
  platforms: ("ios" | "android" | "web")[];
  category: "official" | "timer" | "community" | "learning";
  iosUrl?: string;
  androidUrl?: string;
  webUrl?: string;
  icon?: string;
  isFree: boolean;
}

export const vipassanaApps: AppItem[] = [
  {
    id: "dhamma-org-app",
    name: "Dhamma.org App",
    developer: "Dhamma.org",
    description:
      "The official app from dhamma.org with guided Anapana meditation for beginners, chanting, and course information.",
    platforms: ["ios", "android"],
    category: "official",
    iosUrl: "https://apps.apple.com/app/dhamma-org/id1439215492",
    androidUrl:
      "https://play.google.com/store/apps/details?id=org.dhamma.android",
    isFree: true,
  },
  {
    id: "pariyatti-app",
    name: "Pariyatti Daily Dhamma",
    developer: "Pariyatti",
    description:
      "Daily Dhamma content, inspirational quotes, chanting audio, Pali words of the day, and the Pariyatti library catalog.",
    platforms: ["ios", "android"],
    category: "official",
    iosUrl: "https://apps.apple.com/app/pariyatti/id1441309891",
    androidUrl:
      "https://play.google.com/store/apps/details?id=org.pariyatti.android",
    isFree: true,
  },
  {
    id: "insight-timer",
    name: "Insight Timer",
    developer: "Insight Network Inc.",
    description:
      "Popular meditation timer with a large library of guided meditations. Many teachers from the Vipassana tradition are available.",
    platforms: ["ios", "android", "web"],
    category: "timer",
    iosUrl: "https://apps.apple.com/app/insight-timer/id337472899",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.spotlightsix.zentimerlite2",
    webUrl: "https://insighttimer.com",
    isFree: true,
  },
  {
    id: "dhamma-brothers-timer",
    name: "Vipassana Meditation Timer",
    developer: "Various",
    description:
      "Simple meditation timer with traditional Vipassana bells. Includes standard Goenka-tradition bell sounds for group sittings.",
    platforms: ["ios", "android"],
    category: "timer",
    iosUrl: "https://apps.apple.com/search?term=vipassana+timer",
    androidUrl:
      "https://play.google.com/store/search?q=vipassana+meditation+timer",
    isFree: true,
  },
  {
    id: "suttacentral",
    name: "SuttaCentral",
    developer: "SuttaCentral",
    description:
      "Access to the entire Pali Canon with translations by Bhikkhu Bodhi, Bhikkhu Sujato, and others. Essential reference for Dhamma study.",
    platforms: ["web"],
    category: "learning",
    webUrl: "https://suttacentral.net",
    isFree: true,
  },
  {
    id: "dhamma-wheel",
    name: "Dhamma Wheel Forum",
    developer: "Dhamma Wheel Community",
    description:
      "Online forum for discussion of Theravada Buddhism and the Pali Canon. Active community of practitioners.",
    platforms: ["web"],
    category: "community",
    webUrl: "https://dhammawheel.com",
    isFree: true,
  },
  {
    id: "access-to-insight",
    name: "Access to Insight",
    developer: "Access to Insight",
    description:
      "Comprehensive readings in Theravada Buddhism — suttas, commentaries, and practical guides freely available.",
    platforms: ["web"],
    category: "learning",
    webUrl: "https://www.accesstoinsight.org",
    isFree: true,
  },
];
