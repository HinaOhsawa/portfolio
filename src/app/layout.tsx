import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTopButton from "@/components/PageTopButton";
import { Suspense } from "react";
import Loading from "./loading";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to My Portfolio",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Portfolio",
    description: "Portfolio",
    url: "https://portfolio-hina-ohsawas-projects.vercel.app",
    siteName: "Portfolio",
    images: [
      {
        url: "https://portfolio-hina-ohsawas-projects.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ogp image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "Portfolio",
    images: [
      "https://portfolio-hina-ohsawas-projects.vercel.app/images/og-image.jpg",
    ],
  },
  icons: {
    icon: "/portfolio-favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
