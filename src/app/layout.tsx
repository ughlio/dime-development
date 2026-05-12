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
    "London-based basketball coaching. 1-on-1, group, clinic, and online training with Coach Daniel Maxwell. Dimes don't miss.",
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
        <Navbar />
        <main className="flex-1 pt-[76px]">
          <ScrollReveal />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
