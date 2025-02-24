import type React from "react"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home, Info, FileText, DollarSign, Mail, LucideIcon } from "lucide-react";
import { MobileMenu } from "@/components/mobile-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S&N Software",
  description: "Pandu Web Landing Page",
};

interface NavLinkProps {
  href: string
  children: React.ReactNode
  icon: LucideIcon
}

function NavLink({ href, children, icon: Icon }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={"flex items-center px-4 py-2 rounded-md transition-colors text-gray-600 hover:bg-gray-200 hover:text-gray-900"}
    >
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </Link>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky  top-0 z-10 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-2xl font-bold text-gray-900">
                    S&N Software
                  </Link>
                </div>
                <nav className="hidden md:flex space-x-4">
                  <NavLink href="/" icon={Home}>
                    Home
                  </NavLink>
                  <NavLink href="/about" icon={Info}>
                    About
                  </NavLink>
                  <NavLink href="/pricing" icon={DollarSign}>
                    Pricing
                  </NavLink>
                  <NavLink href="/contact" icon={Mail}>
                    Contact
                  </NavLink>
                </nav>
                <MobileMenu />
              </div>
            </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
