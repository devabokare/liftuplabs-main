import { PrinciplesSection } from "@/components/principles-section"

export default function PrinciplesPage() {
  return (
    <div className="relative min-h-screen pt-12 pb-12 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
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

      <div className="relative z-10 mt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <PrinciplesSection />
      </div>
    </div>
  )
}
