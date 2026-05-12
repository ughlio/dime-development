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
            <div className="font-[family-name:var(--font-display)] text-3xl tracking-[0.08em] text-bone">
              DIME<span className="text-brand">·</span>DEVELOPMENT
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              Basketball coaching & player development. 1-on-1, group, clinics,
              online. Built to elevate your game.
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
                  href="mailto:coach@dimedevelopment.com"
                  className="text-bone hover:text-brand transition-colors"
                >
                  coach@dimedevelopment.com
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
          <p>© {new Date().getFullYear()} Dime Development. All rights reserved.</p>
          <p className="font-[family-name:var(--font-display)] tracking-[0.2em] uppercase">
            Coach Daniel Maxwell
          </p>
        </div>
      </div>
    </footer>
  );
}
