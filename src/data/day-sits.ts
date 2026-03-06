export interface DaySit {
  id: string;
  centreName: string;
  address: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  typicalSchedule: string; // e.g. "First Sunday of each month"
  time: string;
  endTime?: string;
  notes?: string;
  centreWebsite: string;
}

export const daySits: DaySit[] = [
  // Australia
  {
    id: "day-au-bhumi",
    centreName: "Dhamma Bhumi",
    address: "Dhamma Bhumi, Blackheath NSW 2785",
    city: "Blackheath",
    state: "NSW",
    country: "Australia",
    lat: -33.6379,
    lng: 150.2832,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    notes: "Old students only. Check centre schedule for specific dates.",
    centreWebsite: "https://www.dhamma.org/en/schedules/schbhumi",
  },
  {
    id: "day-au-pabha",
    centreName: "Dhamma Pabha",
    address: "Dhamma Pabha, Woori Yallock VIC 3139",
    city: "Woori Yallock",
    state: "VIC",
    country: "Australia",
    lat: -37.7700,
    lng: 145.5314,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    centreWebsite: "https://www.dhamma.org/en/schedules/schpabha",
  },

  // USA
  {
    id: "day-us-dhara",
    centreName: "Dhamma Dhara",
    address: "399 Harkness Rd, Shelburne Falls, MA 01370",
    city: "Shelburne Falls",
    state: "MA",
    country: "USA",
    lat: 42.6026,
    lng: -72.7401,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    notes: "Old students only. Registration required via dhamma.org.",
    centreWebsite: "https://www.dhamma.org/en/schedules/schdhara",
  },
  {
    id: "day-us-mahavana",
    centreName: "Dhamma Mahavana",
    address: "PO Box 140, North Fork, CA 93643",
    city: "North Fork",
    state: "CA",
    country: "USA",
    lat: 37.2296,
    lng: -119.5235,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    centreWebsite: "https://www.dhamma.org/en/schedules/schmahavana",
  },
  {
    id: "day-us-siri",
    centreName: "Dhamma Siri",
    address: "PO Box 1076, Kaufman, TX 75142",
    city: "Kaufman",
    state: "TX",
    country: "USA",
    lat: 32.5882,
    lng: -96.3063,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    centreWebsite: "https://www.dhamma.org/en/schedules/schsiri",
  },
  {
    id: "day-us-kunja",
    centreName: "Dhamma Kunja",
    address: "29612 Orting Kapowsin Hwy E, Graham, WA 98338",
    city: "Graham",
    state: "WA",
    country: "USA",
    lat: 46.9649,
    lng: -122.3329,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    centreWebsite: "https://www.dhamma.org/en/schedules/schkunja",
  },

  // UK
  {
    id: "day-uk-dipa",
    centreName: "Dhamma Dipa",
    address: "Harewood End, Herefordshire HR2 8JS",
    city: "Hereford",
    state: "Herefordshire",
    country: "UK",
    lat: 52.0565,
    lng: -2.716,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    notes: "Old students only. Registration required.",
    centreWebsite: "https://www.dhamma.org/en/schedules/schdipa",
  },

  // New Zealand
  {
    id: "day-nz-medini",
    centreName: "Dhamma Medini",
    address: "Dhamma Medini, Kaukapakapa, Auckland",
    city: "Kaukapakapa",
    state: "Auckland",
    country: "New Zealand",
    lat: -36.5833,
    lng: 174.5333,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    centreWebsite: "https://www.dhamma.org/en/schedules/schmedini",
  },

  // Canada
  {
    id: "day-ca-torana",
    centreName: "Dhamma Torana",
    address: "Dhamma Torana, Egbert, ON",
    city: "Egbert",
    state: "ON",
    country: "Canada",
    lat: 44.3185,
    lng: -79.7537,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    centreWebsite: "https://www.dhamma.org/en/schedules/schtorana",
  },
  {
    id: "day-ca-surabhi",
    centreName: "Dhamma Surabhi",
    address: "Dhamma Surabhi, Youngstown, AB",
    city: "Youngstown",
    state: "AB",
    country: "Canada",
    lat: 51.5363,
    lng: -111.2231,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    centreWebsite: "https://www.dhamma.org/en/schedules/schsurabhi",
  },
  {
    id: "day-ca-suttama",
    centreName: "Dhamma Suttama",
    address: "Dhamma Suttama, Montebello, QC",
    city: "Montebello",
    state: "QC",
    country: "Canada",
    lat: 45.6537,
    lng: -74.9427,
    typicalSchedule: "One-day courses held monthly",
    time: "09:00",
    endTime: "16:30",
    centreWebsite: "https://www.dhamma.org/en/schedules/schsuttama",
  },
];
