"use client";

import { useState, useMemo } from "react";
import { Search, BookOpen, ExternalLink } from "lucide-react";
import { paliWords, CATEGORIES, type PaliWord } from "@/data/pali-words";
import { cn } from "@/lib/utils";

function PaliCard({ word }: { word: PaliWord }) {
  return (
    <div className="card p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-brown-500 dark:text-cream">
          {word.word}
        </h3>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-rust/10 text-rust dark:bg-rust/20 dark:text-orange-300 whitespace-nowrap">
          {word.category}
        </span>
      </div>
      <p className="text-xs text-brown-200 dark:text-beige-300 italic mb-1">
        /{word.pronunciation}/
      </p>
      <p className="text-sm font-medium text-rust dark:text-orange-300 mb-2">
        {word.meaning}
      </p>
      <p className="text-sm text-brown-300 dark:text-beige-200 leading-relaxed">
        {word.context}
      </p>
    </div>
  );
}

export default function LearnPaliPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredWords = useMemo(() => {
    let words = paliWords;

    if (activeCategory !== "All") {
      words = words.filter((w) => w.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      words = words.filter(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.meaning.toLowerCase().includes(q) ||
          w.context.toLowerCase().includes(q)
      );
    }

    return words;
  }, [searchQuery, activeCategory]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <div className="card p-6 md:p-8 bg-gradient-to-br from-rust/5 to-transparent dark:from-rust/10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rust/10 dark:bg-rust/20 flex items-center justify-center flex-shrink-0">
            <BookOpen size={24} className="text-rust" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-brown-500 dark:text-cream mb-2">
              Learn Pali
            </h2>
            <p className="text-sm text-brown-300 dark:text-beige-200 leading-relaxed">
              Pali is the language of the Theravada Buddhist scriptures and the
              medium through which the Buddha&apos;s teachings have been
              preserved. Understanding key Pali terms deepens your Vipassana
              practice and helps you connect with the original meaning of the
              Dhamma.
            </p>
            <p className="text-sm text-brown-200 dark:text-beige-300 mt-2">
              {paliWords.length} words across {CATEGORIES.length} categories
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-200 dark:text-beige-300"
        />
        <input
          type="text"
          placeholder="Search words, meanings, or context..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input pl-10 w-full"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("All")}
          className={cn(
            "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
            activeCategory === "All"
              ? "bg-rust text-white"
              : "bg-beige-100 dark:bg-brown-300 text-brown-400 dark:text-beige-100 hover:bg-beige-200 dark:hover:bg-brown-200"
          )}
        >
          All ({paliWords.length})
        </button>
        {CATEGORIES.map((cat) => {
          const count = paliWords.filter((w) => w.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-rust text-white"
                  : "bg-beige-100 dark:bg-brown-300 text-brown-400 dark:text-beige-100 hover:bg-beige-200 dark:hover:bg-brown-200"
              )}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Word grid */}
      {filteredWords.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWords.map((word) => (
            <PaliCard key={word.word} word={word} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-brown-200 dark:text-beige-300">
            No words found matching &ldquo;{searchQuery}&rdquo;
          </p>
        </div>
      )}

      {/* Resources link */}
      <div className="card p-5 flex items-center justify-between">
        <div>
          <p className="font-medium text-brown-500 dark:text-cream">
            Pali Resources
          </p>
          <p className="text-sm text-brown-200 dark:text-beige-300 mt-0.5">
            Explore Pali study materials, glossaries, and the Tipitaka on dhamma.org.
          </p>
        </div>
        <a
          href="https://www.dhamma.org/en-US/os/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-1.5 flex-shrink-0 text-sm"
        >
          dhamma.org <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
