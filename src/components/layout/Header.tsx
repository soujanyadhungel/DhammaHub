"use client";

import { usePathname } from "next/navigation";
import { Moon, Sun, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  "/dashboard": { title: "Dashboard", subtitle: "Welcome back, meditator" },
  "/meditate": { title: "Meditate", subtitle: "Sit, observe, be equanimous" },
  "/library": { title: "Library", subtitle: "Books, ebooks & audio" },
  "/courses": { title: "Courses", subtitle: "Find a Vipassana course near you" },
  "/community": { title: "Community", subtitle: "r/vipassana & group sittings" },
  "/daily": { title: "Daily Dhamma", subtitle: "Quote & Pali word of the day" },
  "/learn": { title: "Learn Pali", subtitle: "The language of the Buddha's teachings" },
  "/apps": { title: "Apps & Tools", subtitle: "Dhamma apps & resources" },
  "/profile": { title: "Profile", subtitle: "Your meditation journey" },
};

export function Header() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const page = pageTitles[pathname] ?? { title: "Dhamma Hub", subtitle: "" };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <header className="sticky top-0 z-30 bg-cream/80 dark:bg-brown-600/80 backdrop-blur-md border-b border-beige-200 dark:border-brown-400 px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-brown-500 dark:text-cream leading-none">
          {page.title}
        </h1>
        <p className="text-xs text-brown-200 dark:text-beige-200 mt-0.5">
          {page.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleDark}
          className={cn(
            "btn-ghost p-2 rounded-lg",
            "text-brown-300 dark:text-beige-200"
          )}
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="btn-ghost p-2 rounded-lg" aria-label="Notifications">
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}
