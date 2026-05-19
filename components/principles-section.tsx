"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  const principles = [
    {
      number: "01",
      titleParts: [
        { text: "ERP ", highlight: false },
        { text: "SOLUTIONS", highlight: true },
      ],
      description: "Implementing custom ERPs, integrating Tally, and automating finance, inventory, and HR modules.",
      align: "left",
    },
    {
      number: "02",
      titleParts: [
        { text: "CLOUD ", highlight: false },
        { text: "SOLUTIONS", highlight: true },
      ],
      description: "Building resilient cloud-native applications, automated deployments, and multi-tenant platforms.",
      align: "right",
    },
    {
      number: "03",
      titleParts: [
        { text: "PRODUCT", highlight: true },
        { text: " ENGINEERING", highlight: false },
      ],
      description: "Delivering end-to-end SaaS architecture, modular design, and highly scalable system engineering.",
      align: "left",
    },
    {
      number: "04",
      titleParts: [
        { text: "RESEARCH ", highlight: false },
        { text: "& DEVELOPMENT", highlight: true },
      ],
      description: "Driving product innovation, custom software research, and rapid prototype validation.",
      align: "right",
    },
    {
      number: "05",
      titleParts: [
        { text: "WORKFLOW", highlight: true },
        { text: " AUTOMATION", highlight: false },
      ],
      description: "Streamlining business processes with customized administrative automation and operational dashboards.",
      align: "left",
    },
    {
      number: "06",
      titleParts: [
        { text: "EDUCATION", highlight: true },
        { text: " TECHNOLOGY", highlight: false },
      ],
      description: "Empowering institutions with Educational ERPs, academic management, and advanced learning analytics.",
      align: "right",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Each principle slides in from its aligned side
      const articles = principlesRef.current?.querySelectorAll("article")
      articles?.forEach((article, index) => {
        const isRight = principles[index].align === "right"
        gsap.from(article, {
          x: isRight ? 80 : -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="principles" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section header */}
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Expertise</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight uppercase">OUR CORE DOMAINS</h2>
      </div>

      {/* Staggered principles */}
      <div ref={principlesRef} className="space-y-24 md:space-y-32">
        {principles.map((principle, index) => (
          <article
            key={index}
            className={`flex flex-col ${principle.align === "right" ? "items-end text-right" : "items-start text-left"
              }`}
          >
            {/* Annotation label */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {principle.number} / {principle.titleParts[0].text.split(" ")[0]}
            </span>

            <h3 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none">
              {principle.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>
                    {part.text}
                  </HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
              {principle.description}
            </p>

            {/* Decorative line */}
            <div className={`mt-8 h-[1px] bg-border w-24 md:w-48 ${principle.align === "right" ? "mr-0" : "ml-0"}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
