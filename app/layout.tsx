import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPage from "./navbar/page";
import FooterPage from "./footer/page";
import NewsletterPage from "./newsletter/page"; // ✅ Import the initializer
import GSAPInitializer from "@/component/gsap/GSAPInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GSAPInitializer/> {/* ✅ This will run on client and register plugins globally */}
        <NavbarPage />
        {children}
        <NewsletterPage />
        <FooterPage />
      </body>
    </html>
  );
}
