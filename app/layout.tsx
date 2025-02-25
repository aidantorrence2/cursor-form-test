import type { Metadata } from "next";
import { Playfair_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aidan Torrence Photography | Free Beach Photo Shoot",
  description: "Professional photography services specializing in natural light and beach photography. Book your free beach photo shoot session.",
  openGraph: {
    title: "Aidan Torrence Photography | Free Beach Photo Shoot",
    description: "Book your free professional beach photo shoot session with Aidan Torrence Photography.",
    siteName: 'Aidan Torrence Photography',
    images: [
      {
        url: '/DSC02848.jpg',
        width: 1200,
        height: 630,
        alt: 'Aidan Torrence Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Beach Photo Shoot | Aidan Torrence Photography",
    description: "Book your free professional beach photo shoot session with Aidan Torrence Photography.",
    images: ['/DSC02848.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Header />
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
