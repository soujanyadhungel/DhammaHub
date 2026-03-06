import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Flower2, Wind, BookOpen, MapPin, Users, Sun, ArrowRight } from "lucide-react";

export default async function RootPage() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-cream dark:bg-brown-600 relative">
      {/* Grain */}
      <div className="grain-overlay" />

      {/* Ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-radial from-rust/5 via-gold/3 to-transparent blur-3xl" />
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rust to-rust-dark flex items-center justify-center shadow-lg shadow-rust/20">
              <Flower2 className="w-7 h-7 text-white" strokeWidth={1.6} />
            </div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-brown-500 dark:text-cream mb-5 tracking-tight leading-[1.1]">
            Dhamma Hub
          </h1>
          <p className="text-lg md:text-xl text-brown-300 dark:text-beige-200 mb-4 font-light">
            Everything Vipassana, in one place.
          </p>
          <p className="text-base text-brown-200/80 dark:text-beige-300/70 mb-12 max-w-xl mx-auto leading-relaxed">
            Books, discourses, meditation timer, course finder, community, and
            daily Dhamma — all in one beautiful app for practitioners in the S.N.
            Goenka tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="btn-primary px-8 py-3.5 text-base rounded-2xl flex items-center gap-2 justify-center shadow-lg shadow-rust/20"
            >
              Get started <ArrowRight size={16} />
            </Link>
            <Link
              href="/login"
              className="btn-secondary px-8 py-3.5 text-base rounded-2xl justify-center"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="relative max-w-4xl mx-auto px-6 pb-28">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              icon: Wind,
              title: "Meditate",
              desc: "Timer with traditional bells, group sitting recordings, and Goenka discourses.",
            },
            {
              icon: BookOpen,
              title: "Library",
              desc: "Free ebooks and the complete Pariyatti catalog in 30+ languages.",
            },
            {
              icon: MapPin,
              title: "Find Courses",
              desc: "Worldwide centre map with direct registration links to dhamma.org.",
            },
            {
              icon: Users,
              title: "Community",
              desc: "Find group sittings and one-day sits near you, worldwide.",
            },
            {
              icon: Sun,
              title: "Daily Dhamma",
              desc: "A new quote and Pali word every day from the Goenka tradition.",
            },
            {
              icon: Flower2,
              title: "Track Progress",
              desc: "Log sessions, build streaks, and bookmark your favourite resources.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6 group">
              <div className="w-10 h-10 rounded-xl bg-rust/8 dark:bg-rust/15 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <Icon size={20} className="text-rust" strokeWidth={1.8} />
              </div>
              <p className="font-serif text-lg font-semibold text-brown-500 dark:text-cream mb-1.5 tracking-tight">
                {title}
              </p>
              <p className="text-sm text-brown-300/80 dark:text-beige-200/70 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-brown-200/60 dark:text-beige-300/50 italic font-serif">
            Built with love for the Dhamma.
          </p>
          <p className="text-[10px] text-gold/40 dark:text-gold/30 mt-2 tracking-[0.2em] uppercase font-sans font-medium">
            May all beings be happy, peaceful, and liberated
          </p>
        </div>
      </div>
    </div>
  );
}
