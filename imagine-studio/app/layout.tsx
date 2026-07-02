import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Google Sans Flex — the ONLY typeface. Variable font; we only use 300/400/500/600.
const googleSans = localFont({
  src: "./fonts/google-sans-flex.ttf",
  variable: "--font-google-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fashion Studio | AI Fashion Photography for Catalog & Editorial Shoots",
  description:
    "Create realistic AI fashion photography for catalog and editorial shoots. Choose a model, dress the look, and generate images or video in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={googleSans.variable}>
      <body>{children}</body>
    </html>
  );
}
