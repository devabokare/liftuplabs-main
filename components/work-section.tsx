"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const experiments = [
  {
    title: "Custom Software",
    medium: "Development",
    description: "End-to-end custom software solutions tailored to your unique operational and business needs.",
    span: "col-span-2 row-span-2",
    image: "/solutions/custom_software.png",
  },
  {
    title: "Platform Architecture",
    medium: "System Design",
    description: "Scalable, resilient architecture for robust enterprise applications and high-traffic platforms.",
    span: "col-span-1 row-span-1",
    image: "/solutions/platform_architecture.png",
  },
  {
    title: "Data-Driven Systems",
    medium: "Data Engineering",
    description: "Intelligent systems that leverage vast amounts of data for real-time insights and decision-making.",
    span: "col-span-1 row-span-2",
    image: "/solutions/data_systems.png",
  },
  {
    title: "Analytics Dashboards",
    medium: "Data Visualization",
    description: "Interactive, real-time dashboards to monitor operational metrics and business performance.",
    span: "col-span-1 row-span-1",
    image: "/solutions/analytics_dashboards.png",
  },
  {
    title: "API Integration",
    medium: "Middleware",
    description: "Seamless third-party integrations and robust custom API development for connected ecosystems.",
    span: "col-span-2 row-span-1",
    image: "/solutions/api_integration.png",
  },
  {
    title: "Database Optimization",
    medium: "Architecture",
    description: "High-performance database modeling, advanced query optimization, and secure data storage.",
    span: "col-span-1 row-span-1",
    image: "/solutions/database_optimization.png",
  },
]

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 100, opacity: 0, scale: 0.9 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }
      const parallaxImg = sectionRef.current?.querySelector(".work-parallax-img")
      if (parallaxImg) {
        gsap.to(parallaxImg, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Global Section Background Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl border border-border/5">
        <img 
          src="/services_abstract.png" 
          alt="Services Background" 
          className="w-full h-full object-cover opacity-[0.15] mix-blend-screen scale-110 work-parallax-img"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10">
        {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Solutions</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">SPECIALIZED SERVICES</h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Expertise across custom software development, robust platform architecture, and data-driven systems.
        </p>
      </div>

      {/* Asymmetric grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
      >
        {experiments.map((experiment, index) => (
          <WorkCard key={index} experiment={experiment} index={index} persistHover={index === 0} />
        ))}
      </div>
      </div>
    </section>
  )
}

function WorkCard({
  experiment,
  index,
  persistHover = false,
}: {
  experiment: {
    title: string
    medium: string
    description: string
    span: string
    image: string
  }
  index: number
  persistHover?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const [isScrollActive, setIsScrollActive] = useState(false)

  useEffect(() => {
    if (!persistHover || !cardRef.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      })
    }, cardRef)

    return () => ctx.revert()
  }, [persistHover])

  const isActive = isHovered || isScrollActive

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden",
        experiment.span,
        isActive && "border-accent/60 shadow-2xl shadow-accent/10",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image layer */}
      <img
        src={experiment.image}
        alt={experiment.title}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-1000 z-[-1]",
          isActive ? "scale-105 opacity-80" : "scale-100 opacity-0 grayscale"
        )}
      />

      {/* Dark overlay for text readability */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 transition-opacity duration-500 z-0",
          isActive ? "opacity-90" : "opacity-100"
        )}
      />

      {/* Content */}
      <div className="relative z-10 drop-shadow-md">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
          {experiment.medium}
        </span>
        <h3
          className={cn(
            "mt-3 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight transition-colors duration-300 drop-shadow-xl",
            isActive ? "text-accent" : "text-foreground",
          )}
        >
          {experiment.title}
        </h3>
      </div>

      {/* Description - reveals on hover */}
      <div className="relative z-10 mt-auto pt-12">
        <p
          className={cn(
            "font-mono text-xs text-foreground/90 font-medium leading-relaxed transition-all duration-500 max-w-[280px] drop-shadow-md",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          {experiment.description}
        </p>
      </div>

      {/* Index marker */}
      <span
        className={cn(
          "absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300 z-10",
          isActive ? "text-accent font-bold" : "text-muted-foreground/40",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Corner line */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500 z-10",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>
    </article>
  )
}
