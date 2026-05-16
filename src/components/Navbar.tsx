"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/",        label: "Home"     },
  { href: "/services",label: "Services" },
  { href: "/about",   label: "About"    },
  { href: "/media",   label: "Media"    },
  { href: "/booking", label: "Booking"  },
  { href: "/shop",    label: "Shop"     },
  { href: "/contact", label: "Contact"  },
];

export function Navbar() {
  const pathname  = usePathname();
  const [open,    setOpen]    = useState(false);
  const [scrolled,setScrolled]= useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          {/* Logo */}
          <Link href="/" aria-label="Dime Development" onClick={close} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Dime Development"
              width={240}
              height={72}
              priority
              className="h-11 w-auto lg:h-13"
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-6 lg:flex">
            {links.filter(l => l.href !== "/").map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className="relative font-[family-name:var(--font-display)] text-[0.72rem] uppercase tracking-[0.22em] transition-colors duration-150"
                  style={{ color: active ? "var(--color-brand)" : "var(--color-bone)" }}
                >
                  {l.label}
                  {active && (
                    <span
                      className="anim-line absolute -bottom-1 left-0 right-0 block"
                      style={{ height: 2, background: "var(--color-brand)" }}
                    />
                  )}
                </Link>
              );
            })}
            <Link href="/booking" className="btn-brand ml-2 text-[0.7rem]">
              Book Now <span>→</span>
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="flex lg:hidden flex-col justify-center gap-[5px] p-2 w-10 h-10"
          >
            <span
              className="block h-[2px] w-6 transition-all duration-300"
              style={{
                background: "var(--color-bone)",
                transform: open ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[2px] w-6 transition-all duration-300"
              style={{
                background: "var(--color-bone)",
                opacity: open ? 0 : 1,
                transform: open ? "scaleX(0)" : "scaleX(1)",
              }}
            />
            <span
              className="block h-[2px] w-6 transition-all duration-300"
              style={{
                background: "var(--color-bone)",
                transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-8 lg:hidden transition-all duration-500"
        style={{
          background: "var(--color-ink)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Big decorative letter */}
        <div
          className="pointer-events-none absolute right-4 bottom-8 font-[family-name:var(--font-display)] select-none leading-none"
          style={{ fontSize: "38vw", color: "var(--color-brand)", opacity: 0.04 }}
          aria-hidden
        >
          DD
        </div>

        <nav className="relative z-10 flex flex-col gap-1">
          {links.map((l, i) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                aria-current={active ? "page" : undefined}
                className="block border-b py-5 font-[family-name:var(--font-display)] text-4xl uppercase tracking-[0.08em] transition-colors"
                style={{
                  borderColor: "var(--color-line)",
                  color: active ? "var(--color-brand)" : "var(--color-bone)",
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(20px)",
                  transition: "color 0.15s, opacity 0.4s, transform 0.4s",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/booking"
          onClick={close}
          className="btn-brand mt-10 self-start text-base"
          style={{ transitionDelay: open ? "320ms" : "0ms" }}
        >
          Book Now →
        </Link>
      </div>
    </>
  );
}
