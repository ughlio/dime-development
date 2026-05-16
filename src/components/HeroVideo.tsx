"use client";
import { useEffect, useRef, useState } from "react";

const MASK =
  "linear-gradient(to right, transparent, black 18%, black 82%, transparent), " +
  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const load = () => {
      video.src = "/ballhandling.mp4";
      video.load();
      video.play().catch(() => {});
    };

    // Defer src assignment until browser is idle — page is interactive first,
    // video loads in the background without blocking anything.
    if ("requestIdleCallback" in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).requestIdleCallback(load, { timeout: 3000 });
    } else {
      setTimeout(load, 500);
    }

    video.onplaying = () => setVisible(true);
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      aria-hidden
      preload="none"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      style={{
        opacity: visible ? 0.38 : 0,
        transition: "opacity 1.2s ease",
        maskImage: MASK,
        maskComposite: "intersect",
        WebkitMaskImage: MASK,
        WebkitMaskComposite: "source-in",
      } as React.CSSProperties}
    />
  );
}
