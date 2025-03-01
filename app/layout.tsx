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
  title: "Aidan Torrence Photography",
  description: "Professional photography services specializing in natural light and artistic portraits in beautiful locations.",
  openGraph: {
    title: "Aidan Torrence Photography",
    description: "Capturing beautiful moments in breathtaking locations with professional photography services.",
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
    title: "Aidan Torrence Photography",
    description: "Capturing beautiful moments in breathtaking locations with professional photography services.",
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
