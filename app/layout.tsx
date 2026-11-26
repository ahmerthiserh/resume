import type { Metadata, Viewport } from "next";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/lib/site";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Ahmad Isah",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: "Ahmad Isah",
  authors: [{ name: "Ahmad Isah", url: SITE_URL }],
  creator: "Ahmad Isah",
  publisher: "Ahmad Isah",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Ahmad Isah",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_NG",
    firstName: "Ahmad",
    lastName: "Isah",
    username: "ahmerthiserh",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@_ahmerth",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Paste the code from Google Search Console into this env var on Vercel to verify ownership.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#030712",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-accent/30 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
