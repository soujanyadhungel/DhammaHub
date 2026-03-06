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
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const quote = getDailyQuote();
  const paliWord = getDailyPaliWord();

  return (
    <div className="space-y-8">
      {/* Hero quote card */}
      <div className="animate-fade-in relative overflow-hidden rounded-3xl bg-gradient-to-br from-brown-300 via-brown-400 to-brown-500 dark:from-brown-400 dark:via-brown-500 dark:to-brown-600 p-8 md:p-10 text-white shadow-lg">
        {/* Decorative orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-rust/15 blur-3xl animate-glow" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gold/10 blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="relative">
          <p className="label-uppercase text-cream/50 mb-4">
            Today&apos;s Dhamma
          </p>
          <blockquote className="font-serif text-xl md:text-2xl font-light leading-relaxed text-cream/95 mb-5 max-w-2xl italic">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <p className="text-sm text-beige-200/70 font-medium">
            — {quote.author}
            {quote.source && (
              <span className="ml-1.5 opacity-60">· {quote.source}</span>
            )}
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 animate-slide-up-delay-1">
        {[
          { icon: Flame, value: "0", label: "Day streak", color: "text-rust" },
          { icon: Clock, value: "0", label: "Hours total", color: "text-gold-dark" },
          { icon: Sun, value: "0", label: "Sessions", color: "text-rust" },
        ].map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="card p-4 md:p-5 text-center group">
            <Icon className={`w-5 h-5 ${color} mx-auto mb-2 transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.8} />
            <p className="text-2xl md:text-3xl font-serif font-semibold text-brown-500 dark:text-cream">{value}</p>
            <p className="text-[11px] text-brown-200/80 dark:text-beige-300/70 mt-1 tracking-wide font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Quick access */}
      <div className="animate-slide-up-delay-2">
        <h2 className="section-title mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            {
              href: "/meditate",
              icon: Wind,
              label: "Meditate",
              desc: "Timer & audio",
              iconBg: "bg-rust/10 dark:bg-rust/20",
              iconColor: "text-rust",
            },
            {
              href: "/library",
              icon: BookOpen,
              label: "Library",
              desc: "Books & ebooks",
              iconBg: "bg-brown-50 dark:bg-brown-300/20",
              iconColor: "text-brown-300 dark:text-beige-200",
            },
            {
              href: "/courses",
              icon: MapPin,
              label: "Courses",
              desc: "Find a course",
              iconBg: "bg-brown-50 dark:bg-brown-300/20",
              iconColor: "text-brown-300 dark:text-beige-200",
            },
            {
              href: "/community",
              icon: Users,
              label: "Community",
              desc: "Group sittings",
              iconBg: "bg-gold/10 dark:bg-gold/15",
              iconColor: "text-gold-dark dark:text-gold-light",
            },
          ].map(({ href, icon: Icon, label, desc, iconBg, iconColor }) => (
            <Link
              key={href}
              href={href}
              className="card p-5 group cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-105`}>
                <Icon size={18} className={iconColor} strokeWidth={1.8} />
              </div>
              <p className="font-semibold text-brown-500 dark:text-cream text-sm">{label}</p>
              <p className="text-[11px] text-brown-200/70 dark:text-beige-300/60 mt-0.5 tracking-wide">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Pali word */}
      <div className="card p-6 md:p-7 animate-slide-up-delay-3">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-gold/10 dark:bg-gold/15 items-center justify-center flex-shrink-0">
            <Sparkles size={18} className="text-gold-dark dark:text-gold-light" strokeWidth={1.8} />
          </div>
          <div className="flex-1">
            <p className="label-uppercase mb-2">
              Pali Word of the Day
            </p>
            <p className="text-2xl md:text-3xl font-serif font-semibold text-brown-500 dark:text-cream tracking-tight">
              {paliWord.word}
            </p>
            <p className="text-sm text-brown-200/70 dark:text-beige-300/60 mt-1 italic">
              /{paliWord.pronunciation}/
            </p>
            <p className="text-base font-semibold text-rust mt-3">
              {paliWord.meaning}
            </p>
            <p className="text-sm text-brown-300 dark:text-beige-200 mt-2 max-w-lg leading-relaxed">
              {paliWord.context}
            </p>
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-beige-200/50 dark:border-brown-300/30">
          <Link
            href="/daily"
            className="text-sm text-rust hover:text-rust-dark flex items-center gap-1.5 w-fit font-medium transition-colors"
          >
            All daily content <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Start meditating CTA */}
      <div className="card p-6 flex items-center justify-between animate-slide-up-delay-4">
        <div>
          <p className="font-serif text-lg font-semibold text-brown-500 dark:text-cream tracking-tight">
            Ready to sit?
          </p>
          <p className="text-sm text-brown-200/70 dark:text-beige-300/60 mt-0.5">
            Start your meditation timer with traditional bells.
          </p>
        </div>
        <Link href="/meditate" className="btn-primary flex items-center gap-2 flex-shrink-0">
          <Wind size={16} strokeWidth={2} />
          Meditate
        </Link>
      </div>
    </div>
  );
}
