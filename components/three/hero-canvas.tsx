"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

function Glow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-1/2 w-1/2 rounded-full bg-blue-600/25 blur-3xl" />
    </div>
  );
}

// three.js needs the browser, so the scene is loaded only on the client.
const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false, loading: Glow });

let webglSupported: boolean | null = null;
function hasWebGL() {
  if (webglSupported === null) {
    try {
      const c = document.createElement("canvas");
      webglSupported = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webglSupported = false;
    }
  }
  return webglSupported;
}
const noSubscribe = () => () => {};

/** Renders the 3D scene, or a soft glow on devices without WebGL. */
export function HeroCanvas() {
  const supported = useSyncExternalStore(noSubscribe, hasWebGL, () => false);
  return supported ? <HeroScene /> : <Glow />;
}
