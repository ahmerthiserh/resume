"use client";

import dynamic from "next/dynamic";

// three.js needs the browser, so the scene is loaded only on the client.
const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-48 w-48 rounded-full bg-blue-600/25 blur-3xl animate-pulse" />
    </div>
  ),
});

export function HeroCanvas() {
  return <HeroScene />;
}
