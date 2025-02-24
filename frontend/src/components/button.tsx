import type React from "react"
import Link from "next/link"

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  className?: string
}

export function Button({ href, onClick, children, variant = "primary", size = "medium", className = "" }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantStyles = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-600",
    secondary: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-700",
  }

  const sizeStyles = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
