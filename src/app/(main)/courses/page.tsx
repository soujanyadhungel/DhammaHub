"use client";

import { useState } from "react";
import { centres } from "@/data/centres";
import { ExternalLink, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// Dynamically import map to avoid SSR issues with Leaflet
const CentreMap = dynamic(() => import("@/components/CentreMap"), {
  ssr: false,
  loading: () => (
    <div className="h-96 rounded-2xl bg-beige-100 dark:bg-brown-300 animate-pulse flex items-center justify-center">
      <MapPin size={24} className="text-brown-200" />
    </div>
  ),
});

const regions = ["All", "Asia", "North America", "Europe", "Asia-Pacific"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [selectedCentre, setSelectedCentre] = useState<string | null>(null);

  const filtered = centres.filter((c) => {
    const matchRegion = region === "All" || c.region === region;
    const matchSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.country.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Map */}
      <section>
        <CentreMap
          centres={filtered}
          selectedCentre={selectedCentre}
          onSelect={setSelectedCentre}
        />
      </section>

      {/* Search + filter */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-200 dark:text-beige-300"
          />
          <input
            type="text"
            placeholder="Search by country or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input pl-9"
          />
        </div>
      </div>

      {/* Region tabs */}
      <div className="flex flex-wrap gap-2">
        {regions.map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              region === r
                ? "bg-rust text-white"
                : "bg-beige-100 dark:bg-brown-300 text-brown-400 dark:text-beige-100 hover:bg-beige-200"
            )}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Centre list */}
      <div className="space-y-3">
        {filtered.map((centre) => (
          <div
            key={centre.id}
            className={cn(
              "card p-5 cursor-pointer hover:shadow-md transition-all",
              selectedCentre === centre.id &&
                "ring-2 ring-rust"
            )}
            onClick={() => setSelectedCentre(centre.id === selectedCentre ? null : centre.id)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-rust flex-shrink-0" />
                  <h3 className="font-semibold text-brown-500 dark:text-cream">
                    {centre.name}
                  </h3>
                </div>
                <p className="text-sm text-brown-300 dark:text-beige-200 mt-0.5 ml-5">
                  {centre.city}, {centre.country}
                </p>
                {centre.description && (
                  <p className="text-xs text-brown-200 dark:text-beige-300 mt-2 ml-5 max-w-lg">
                    {centre.description}
                  </p>
                )}
              </div>
              <a
                href={centre.courses}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-primary text-xs flex items-center gap-1 flex-shrink-0"
              >
                Courses <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-brown-200 dark:text-beige-300">
          <MapPin size={40} className="mx-auto mb-3 opacity-30" />
          <p>No centres found.</p>
        </div>
      )}

      {/* Register CTA */}
      <div className="card p-6 text-center">
        <h3 className="font-semibold text-brown-500 dark:text-cream mb-2">
          Register for a Course
        </h3>
        <p className="text-sm text-brown-300 dark:text-beige-200 mb-4 max-w-lg mx-auto">
          All 10-day Vipassana courses are completely free — tuition, food, and
          accommodation are covered by donations from previous students.
        </p>
        <a
          href="https://www.dhamma.org/en/courses/search"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          Search & Register on dhamma.org <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
