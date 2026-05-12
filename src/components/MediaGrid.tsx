"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { type MediaItem } from "@/data/media";

type LightboxState = { open: false } | { open: true; index: number };

export function MediaGrid({ items }: { items: MediaItem[] }) {
  const [lb, setLb] = useState<LightboxState>({ open: false });

  const instagram = items.filter((i) => i.source === "instagram");
  const uploads = items.filter((i) => i.source === "upload");

  const openAt = (index: number) => setLb({ open: true, index });
  const close = () => setLb({ open: false });

  const prev = useCallback(() => {
    if (!lb.open) return;
    setLb({ open: true, index: (lb.index - 1 + items.length) % items.length });
  }, [lb, items.length]);

  const next = useCallback(() => {
    if (!lb.open) return;
    setLb({ open: true, index: (lb.index + 1) % items.length });
  }, [lb, items.length]);

  useEffect(() => {
    if (!lb.open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lb.open, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lb.open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lb.open]);

  return (
    <>
      {/* ── Instagram row ── */}
      {instagram.length > 0 && (
        <section>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-6 bg-brand" />
              <span className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-brand">
                From Instagram
              </span>
            </div>
            <a
              href="https://instagram.com/dimedevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-mute hover:text-brand transition-colors"
            >
              @dimedevelopment →
            </a>
          </div>

          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: `repeat(${Math.min(instagram.length, 6)}, 1fr)`,
            }}
          >
            {instagram.map((item, i) => (
              <Tile
                key={item.src}
                item={item}
                globalIndex={i}
                onClick={() => openAt(i)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Uploaded gallery ── */}
      {uploads.length > 0 && (
        <section className={instagram.length > 0 ? "mt-8" : ""}>
          {instagram.length > 0 && (
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[2px] w-6 bg-brand" />
              <span className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-brand">
                Gallery
              </span>
            </div>
          )}
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
            {uploads.map((item, i) => (
              <Tile
                key={item.src}
                item={item}
                globalIndex={instagram.length + i}
                onClick={() => openAt(instagram.length + i)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Lightbox ── */}
      {lb.open && (
        <div
          role="dialog"
          aria-modal
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={close}
        >
          {/* Close */}
          <button
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-ink/80 font-[family-name:var(--font-display)] text-xl text-bone hover:text-brand transition-colors"
          >
            ✕
          </button>

          {/* Prev */}
          {items.length > 1 && (
            <button
              aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center bg-ink/80 font-[family-name:var(--font-display)] text-2xl text-bone hover:text-brand transition-colors"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div
            className="relative mx-16 flex max-h-[88vh] max-w-[88vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[lb.index].src}
              alt={items[lb.index].alt}
              className="max-h-[82vh] max-w-[80vw] object-contain"
            />

            {/* Caption bar */}
            <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-between">
              <span className="text-xs text-mute">
                {items[lb.index].alt}
              </span>
              <span className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-mute">
                {lb.index + 1} / {items.length}
                {items[lb.index].source === "instagram" && (
                  <span className="ml-3 text-brand">Instagram</span>
                )}
              </span>
            </div>
          </div>

          {/* Next */}
          {items.length > 1 && (
            <button
              aria-label="Next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center bg-ink/80 font-[family-name:var(--font-display)] text-2xl text-bone hover:text-brand transition-colors"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}

function Tile({
  item,
  onClick,
}: {
  item: MediaItem;
  globalIndex: number;
  onClick: () => void;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <button
      type="button"
      aria-label={`View: ${item.alt}`}
      onClick={onClick}
      className="group relative aspect-square overflow-hidden bg-ink-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
    >
      {errored ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-mute">
            No image
          </span>
        </div>
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ objectPosition: item.objectPosition ?? "center" }}
          onError={() => setErrored(true)}
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/50">
        <div className="scale-75 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
          <div className="border border-brand px-3 py-1 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-brand">
            View
          </div>
        </div>
      </div>

      {/* Instagram badge */}
      {item.source === "instagram" && (
        <div className="absolute left-1 top-1 bg-ink/80 px-2 py-0.5 font-[family-name:var(--font-display)] text-[10px] uppercase tracking-[0.2em] text-brand opacity-0 transition-opacity group-hover:opacity-100">
          IG
        </div>
      )}
    </button>
  );
}
