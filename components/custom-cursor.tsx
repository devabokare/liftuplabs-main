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

    // Hide default cursor globally
    const styleEl = document.createElement("style")
    styleEl.innerHTML = `* { cursor: none !important; }`
    document.head.appendChild(styleEl)

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

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, input, textarea, select, [role="button"]')) {
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            scale: 1.5,
            color: "var(--color-accent)",
            duration: 0.3
          })
        }
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, input, textarea, select, [role="button"]')) {
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            scale: 1,
            color: "currentColor",
            duration: 0.3
          })
        }
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseover", onMouseOver)
    document.addEventListener("mouseout", onMouseOut)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseover", onMouseOver)
      document.removeEventListener("mouseout", onMouseOut)
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl)
      }
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
