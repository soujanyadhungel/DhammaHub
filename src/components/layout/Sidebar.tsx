"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Wind,
  BookOpen,
  MapPin,
  Users,
  Sun,
  Smartphone,
  User,
  Languages,
  LogIn,
} from "lucide-react";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/dhammhub";

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/meditate", label: "Meditate", icon: Wind },
  { href: "/library", label: "Library", icon: BookOpen },
  { href: "/courses", label: "Courses", icon: MapPin },
  { href: "/community", label: "Community", icon: Users },
  { href: "/daily", label: "Daily Dhamma", icon: Sun },
  { href: "/learn", label: "Learn Pali", icon: Languages },
  { href: "/apps", label: "Apps & Tools", icon: Smartphone },
  { href: "/profile", label: "Profile", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white/80 dark:bg-brown-500/90 backdrop-blur-sm border-r border-beige-200/60 dark:border-brown-400/60 px-4 py-6 flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 mb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/dhamma-wheel.gif`}
          alt="Dhamma"
          width={36}
          height={36}
          className="w-9 h-9 rounded-xl shadow-sm"
        />
        <div>
          <p className="font-serif text-lg font-semibold text-brown-500 dark:text-cream leading-none tracking-tight">
            Dhamma Hub
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-brown-200 dark:text-beige-300 mt-1">
            Goenka Tradition
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-0.5">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "nav-item",
                isActive && "nav-item-active"
              )}
            >
              <Icon className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={isActive ? 2.2 : 1.8} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Sign in link */}
      <div className="mt-4 px-1">
        <Link
          href="/login"
          className="nav-item text-brown-200 dark:text-beige-300 hover:text-rust"
        >
          <LogIn className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.8} />
          Sign in
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-6 px-3 pt-4 border-t border-beige-200/50 dark:border-brown-400/40">
        <p className="text-xs text-brown-200/80 dark:text-brown-100/60 leading-relaxed italic font-serif">
          May all beings be happy, peaceful, and liberated.
        </p>
        <p className="text-[10px] text-gold/60 dark:text-gold/40 mt-2 tracking-widest uppercase font-sans font-medium">
          Bhavatu sabba maṅgalaṁ
        </p>
      </div>
    </aside>
  );
}
