import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "rust" | "green" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-beige-100 dark:bg-brown-300 text-brown-400 dark:text-beige-100":
            variant === "default",
          "bg-rust/10 text-rust dark:bg-rust/20": variant === "rust",
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400":
            variant === "green",
          "border border-beige-300 dark:border-brown-300 text-brown-300 dark:text-beige-200":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
