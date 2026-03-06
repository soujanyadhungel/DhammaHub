"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Wind, BookOpen, Users, Languages } from "lucide-react";

const mobileNavItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/meditate", label: "Meditate", icon: Wind },
  { href: "/library", label: "Library", icon: BookOpen },
  { href: "/community", label: "Community", icon: Users },
  { href: "/learn", label: "Pali", icon: Languages },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-brown-500/90 backdrop-blur-xl border-t border-beige-200/50 dark:border-brown-400/40 px-2 py-2 flex items-center justify-around safe-area-pb">
      {mobileNavItems.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200",
              isActive
                ? "text-rust"
                : "text-brown-200 dark:text-beige-300 active:scale-95"
            )}
          >
            <Icon size={20} strokeWidth={isActive ? 2.2 : 1.6} />
            <span className={cn(
              "text-[10px] tracking-wide",
              isActive ? "font-semibold" : "font-medium"
            )}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
