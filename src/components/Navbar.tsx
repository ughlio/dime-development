"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Booking" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-ink/85 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl tracking-[0.08em] text-bone hover:text-brand transition-colors"
          onClick={() => setOpen(false)}
        >
          DIME<span className="text-brand">·</span>DEVELOPMENT
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase transition-colors ${
                  active
                    ? "text-brand"
                    : "text-bone hover:text-brand"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-brand" />
                )}
              </Link>
            );
          })}
          <Link
            href="/booking"
            className="ml-2 bg-brand px-5 py-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-ink hover:bg-brand-2 transition-colors"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-[2px] w-6 bg-bone transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-bone transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-bone transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-[var(--color-line)] bg-ink">
          <ul className="flex flex-col">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-[var(--color-line)] px-6 py-4 font-[family-name:var(--font-display)] text-lg tracking-[0.15em] uppercase ${
                      active ? "text-brand" : "text-bone"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="block bg-brand px-6 py-4 font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.15em] text-ink"
              >
                Book Now →
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
