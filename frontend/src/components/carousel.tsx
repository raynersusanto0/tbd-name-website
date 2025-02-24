"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: React.ReactNode
  itemWidth?: number
  gap?: number
}

export function Carousel({ children, itemWidth = 300, gap = 20 }: CarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current
      const scrollAmount = itemWidth + gap
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth)

      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const handleScrollEvent = () => {
        setScrollPosition(container.scrollLeft)
      }
      container.addEventListener("scroll", handleScrollEvent)
      return () => container.removeEventListener("scroll", handleScrollEvent)
    }
  }, [])

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start"
            style={{ width: `${itemWidth}px`, marginRight: `${gap}px` }}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
