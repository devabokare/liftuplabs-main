"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#hero", label: "Index" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#principles", label: "Principles" },
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function SideNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sections = ["hero", "capabilities", "principles", "solutions", "about", "contact"]
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.2, rootMargin: "-10% 0px -50% 0px" }
      )
      observer.observe(el)
      return { observer, el }
    })

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el)
      })
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    const targetId = href.startsWith("#") ? href : href.substring(1)
    const cleanId = targetId.startsWith("#") ? targetId : `#${targetId}`
    
    // @ts-expect-error - lenis is on window
    if (typeof window !== "undefined" && window.lenis) {
      // @ts-expect-error - lenis is on window
      window.lenis.scrollTo(cleanId, { duration: 1.5 })
    } else {
      const element = document.querySelector(cleanId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      {/* Floating Menu Toggle & Logo */}
      <div className="fixed top-8 left-8 z-[60] flex items-center gap-3">
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center bg-background/80 backdrop-blur-md border border-border/20 px-4 py-2 hover:border-accent transition-all duration-300 h-[38px]"
        >
          <img
            src="/liftuplabs logo.png"
            alt="LIFTUPLABS"
            className="h-5 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 z-[70] bg-background/60 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Sidebar Drawer */}
      <nav
        className={cn(
          "fixed left-0 top-0 z-[80] h-screen w-80 bg-background border-r border-border/10 shadow-2xl transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-8 text-muted-foreground hover:text-accent transition-colors"
        >
          <X size={24} />
        </button>

        {/* Logo Section */}
        <div className="p-8 mt-4">
          <Link href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="group block">
            <div className="flex items-center">
              <div className="w-40 h-12 overflow-hidden shrink-0">
                <img
                  src="/liftuplabs logo.png"
                  alt="LIFTUPLABS"
                  className="w-full h-full object-contain object-left opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-4 py-8 flex flex-col gap-2">
          {navItems.map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "")
            return (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={cn(
                  "flex items-center gap-4 px-4 py-4 group transition-all duration-300 rounded-sm",
                  isActive ? "bg-accent/10" : "hover:bg-foreground/5"
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-all duration-300",
                    isActive ? "bg-accent scale-150" : "bg-muted-foreground/40 group-hover:bg-foreground/60"
                  )}
                />
                <span
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-200",
                    isActive ? "text-accent" : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  {label}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-border/5">
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="block w-full border border-foreground/10 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-center text-muted-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            Get In Touch
          </Link>
          <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground/40 leading-relaxed">
            © 2025 LIFTUPLABS<br />
            Built with Precision
          </p>
        </div>
      </nav>
    </>
  )
}
