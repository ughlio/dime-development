/**
 * MEDIA CONFIG — edit this file to manage the media grid.
 *
 * source: "instagram" → appears in the top Instagram row
 * source: "upload"    → appears in the main gallery below
 *
 * objectPosition controls WHERE the thumbnail crops. Examples:
 *   "center"       — default, centres the image
 *   "top"          — shows the top of the image
 *   "bottom"       — shows the bottom
 *   "50% 20%"      — x% from left, y% from top (fine-tuning)
 *
 * HOW TO ADD IMAGES:
 *   Instagram → drop files into public/media/instagram/ then add an entry below
 *   Uploads   → drop files into public/media/uploads/  then add an entry below
 */

export type MediaItem = {
  src: string;
  alt: string;
  source: "instagram" | "upload";
  objectPosition?: string;
};

export const mediaItems: MediaItem[] = [
  // ─── INSTAGRAM ROW (top) ────────────────────────────────────────────
  // These show in the first row with a "From Instagram" label.
  // Aim for 3–6 images here so they fill one clean row.
  {
    src: "/media/instagram/1.jpg",
    alt: "Training session highlight",
    source: "instagram",
    objectPosition: "center",
  },
  {
    src: "/media/instagram/2.jpg",
    alt: "Game day",
    source: "instagram",
    objectPosition: "top",
  },
  {
    src: "/media/instagram/3.jpg",
    alt: "1-2-1 drill work",
    source: "instagram",
    objectPosition: "center",
  },

  // ─── UPLOADED PHOTOS (rest of grid) ─────────────────────────────────
  // These fill the main gallery section below the Instagram row.
  {
    src: "/media/uploads/1.jpg",
    alt: "Coaching clinic",
    source: "upload",
    objectPosition: "center",
  },
  {
    src: "/media/uploads/2.jpg",
    alt: "Camp session",
    source: "upload",
    objectPosition: "top",
  },
  {
    src: "/media/uploads/3.jpg",
    alt: "Player development",
    source: "upload",
    objectPosition: "center",
  },
  {
    src: "/media/uploads/4.jpg",
    alt: "Group session",
    source: "upload",
    objectPosition: "center",
  },
  {
    src: "/media/uploads/5.jpg",
    alt: "Half-term camp",
    source: "upload",
    objectPosition: "bottom",
  },
  {
    src: "/media/uploads/6.jpg",
    alt: "Party session",
    source: "upload",
    objectPosition: "center",
  },
];
