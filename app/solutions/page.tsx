import { WorkSection } from "@/components/work-section"
import { SignalsSection } from "@/components/signals-section"

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-12 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
        <img 
          src="/services_abstract.png" 
          alt="Solutions Background" 
          className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Abstract Glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none z-10" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none z-10" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 mt-12 mb-20 md:mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-[1px] bg-accent inline-block animate-in slide-in-from-left duration-1000 delay-300 fill-mode-both"></span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-medium">Capabilities Overview</span>
        </div>
        <h1 className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-[8rem] tracking-tighter uppercase leading-[0.85] text-foreground mb-8">
          Enterprise <br />
          <span className="text-muted-foreground/30 italic">Capabilities</span>
        </h1>
        <p className="max-w-2xl font-mono text-sm md:text-base text-muted-foreground uppercase tracking-widest leading-relaxed">
          We engineer scalable digital ecosystems and robust platforms that empower businesses to innovate and accelerate growth.
        </p>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 space-y-32">
        <SignalsSection />
        <div className="pb-12">
          <WorkSection />
        </div>
      </div>
    </div>
  )
}
