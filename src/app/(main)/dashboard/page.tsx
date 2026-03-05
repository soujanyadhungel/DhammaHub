import { getDailyQuote } from "@/data/quotes";
import { getDailyPaliWord } from "@/data/pali-words";
import {
  Wind,
  BookOpen,
  MapPin,
  Users,
  ArrowRight,
  Flame,
  Clock,
  Sun,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const quote = getDailyQuote();
  const paliWord = getDailyPaliWord();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero quote card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brown-200 to-brown-400 dark:from-brown-400 dark:to-brown-600 p-8 text-white shadow-lg">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-widest text-brown-50 mb-3 opacity-75">
            Today&apos;s Dhamma
          </p>
          <blockquote className="text-lg md:text-xl font-light leading-relaxed text-cream mb-4 max-w-2xl">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <p className="text-sm text-beige-200 opacity-90">
            — {quote.author}
            {quote.source && (
              <span className="ml-1 opacity-70">· {quote.source}</span>
            )}
          </p>
        </div>
      </div>

      {/* Stats row */}
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
          <Sun className="w-5 h-5 text-rust mx-auto mb-2" />
          <p className="text-2xl font-semibold text-brown-500 dark:text-cream">0</p>
          <p className="text-xs text-brown-200 dark:text-beige-300 mt-0.5">Sessions</p>
        </div>
      </div>

      {/* Quick access */}
      <div>
        <h2 className="section-title mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              href: "/meditate",
              icon: Wind,
              label: "Meditate",
              desc: "Timer & audio",
              color: "bg-rust/10 text-rust",
            },
            {
              href: "/library",
              icon: BookOpen,
              label: "Library",
              desc: "Books & ebooks",
              color: "bg-brown-50 dark:bg-brown-300/20 text-brown-300 dark:text-beige-200",
            },
            {
              href: "/courses",
              icon: MapPin,
              label: "Courses",
              desc: "Find a course",
              color: "bg-brown-50 dark:bg-brown-300/20 text-brown-300 dark:text-beige-200",
            },
            {
              href: "/community",
              icon: Users,
              label: "Community",
              desc: "r/vipassana",
              color: "bg-brown-50 dark:bg-brown-300/20 text-brown-300 dark:text-beige-200",
            },
          ].map(({ href, icon: Icon, label, desc, color }) => (
            <Link
              key={href}
              href={href}
              className="card p-5 hover:shadow-md transition-shadow group"
            >
              <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
                <Icon size={18} />
              </div>
              <p className="font-medium text-brown-500 dark:text-cream text-sm">{label}</p>
              <p className="text-xs text-brown-200 dark:text-beige-300 mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Pali word */}
      <div className="card p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brown-200 dark:text-beige-300 mb-2">
              Pali Word of the Day
            </p>
            <p className="text-2xl font-semibold text-brown-500 dark:text-cream">
              {paliWord.word}
            </p>
            <p className="text-sm text-brown-200 dark:text-beige-300 mt-1">
              /{paliWord.pronunciation}/
            </p>
            <p className="text-base font-medium text-rust mt-2">
              {paliWord.meaning}
            </p>
            <p className="text-sm text-brown-300 dark:text-beige-200 mt-2 max-w-lg leading-relaxed">
              {paliWord.context}
            </p>
          </div>
        </div>
        <Link
          href="/daily"
          className="mt-4 text-sm text-rust hover:text-rust-dark flex items-center gap-1 w-fit"
        >
          All daily content <ArrowRight size={14} />
        </Link>
      </div>

      {/* Start meditating CTA */}
      <div className="card p-6 flex items-center justify-between">
        <div>
          <p className="font-semibold text-brown-500 dark:text-cream">
            Ready to sit?
          </p>
          <p className="text-sm text-brown-200 dark:text-beige-300 mt-0.5">
            Start your meditation timer with traditional bells.
          </p>
        </div>
        <Link href="/meditate" className="btn-primary flex items-center gap-2 flex-shrink-0">
          <Wind size={16} />
          Meditate
        </Link>
      </div>
    </div>
  );
}
