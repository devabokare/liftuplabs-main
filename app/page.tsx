import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { PrinciplesSection } from "@/components/principles-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Capabilities Section */}
      <section id="capabilities" className="relative pt-24 pb-6 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <img 
            src="/services_abstract.png" 
            alt="Capabilities Background" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          {/* Abstract Glows */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none z-10" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none z-10" />
        </div>

        {/* Capabilities Header */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-accent inline-block animate-in slide-in-from-left duration-1000 delay-300 fill-mode-both"></span>
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-medium">01 / Capabilities</span>
          </div>
          <h1 className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-[7.5rem] tracking-tighter uppercase leading-[0.85] text-foreground mb-8">
            Enterprise <br />
            <span className="text-muted-foreground/30 italic">Capabilities & Services</span>
          </h1>
          <p className="max-w-2xl font-mono text-sm md:text-base text-muted-foreground uppercase tracking-widest leading-relaxed">
            We engineer scalable digital ecosystems and robust platforms that empower businesses to innovate and accelerate growth.
          </p>
        </div>
      </section>

      {/* 3. Principles Section */}
      <section id="principles-container" className="relative pt-0 pb-6 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/80 to-background z-10" />
          <img 
            src="/lab_map_abstract.png" 
            alt="Principles Background" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-screen scale-110 animate-[pulse_12s_ease-in-out_infinite]"
          />
          {/* Abstract Glows */}
          <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none z-10 animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-10" />
        </div>

        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <PrinciplesSection />
        </div>
      </section>

      {/* 4. Solutions Section */}
      <section id="solutions" className="relative pt-0 pb-12 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-background/90 z-10" />
          {/* Abstract Glows */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none z-10" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none z-10" />
        </div>

        {/* Content Sections */}
        <div className="relative z-10 space-y-32">
          <div id="work" className="pb-0">
            <WorkSection />
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about-container" className="relative pt-0 pb-12 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/85 to-background z-10" />
          <img 
            src="/about_abstract.png" 
            alt="About Us Background" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-screen scale-110"
          />
          {/* Abstract Glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-10" />
        </div>

        <div className="relative z-10 mt-0">
          <AboutSection />
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact-container" className="relative pt-24 pb-12 overflow-hidden">
        <ContactSection />
      </section>
    </div>
  )
}
