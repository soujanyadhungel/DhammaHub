"use client";

import { useState } from "react";
import { books, categories } from "@/data/books";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, ExternalLink, FileText, Lock, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [freeOnly, setFreeOnly] = useState(false);

  const filtered = books.filter((b) => {
    const matchCat = activeCategory === "all" || b.category === activeCategory;
    const matchFree = !freeOnly || b.isFree;
    const matchSearch =
      !search ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchFree && matchSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Search + filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-200 dark:text-beige-300"
          />
          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input pl-9"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-brown-400 dark:text-beige-200 cursor-pointer flex-shrink-0">
          <input
            type="checkbox"
            checked={freeOnly}
            onChange={(e) => setFreeOnly(e.target.checked)}
            className="rounded accent-rust"
          />
          Free only
        </label>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              activeCategory === cat.id
                ? "bg-rust text-white"
                : "bg-beige-100 dark:bg-brown-300 text-brown-400 dark:text-beige-100 hover:bg-beige-200 dark:hover:bg-brown-200"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-brown-200 dark:text-beige-300">
        {filtered.length} book{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Book grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((book) => (
          <div
            key={book.id}
            className="card p-5 flex flex-col hover:shadow-md transition-shadow"
          >
            {/* Icon area */}
            <div className="w-12 h-16 rounded-lg bg-beige-100 dark:bg-brown-300 flex items-center justify-center mb-4 flex-shrink-0">
              <BookOpen size={22} className="text-brown-300 dark:text-beige-200" />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-brown-500 dark:text-cream text-sm leading-snug">
                  {book.title}
                </h3>
                {book.isFree ? (
                  <Badge variant="green" className="flex-shrink-0">
                    Free
                  </Badge>
                ) : (
                  <Badge variant="outline" className="flex-shrink-0">
                    <Lock size={10} className="mr-1" />
                    Paid
                  </Badge>
                )}
              </div>
              <p className="text-xs text-rust mb-2">{book.author}</p>
              <p className="text-xs text-brown-300 dark:text-beige-300 leading-relaxed line-clamp-3">
                {book.description}
              </p>
              {book.pages && (
                <p className="text-xs text-brown-200 dark:text-beige-300 mt-2">
                  {book.pages} pages
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              {book.isFree && book.pdfUrl && (
                <a
                  href={book.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs flex items-center gap-1 flex-1 justify-center"
                >
                  <FileText size={12} />
                  Read Free
                </a>
              )}
              {book.storeUrl && (
                <a
                  href={book.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-xs flex items-center gap-1 flex-1 justify-center",
                    book.isFree ? "btn-secondary" : "btn-primary"
                  )}
                >
                  <ExternalLink size={12} />
                  {book.isFree ? "Pariyatti Store" : "Buy"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-brown-200 dark:text-beige-300">
          <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
          <p>No books match your filters.</p>
        </div>
      )}

      <div className="card p-5 text-center">
        <p className="text-sm text-brown-300 dark:text-beige-200 mb-3">
          Browse the full Pariyatti catalog with 1,000+ titles in 30+ languages
        </p>
        <a
          href="https://store.pariyatti.org"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          Visit Pariyatti Store <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
