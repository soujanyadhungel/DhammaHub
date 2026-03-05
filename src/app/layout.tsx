import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhamma Hub — Vipassana in the Goenka Tradition",
  description:
    "Your complete resource for Vipassana meditation in the S.N. Goenka tradition. Books, discourses, meditation timer, courses, community, and more.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Dhamma Hub",
    description: "Everything Vipassana, in one place.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
