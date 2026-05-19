"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ChevronUp } from "lucide-react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if device supports hover
    if (typeof window === "undefined" || window.matchMedia("(hover: none)").matches) {
      return
    }
    
    setIsVisible(true)

    // Hide default cursor
    document.documentElement.style.cursor = "none"
    document.body.style.cursor = "none"

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: "power2.out",
        })
      }
    }

    const addHoverEvents = () => {
      const interactables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
      interactables.forEach((el) => {
        ;(el as HTMLElement).style.cursor = "none"
        el.addEventListener("mouseenter", onMouseEnterInteractable)
        el.addEventListener("mouseleave", onMouseLeaveInteractable)
      })
    }
    
    const onMouseEnterInteractable = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          color: "var(--color-accent)",
          duration: 0.3
        })
      }
    }
    
    const onMouseLeaveInteractable = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          color: "currentColor",
          duration: 0.3
        })
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    
    // Add hover events after a short delay to allow DOM to render
    setTimeout(addHoverEvents, 1000)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      document.documentElement.style.cursor = "auto"
      document.body.style.cursor = "auto"
      const interactables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
      interactables.forEach((el) => {
        ;(el as HTMLElement).style.cursor = "auto"
        el.removeEventListener("mouseenter", onMouseEnterInteractable)
        el.removeEventListener("mouseleave", onMouseLeaveInteractable)
      })
    }
  }, [])

  if (!isVisible) return null

  // The arrow image provided by the user is an upward pointing chevron.
  // We'll align the tip of the chevron to the exact mouse coordinates.
  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[100] pointer-events-none -translate-x-1/2 -translate-y-1 text-foreground mix-blend-difference"
      style={{ transformOrigin: "center top" }}
    >
      <ChevronUp size={28} strokeWidth={4} />
    </div>
  )
}
