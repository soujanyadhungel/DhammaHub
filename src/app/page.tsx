import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Flower2, Wind, BookOpen, MapPin, Users, Sun, ArrowRight } from "lucide-react";

export default async function RootPage() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-cream dark:bg-brown-600">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brown-200/30 to-rust/10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-rust flex items-center justify-center shadow-lg">
              <Flower2 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-brown-500 dark:text-cream mb-4 tracking-tight">
            Dhamma Hub
          </h1>
          <p className="text-lg text-brown-300 dark:text-beige-200 mb-4">
            Everything Vipassana, in one place.
          </p>
          <p className="text-base text-brown-200 dark:text-beige-300 mb-10 max-w-xl mx-auto">
            Books, discourses, meditation timer, course finder, community, and
            daily Dhamma — all in one beautiful app for practitioners in the S.N.
            Goenka tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="btn-primary px-8 py-3.5 text-base rounded-2xl flex items-center gap-2 justify-center"
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
      <div className="max-w-4xl mx-auto px-6 pb-24">
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
              desc: "Live r/vipassana posts and old student group sitting schedules.",
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
            <div key={title} className="card p-5">
              <Icon size={20} className="text-rust mb-3" />
              <p className="font-semibold text-brown-500 dark:text-cream mb-1">
                {title}
              </p>
              <p className="text-sm text-brown-300 dark:text-beige-200 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-brown-200 dark:text-beige-300 mt-12">
          Built with love for the Dhamma. May all beings be happy, peaceful, and
          liberated.
        </p>
      </div>
    </div>
  );
}
