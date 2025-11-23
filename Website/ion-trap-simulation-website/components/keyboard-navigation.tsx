"use client"

import { useEffect } from "react"

export function KeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const scrollAmount = 100 // pixels to scroll for all keys

      switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
        case " ": // Space
        case "PageDown":
          event.preventDefault()
          window.scrollBy({ top: scrollAmount, behavior: "smooth" })
          break

        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp":
          event.preventDefault()
          window.scrollBy({ top: -scrollAmount, behavior: "smooth" })
          break

        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return null
}
