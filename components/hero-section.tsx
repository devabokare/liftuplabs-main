"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    // @ts-expect-error - lenis on window
    if (typeof window !== "undefined" && window.lenis) {
      // @ts-expect-error - lenis on window
      window.lenis.scrollTo(target, { duration: 1.5 })
    } else {
      const element = document.querySelector(target)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      // Intro animations
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2
        })
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scale: 1.2,
          opacity: 0,
          duration: 2,
          ease: "power3.out",
        })

        // Parallax on scroll
        gsap.to(imageRef.current, {
          yPercent: 30,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
      }

      gsap.to(contentRef.current, {
        y: -150,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="/hero_abstract.png" 
          alt="Abstract 3D Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent -rotate-90 origin-left block whitespace-nowrap drop-shadow-md">
          LIFTUPLABS
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full max-w-7xl mx-auto relative z-10">
        <SplitFlapAudioProvider>
          <div className="relative">
            <SplitFlapText text="LIFTUPLABS" speed={80} />
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        <h2 className="font-[var(--font-bebas)] text-foreground/80 text-[clamp(1.5rem,4vw,3rem)] mt-6 tracking-wide drop-shadow-lg">
          Modern Digital & ERP Solutions
        </h2>

        <p className="mt-8 max-w-lg font-mono text-sm md:text-base text-muted-foreground/90 leading-relaxed drop-shadow-md">
          We build high-performance websites, AI-driven automation systems, and custom software products. From interactive 3D experiences to complex SaaS dashboards, we turn code into value.
        </p>

        <div className="mt-12 flex items-center gap-8">
          <Link
            href="#solutions"
            onClick={(e) => handleScroll(e, "#solutions")}
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-mono text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-background transition-colors duration-300">
              <ScrambleTextOnHover text="View Experiments" as="span" duration={0.6} />
              <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
