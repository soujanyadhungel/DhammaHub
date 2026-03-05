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
import Image from "next/image";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
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
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white dark:bg-brown-500 border-r border-beige-200 dark:border-brown-400 px-4 py-6 flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-3 mb-8">
        <Image
          src="/dhamma-wheel.gif"
          alt="Dhamma"
          width={36}
          height={36}
          className="w-9 h-9 rounded-xl"
          unoptimized
        />
        <div>
          <p className="font-semibold text-brown-500 dark:text-cream leading-none">
            Dhamma Hub
          </p>
          <p className="text-xs text-brown-200 dark:text-beige-300 mt-0.5">
            Goenka Tradition
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
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
              <Icon className="w-4.5 h-4.5 flex-shrink-0" size={18} />
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
          <LogIn className="w-4.5 h-4.5 flex-shrink-0" size={18} />
          Sign in
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-4 px-3">
        <p className="text-xs text-brown-200 dark:text-brown-100 leading-relaxed">
          May all beings be happy, peaceful, and liberated.
        </p>
        <p className="text-xs text-brown-100 dark:text-brown-200 mt-2">
          Bhavatu sabba mangalam
        </p>
      </div>
    </aside>
  );
}
