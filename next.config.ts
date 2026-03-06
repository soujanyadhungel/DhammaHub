import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // react-leaflet is incompatible with React 18 StrictMode's double-mount behavior
  reactStrictMode: false,
  // Subfolder hosting under soujanyad.com/dhammhub
  basePath: "/dhammhub",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "store.pariyatti.org" },
      { protocol: "https", hostname: "pariyatti.org" },
      { protocol: "https", hostname: "www.dhamma.org" },
      { protocol: "https", hostname: "i.redd.it" },
      { protocol: "https", hostname: "external-preview.redd.it" },
      { protocol: "https", hostname: "preview.redd.it" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
