import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himanshu Tyagi | Data Analyst Portfolio",
  description: "Translating raw numbers into compelling narratives and strategic business insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-accent/20">
        <SiteNav />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
