import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dime Development | London Basketball Coaching with Daniel Maxwell",
  description:
    "London-based basketball coaching & player development. 1-2-1, group, clinics, and online training with Coach Daniel Maxwell. Dimes don't miss.",
  openGraph: {
    title: "Dime Development | London Basketball Coaching",
    description:
      "London-based basketball coaching & player development with Coach Daniel Maxwell. Personalised training for all ages and abilities.",
    siteName: "Dime Development",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dime Development | London Basketball Coaching",
    description:
      "London-based basketball coaching & player development with Coach Daniel Maxwell.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-bone">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-[76px]">
          <ScrollReveal />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
