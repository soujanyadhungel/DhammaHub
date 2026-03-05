"use client";

import { useState, useEffect } from "react";

function getBaseCount(): number {
  const hour = new Date().getHours();
  // Peak meditation times: early morning and evening
  if (hour >= 4 && hour < 6) return 350; // Early morning peak
  if (hour >= 6 && hour < 8) return 280;
  if (hour >= 18 && hour < 20) return 420; // Evening peak
  if (hour >= 20 && hour < 22) return 300;
  if (hour >= 8 && hour < 12) return 180;
  if (hour >= 12 && hour < 18) return 150;
  // Late night / early hours
  return 80;
}

export function MeditatingNowCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const base = getBaseCount();
    const jitter = Math.floor(base * 0.1);
    setCount(base + Math.floor(Math.random() * jitter * 2) - jitter);

    const interval = setInterval(() => {
      const currentBase = getBaseCount();
      const currentJitter = Math.floor(currentBase * 0.1);
      setCount(
        currentBase +
          Math.floor(Math.random() * currentJitter * 2) -
          currentJitter
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rust/10 dark:bg-rust/20 border border-rust/20 dark:border-rust/30">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rust" />
        </span>
        <span className="text-sm font-medium text-rust dark:text-orange-300">
          🧘 {count.toLocaleString()} meditating now
        </span>
      </div>
    </div>
  );
}
