"use client";

import { Flame, Clock, BarChart3, BookmarkIcon, ExternalLink } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-2xl">
      {/* User card */}
      <div className="card p-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-rust/20 flex items-center justify-center text-2xl flex-shrink-0">
          🧘
        </div>
        <div>
          <p className="text-lg font-semibold text-brown-500 dark:text-cream">
            Meditator
          </p>
          <p className="text-sm text-brown-200 dark:text-beige-300">
            Walking the path of Dhamma
          </p>
        </div>
      </div>

      {/* Stats */}
      <section>
        <h2 className="section-title mb-4">Meditation Stats</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="card p-4 text-center">
            <Flame className="w-5 h-5 text-rust mx-auto mb-2" />
            <p className="text-2xl font-semibold text-brown-500 dark:text-cream">0</p>
            <p className="text-xs text-brown-200 dark:text-beige-300 mt-0.5">Day streak</p>
          </div>
          <div className="card p-4 text-center">
            <Clock className="w-5 h-5 text-rust mx-auto mb-2" />
            <p className="text-2xl font-semibold text-brown-500 dark:text-cream">0</p>
            <p className="text-xs text-brown-200 dark:text-beige-300 mt-0.5">Hours total</p>
          </div>
          <div className="card p-4 text-center">
            <BarChart3 className="w-5 h-5 text-rust mx-auto mb-2" />
            <p className="text-2xl font-semibold text-brown-500 dark:text-cream">0</p>
            <p className="text-xs text-brown-200 dark:text-beige-300 mt-0.5">Sessions</p>
          </div>
        </div>
      </section>

      {/* Start meditating prompt */}
      <div className="card p-6 text-center border-2 border-dashed border-beige-200 dark:border-brown-300">
        <p className="text-3xl mb-3">🔔</p>
        <p className="font-medium text-brown-500 dark:text-cream mb-1">
          No sessions yet
        </p>
        <p className="text-sm text-brown-200 dark:text-beige-300 mb-4">
          Complete a meditation session to see your stats here.
        </p>
        <a href="/meditate" className="btn-primary inline-block">
          Start meditating →
        </a>
      </div>

      {/* Bookmarks section */}
      <section>
        <h2 className="section-title mb-4 flex items-center gap-2">
          <BookmarkIcon size={18} />
          Bookmarks
        </h2>
        <div className="card p-6 text-center border-2 border-dashed border-beige-200 dark:border-brown-300">
          <p className="text-sm text-brown-200 dark:text-beige-300">
            No bookmarks yet. Save books, discourses, and courses for quick access.
          </p>
        </div>
      </section>

      {/* Dhamma.org old student */}
      <section>
        <h2 className="section-title mb-4">Old Student Resources</h2>
        <div className="card p-5">
          <p className="text-sm text-brown-300 dark:text-beige-200 mb-3">
            Access the old student section of dhamma.org for group sitting schedules,
            course service opportunities, newsletters, and more.
          </p>
          <a
            href="https://www.dhamma.org/en/os"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm inline-flex items-center gap-2"
          >
            Old Student Area on dhamma.org <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
