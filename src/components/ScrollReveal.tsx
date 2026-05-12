"use client";
import { useEffect } from "react";

const TARGETS = "h2, h3, .eyebrow, .lead, article, ol > li, dl > div";

export function ScrollReveal() {
  useEffect(() => {
    // Skip hero sections (they have the .noise class) — only animate content sections
    const sections = document.querySelectorAll("main section:not(.noise)");
    const queue: [HTMLElement, number][] = [];

    sections.forEach((section) => {
      const els = section.querySelectorAll<HTMLElement>(TARGETS);
      els.forEach((el, i) => {
        queue.push([el, Math.min(i * 0.07, 0.32)]);
      });
    });

    // Only hide elements that start below the fold to avoid flash on above-fold content
    queue.forEach(([el, delay]) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      el.style.transition = `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          const el = target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "none";
          io.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    queue.forEach(([el]) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
