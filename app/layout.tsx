import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ganesh Enterprises | Strong Fabrication. Reliable Work.",
  description: "Ganesh Enterprises provides gym equipment fabrication, godown construction, welding, and custom iron doors/windows. Reliable, strong, and professional fabrication services.",
  keywords: [
    "fabrication",
    "gym equipment",
    "godown construction",
    "welding",
    "iron doors",
    "iron windows",
    "Ganesh Enterprises",
    "custom fabrication",
    "industrial services"
  ],
  openGraph: {
    title: "Ganesh Enterprises",
    description: "Strong Fabrication. Reliable Work.",
    url: "https://ganesh-enterprises.com",
    siteName: "Ganesh Enterprises",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/ganesha.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col h-full  text-white`}
      >
        <Navbar />
        <Toaster richColors position="top-center" />
        <main className="flex-1 flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
