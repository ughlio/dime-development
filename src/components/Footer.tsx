import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Booking" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="Dime Development"
              width={320}
              height={96}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">
              London-based basketball coaching & player development. 1-on-1,
              group, clinics, online. Built to elevate your game.
            </p>
          </div>

          <div>
            <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-bone hover:text-brand transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand">
              Connect
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/dimedevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone hover:text-brand transition-colors"
                >
                  Instagram →
                </a>
              </li>
              <li>
                <a
                  href="tel:+447311883899"
                  className="text-bone hover:text-brand transition-colors"
                >
                  07311 883 899
                </a>
              </li>
              <li>
                <a
                  href="mailto:Dimedevelopment@hotmail.com"
                  className="text-bone hover:text-brand transition-colors"
                >
                  Dimedevelopment@hotmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-bone hover:text-brand transition-colors"
                >
                  Contact form →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-line)] pt-6 text-xs text-mute md:flex-row md:items-center">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Dime Development Ltd. All rights reserved.</p>
            <p>
              Registered in England &amp; Wales · Company No.{" "}
              <span className="text-bone">15690433</span> · London, United
              Kingdom
            </p>
          </div>
          <p className="font-[family-name:var(--font-display)] tracking-[0.2em] uppercase">
            Coach Daniel Maxwell
          </p>
        </div>
      </div>
    </footer>
  );
}
