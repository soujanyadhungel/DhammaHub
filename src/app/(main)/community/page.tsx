"use client";

import { useState, useMemo, useCallback } from "react";
import {
  Users,
  Search,
  MapPin,
  Navigation,
  ExternalLink,
  Clock,
  Calendar,
  CalendarDays,
  Loader2,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { groupSittings, type GroupSitting } from "@/data/group-sittings";
import { daySits, type DaySit } from "@/data/day-sits";
import {
  haversineDistance,
  formatDistance,
  googleMapsUrl,
  dayName,
  dayNameShort,
} from "@/lib/geo";

type Tab = "tonight" | "week" | "month";

export default function CommunityPage() {
  const [citySearch, setCitySearch] = useState("");
  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLng, setUserLng] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("week");
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  // Geolocation handler
  const handleUseLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported by your browser.");
      return;
    }
    setLocating(true);
    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLat(pos.coords.latitude);
        setUserLng(pos.coords.longitude);
        setCitySearch("");
        setLocating(false);
      },
      () => {
        setLocationError("Could not get your location. Try searching by city instead.");
        setLocating(false);
      },
      { timeout: 10000 }
    );
  }, []);

  // City search → match lat/lng from data
  const cityMatchLocation = useMemo(() => {
    if (!citySearch.trim()) return null;
    const q = citySearch.toLowerCase().trim();
    const match = groupSittings.find(
      (s) =>
        s.city.toLowerCase().includes(q) ||
        s.state.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q)
    );
    return match ? { lat: match.lat, lng: match.lng } : null;
  }, [citySearch]);

  const effectiveLat = citySearch.trim()
    ? cityMatchLocation?.lat ?? null
    : userLat;
  const effectiveLng = citySearch.trim()
    ? cityMatchLocation?.lng ?? null
    : userLng;

  // Filter sittings
  const filteredSittings = useMemo(() => {
    const today = new Date().getDay();
    let filtered: GroupSitting[];

    if (activeTab === "tonight") {
      filtered = groupSittings.filter((s) => s.dayOfWeek === today);
    } else {
      // "week" and "month" show all (they're weekly recurring)
      filtered = [...groupSittings];
    }

    // Filter by city search
    if (citySearch.trim()) {
      const q = citySearch.toLowerCase().trim();
      // Show all when searching, but sort by distance to matched city
      const cityFiltered = filtered.filter(
        (s) =>
          s.city.toLowerCase().includes(q) ||
          s.state.toLowerCase().includes(q) ||
          s.country.toLowerCase().includes(q)
      );
      if (cityFiltered.length > 0) filtered = cityFiltered;
    }

    // Sort by distance if location is known
    if (effectiveLat !== null && effectiveLng !== null) {
      const lat = effectiveLat;
      const lng = effectiveLng;
      filtered.sort(
        (a, b) =>
          haversineDistance(lat, lng, a.lat, a.lng) -
          haversineDistance(lat, lng, b.lat, b.lng)
      );
    } else {
      // Sort alphabetically by country then city
      filtered.sort((a, b) =>
        a.country === b.country
          ? a.city.localeCompare(b.city)
          : a.country.localeCompare(b.country)
      );
    }

    return filtered;
  }, [activeTab, citySearch, effectiveLat, effectiveLng]);

  // Filter day sits by search too
  const filteredDaySits = useMemo(() => {
    let filtered = [...daySits];
    if (citySearch.trim()) {
      const q = citySearch.toLowerCase().trim();
      const cityFiltered = filtered.filter(
        (s) =>
          s.city.toLowerCase().includes(q) ||
          s.state.toLowerCase().includes(q) ||
          s.country.toLowerCase().includes(q)
      );
      if (cityFiltered.length > 0) filtered = cityFiltered;
    }
    if (effectiveLat !== null && effectiveLng !== null) {
      const lat = effectiveLat;
      const lng = effectiveLng;
      filtered.sort(
        (a, b) =>
          haversineDistance(lat, lng, a.lat, a.lng) -
          haversineDistance(lat, lng, b.lat, b.lng)
      );
    }
    return filtered;
  }, [citySearch, effectiveLat, effectiveLng]);

  const tabs: { key: Tab; label: string; icon: typeof Clock }[] = [
    { key: "tonight", label: "Tonight", icon: Clock },
    { key: "week", label: "This Week", icon: Calendar },
    { key: "month", label: "This Month", icon: CalendarDays },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brown-300 via-brown-400 to-brown-500 dark:from-brown-400 dark:via-brown-500 dark:to-brown-600 p-8 md:p-10 text-white shadow-lg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-glow" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-rust/10 blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Users size={20} className="text-cream" strokeWidth={1.8} />
            </div>
            <p className="label-uppercase text-cream/50">Community Meditation</p>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-cream/95 tracking-tight mb-2">
            Find group sittings near you
          </h2>
          <p className="text-sm text-beige-200/60 max-w-lg leading-relaxed">
            Connect with old students in your area for regular group meditation practice.
            Search by city or use your location to find the closest sittings.
          </p>
        </div>
      </div>

      {/* Search / Location row */}
      <div className="flex flex-col sm:flex-row gap-3 animate-slide-up-delay-1">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown-200/60 dark:text-beige-300/50"
            strokeWidth={1.8}
          />
          <input
            type="text"
            value={citySearch}
            onChange={(e) => {
              setCitySearch(e.target.value);
              setUserLat(null);
              setUserLng(null);
            }}
            placeholder="Search by city, state, or country..."
            className="input pl-10"
          />
        </div>
        <button
          onClick={handleUseLocation}
          disabled={locating}
          className="btn-secondary flex items-center justify-center gap-2 flex-shrink-0"
        >
          {locating ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Navigation size={16} strokeWidth={1.8} />
          )}
          {locating ? "Locating..." : "Use my location"}
        </button>
      </div>

      {locationError && (
        <p className="text-xs text-rust -mt-4">{locationError}</p>
      )}

      {/* Location indicator */}
      {(effectiveLat !== null || citySearch.trim()) && (
        <div className="flex items-center gap-2 -mt-4">
          <MapPin size={13} className="text-rust" strokeWidth={2} />
          <p className="text-xs text-brown-200/80 dark:text-beige-300/60">
            {citySearch.trim()
              ? cityMatchLocation
                ? `Showing results near "${citySearch}"`
                : `No exact match for "${citySearch}" — showing all sittings`
              : "Sorted by distance from your location"}
          </p>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 animate-slide-up-delay-2">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
              activeTab === key
                ? "bg-rust/90 text-white shadow-sm"
                : "bg-beige-100/80 dark:bg-brown-400/40 text-brown-300 dark:text-beige-300 hover:bg-beige-200 dark:hover:bg-brown-300/40"
            )}
          >
            <Icon size={14} strokeWidth={1.8} />
            {label}
          </button>
        ))}
      </div>

      {/* Sitting results */}
      <div className="space-y-3 animate-slide-up-delay-3">
        {filteredSittings.length === 0 ? (
          <div className="card p-8 text-center">
            <Clock size={28} className="text-brown-200/40 dark:text-beige-300/30 mx-auto mb-3" strokeWidth={1.5} />
            <p className="font-serif text-lg text-brown-400 dark:text-beige-200 mb-1">
              {activeTab === "tonight"
                ? "No group sittings tonight"
                : "No sittings found"}
            </p>
            <p className="text-sm text-brown-200/70 dark:text-beige-300/50">
              {activeTab === "tonight"
                ? `Check "This Week" to see all upcoming sittings.`
                : "Try a different search term or browse all sittings."}
            </p>
          </div>
        ) : (
          filteredSittings.map((sitting) => (
            <SittingCard
              key={sitting.id}
              sitting={sitting}
              userLat={effectiveLat}
              userLng={effectiveLng}
            />
          ))
        )}
      </div>

      {/* Day Sits section */}
      <div className="pt-4">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gold/10 dark:bg-gold/15 flex items-center justify-center">
            <Sun size={16} className="text-gold-dark dark:text-gold-light" strokeWidth={1.8} />
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold text-brown-500 dark:text-cream tracking-tight">
              One-Day Sits
            </h2>
            <p className="text-[11px] text-brown-200/70 dark:text-beige-300/50 tracking-wide">
              Full-day courses at Vipassana centres
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {filteredDaySits.map((ds) => (
            <DaySitCard
              key={ds.id}
              daySit={ds}
              userLat={effectiveLat}
              userLng={effectiveLng}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-serif text-lg font-semibold text-brown-500 dark:text-cream tracking-tight">
            Full listings on dhamma.org
          </p>
          <p className="text-sm text-brown-200/70 dark:text-beige-300/60 mt-0.5">
            View complete group sitting schedules and register for courses.
          </p>
        </div>
        <a
          href="https://www.dhamma.org/en/os/sitting"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 flex-shrink-0"
        >
          Visit dhamma.org <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

// ── Sitting Card ──────────────────────────────────────────────────

function SittingCard({
  sitting,
  userLat,
  userLng,
}: {
  sitting: GroupSitting;
  userLat: number | null;
  userLng: number | null;
}) {
  const distance =
    userLat !== null && userLng !== null
      ? haversineDistance(userLat, userLng, sitting.lat, sitting.lng)
      : null;

  return (
    <div className="card p-5 group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-brown-500 dark:text-cream text-sm leading-snug">
            {sitting.venueName}
          </p>
          <p className="text-xs text-brown-200/70 dark:text-beige-300/50 mt-1">
            {sitting.address}
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            {/* Day badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-beige-100/80 dark:bg-brown-300/30 text-[11px] font-medium text-brown-400 dark:text-beige-200">
              <Calendar size={11} strokeWidth={2} />
              {dayName(sitting.dayOfWeek)}
            </span>
            {/* Time badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-beige-100/80 dark:bg-brown-300/30 text-[11px] font-medium text-brown-400 dark:text-beige-200">
              <Clock size={11} strokeWidth={2} />
              {sitting.time}
              {sitting.endTime && ` – ${sitting.endTime}`}
            </span>
            {/* Distance badge */}
            {distance !== null && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rust/8 dark:bg-rust/15 text-[11px] font-semibold text-rust">
                <MapPin size={11} strokeWidth={2} />
                {formatDistance(distance)}
              </span>
            )}
          </div>
        </div>

        {/* Google Maps link */}
        <a
          href={googleMapsUrl(sitting.lat, sitting.lng)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center gap-1.5 text-[11px] font-medium text-rust hover:text-rust-dark transition-colors mt-1"
          title="View on Google Maps"
        >
          <MapPin size={14} strokeWidth={1.8} />
          <span className="hidden sm:inline">Maps</span>
        </a>
      </div>
    </div>
  );
}

// ── Day Sit Card ─────────────────────────────────────────────────

function DaySitCard({
  daySit,
  userLat,
  userLng,
}: {
  daySit: DaySit;
  userLat: number | null;
  userLng: number | null;
}) {
  const distance =
    userLat !== null && userLng !== null
      ? haversineDistance(userLat, userLng, daySit.lat, daySit.lng)
      : null;

  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-brown-500 dark:text-cream text-sm">
            {daySit.centreName}
          </p>
          <p className="text-xs text-brown-200/70 dark:text-beige-300/50 mt-1">
            {daySit.address}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gold/8 dark:bg-gold/12 text-[11px] font-medium text-gold-dark dark:text-gold-light">
              <CalendarDays size={11} strokeWidth={2} />
              {daySit.typicalSchedule}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-beige-100/80 dark:bg-brown-300/30 text-[11px] font-medium text-brown-400 dark:text-beige-200">
              <Clock size={11} strokeWidth={2} />
              {daySit.time}
              {daySit.endTime && ` – ${daySit.endTime}`}
            </span>
            {distance !== null && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rust/8 dark:bg-rust/15 text-[11px] font-semibold text-rust">
                <MapPin size={11} strokeWidth={2} />
                {formatDistance(distance)}
              </span>
            )}
          </div>
          {daySit.notes && (
            <p className="text-[11px] text-brown-200/60 dark:text-beige-300/40 mt-2 italic">
              {daySit.notes}
            </p>
          )}
        </div>
        <a
          href={daySit.centreWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center gap-1.5 text-[11px] font-medium text-rust hover:text-rust-dark transition-colors mt-1"
        >
          <ExternalLink size={13} strokeWidth={1.8} />
          <span className="hidden sm:inline">Details</span>
        </a>
      </div>
    </div>
  );
}
