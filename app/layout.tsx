import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getThemeBootstrapScript } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'EaseWorkflow | Premium AI Automation',
  description: 'EaseWorkflow builds premium AI automation systems, enterprise CRMs, OCR pipelines, and workflow solutions for modern businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="theme-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: getThemeBootstrapScript() }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 transition-colors duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
