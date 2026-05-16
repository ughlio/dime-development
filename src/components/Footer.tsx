import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services"  },
  { href: "/about",    label: "About"     },
  { href: "/media",    label: "Media"     },
  { href: "/booking",  label: "Booking"   },
  { href: "/shop",     label: "Shop"      },
  { href: "/contact",  label: "Contact"   },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-line)", background: "var(--color-ink-2)" }}>
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="Dime Development" width={200} height={60} className="h-12 w-auto" />
            <p className="mt-5 max-w-xs leading-relaxed" style={{ color: "var(--color-mute)", fontSize: "0.88rem" }}>
              London-based basketball coaching & player development. 1-2-1, group, clinics, online. Built to elevate your game.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="eyebrow mb-4">Navigate</div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="eyebrow mb-4">Connect</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com/dime_development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: "var(--color-bone)" }}
                >
                  Instagram →
                </a>
              </li>
              <li>
                <a href="tel:+447311883899" className="transition-colors" style={{ color: "var(--color-bone)" }}>
                  Phone No
                </a>
              </li>
              <li>
                <a href="mailto:Dimedevelopment@hotmail.com" className="transition-colors" style={{ color: "var(--color-bone)" }}>
                  Email
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition-colors" style={{ color: "var(--color-bone)" }}>
                  Contact form →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div
          className="mt-12 flex flex-col items-start justify-between gap-3 pt-6 text-xs sm:flex-row sm:items-center"
          style={{ borderTop: "1px solid var(--color-line)", color: "var(--color-mute)" }}
        >
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Dime Development Ltd. All rights reserved.</p>
            <p>
              Registered in England &amp; Wales · Company No.{" "}
              <span style={{ color: "var(--color-bone)" }}>15690433</span>
              {" "}· London, United Kingdom
            </p>
          </div>
          <div
            className="font-[family-name:var(--font-display)] tracking-[0.2em] uppercase"
            style={{ fontSize: "0.7rem" }}
          >
            Coach Daniel Maxwell
          </div>
        </div>
      </div>
    </footer>
  );
}
