"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
// import { Button } from "@/components/button"
import { Home, Info, FileText, DollarSign, Mail, LucideIcon } from "lucide-react";

interface NavItem {
  href: string
  label: string
  icon: React.ElementType
}

interface MobileMenuProps {
  navItems: NavItem[]
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 hover:text-gray-900">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md">
          <nav className="flex flex-col p-4">
            {/* {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </Link>
            ))} */}
            <Link
              key = "Home"
              href = "/"
              className = "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              onClick={ () => setIsOpen(false) }
            >
                <Home className="w-5 h-5 mr-2" />
                Home
            </Link>
            <Link
              key = "About"
              href = "/about"
              className = "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              onClick={ () => setIsOpen(false) }
            >
                <Info className="w-5 h-5 mr-2" />
                About
            </Link>
            <Link
              key = "Pricing"
              href = "/pricing"
              className = "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              onClick={ () => setIsOpen(false) }
            >
                <DollarSign className="w-5 h-5 mr-2" />
                Pricing
            </Link>
            <Link
              key = "Contact"
              href = "/contact"
              className = "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              onClick={ () => setIsOpen(false) }
            >
                <Mail className="w-5 h-5 mr-2" />
                Contact
            </Link>
            {/* <Button href="/signup" variant="primary" size="medium" className="mt-4">
              Sign Up
            </Button> */}
          </nav>
        </div>
      )}
    </div>
  )
}
