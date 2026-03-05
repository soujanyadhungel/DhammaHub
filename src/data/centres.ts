export interface Centre {
  id: string;
  name: string;
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  website: string;
  courses: string;
  description?: string;
}

export const centres: Centre[] = [
  // India
  {
    id: "dhamma-giri",
    name: "Dhamma Giri",
    country: "India",
    region: "Asia",
    city: "Igatpuri, Maharashtra",
    lat: 19.6833,
    lng: 73.5667,
    website: "https://www.dhamma.org/en/schedules/schgiri",
    courses: "https://www.dhamma.org/en/schedules/schgiri",
    description: "The principal teaching centre for the tradition, established by S.N. Goenka.",
  },
  {
    id: "dhamma-thali",
    name: "Dhamma Thali",
    country: "India",
    region: "Asia",
    city: "Jaipur, Rajasthan",
    lat: 26.9124,
    lng: 75.7873,
    website: "https://www.dhamma.org/en/schedules/schthali",
    courses: "https://www.dhamma.org/en/schedules/schthali",
  },
  {
    id: "dhamma-patapa",
    name: "Dhamma Patapa",
    country: "India",
    region: "Asia",
    city: "Kolkata, West Bengal",
    lat: 22.5726,
    lng: 88.3639,
    website: "https://www.dhamma.org/en/schedules/schpatapa",
    courses: "https://www.dhamma.org/en/schedules/schpatapa",
  },
  // USA
  {
    id: "dhamma-mahavana",
    name: "Dhamma Mahavana",
    country: "USA",
    region: "North America",
    city: "North Fork, California",
    lat: 37.2296,
    lng: -119.5235,
    website: "https://www.dhamma.org/en/schedules/schmahavana",
    courses: "https://www.dhamma.org/en/schedules/schmahavana",
  },
  {
    id: "dhamma-dhara",
    name: "Dhamma Dhara",
    country: "USA",
    region: "North America",
    city: "Shelburne Falls, Massachusetts",
    lat: 42.6026,
    lng: -72.7401,
    website: "https://www.dhamma.org/en/schedules/schdhara",
    courses: "https://www.dhamma.org/en/schedules/schdhara",
  },
  {
    id: "dhamma-siri",
    name: "Dhamma Siri",
    country: "USA",
    region: "North America",
    city: "Kaufman, Texas",
    lat: 32.5882,
    lng: -96.3063,
    website: "https://www.dhamma.org/en/schedules/schsiri",
    courses: "https://www.dhamma.org/en/schedules/schsiri",
  },
  // Australia
  {
    id: "dhamma-bhumi",
    name: "Dhamma Bhumi",
    country: "Australia",
    region: "Asia-Pacific",
    city: "Blackheath, NSW",
    lat: -33.6379,
    lng: 150.2832,
    website: "https://www.dhamma.org/en/schedules/schbhumi",
    courses: "https://www.dhamma.org/en/schedules/schbhumi",
  },
  // UK
  {
    id: "dhamma-dipa",
    name: "Dhamma Dipa",
    country: "UK",
    region: "Europe",
    city: "Hereford, Herefordshire",
    lat: 52.0565,
    lng: -2.7160,
    website: "https://www.dhamma.org/en/schedules/schdipa",
    courses: "https://www.dhamma.org/en/schedules/schdipa",
  },
  // Germany
  {
    id: "dhamma-pasado",
    name: "Dhamma Pasado",
    country: "Germany",
    region: "Europe",
    city: "Nonnweiler, Saarland",
    lat: 49.6018,
    lng: 6.9718,
    website: "https://www.dhamma.org/en/schedules/schpasado",
    courses: "https://www.dhamma.org/en/schedules/schpasado",
  },
  // Thailand
  {
    id: "dhamma-kancana",
    name: "Dhamma Kancana",
    country: "Thailand",
    region: "Asia",
    city: "Kanchanaburi",
    lat: 14.0023,
    lng: 99.5476,
    website: "https://www.dhamma.org/en/schedules/schkancana",
    courses: "https://www.dhamma.org/en/schedules/schkancana",
  },
  // Japan
  {
    id: "dhamma-joti",
    name: "Dhamma Joti",
    country: "Japan",
    region: "Asia",
    city: "Kiryu, Gunma",
    lat: 36.4042,
    lng: 139.3253,
    website: "https://www.dhamma.org/en/schedules/schjoti",
    courses: "https://www.dhamma.org/en/schedules/schjoti",
  },
  // Canada
  {
    id: "dhamma-surabhi",
    name: "Dhamma Surabhi",
    country: "Canada",
    region: "North America",
    city: "Youngstown, Alberta",
    lat: 51.5363,
    lng: -111.2231,
    website: "https://www.dhamma.org/en/schedules/schsurabhi",
    courses: "https://www.dhamma.org/en/schedules/schsurabhi",
  },
  // Myanmar
  {
    id: "dhamma-joti-yangon",
    name: "Dhamma Joti (Yangon)",
    country: "Myanmar",
    region: "Asia",
    city: "Yangon",
    lat: 16.8661,
    lng: 96.1951,
    website: "https://www.dhamma.org/en/schedules/schjotiyangon",
    courses: "https://www.dhamma.org/en/schedules/schjotiyangon",
  },
  // New Zealand
  {
    id: "dhamma-medini",
    name: "Dhamma Medini",
    country: "New Zealand",
    region: "Asia-Pacific",
    city: "Kaukapakapa, Auckland",
    lat: -36.5833,
    lng: 174.5333,
    website: "https://www.dhamma.org/en/schedules/schmedini",
    courses: "https://www.dhamma.org/en/schedules/schmedini",
  },
];
