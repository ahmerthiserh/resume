import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ahmad Isah — Full-Stack Software Engineer",
  metadataBase: new URL("https://ahmadisah.vercel.app"),
  openGraph: {
    title: "Ahmad Isah — Full-Stack Software Engineer",
    description: "Mobile apps, backend services and payment systems with Flutter, Node.js and Laravel.",
    type: "website",
  },
  description:
    "Full-stack software engineer building mobile apps (Flutter), backend services (Node.js, Laravel) and payment systems.",
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
      </body>
    </html>
  );
}
