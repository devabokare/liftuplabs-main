"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const { toast } = useToast()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        })
      }
      
      if (formRef.current) {
        const inputs = formRef.current.querySelectorAll('.form-element')
        gsap.from(inputs, {
          x: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-accent/5 to-transparent pointer-events-none opacity-50 blur-[100px]" />

      {/* Section header */}
      <div ref={headerRef} className="mb-20 md:mb-32 relative">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-[1px] bg-accent inline-block"></span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-medium">06 / Connect</span>
        </div>
        <h2 className="font-[var(--font-display)] text-6xl md:text-8xl lg:text-[9rem] tracking-tighter uppercase leading-[0.85] text-foreground">
          Let's Build <br />
          <span className="text-muted-foreground/30 italic">Together</span>
        </h2>
      </div>

      <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        {/* Contact Form */}
        <div className="lg:col-span-7 space-y-12">
          <div className="bg-card/30 backdrop-blur-sm border border-border/30 p-8 md:p-12 relative overflow-hidden group/form">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <form ref={formRef} className="relative z-10 space-y-10" onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const nameInput = form.querySelector('input[type="text"]') as HTMLInputElement;
              const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
              const messageInput = form.querySelector('textarea') as HTMLTextAreaElement;
              
              const name = nameInput?.value || "";
              const email = emailInput?.value || "";
              const message = messageInput?.value || "";
              
              const subject = encodeURIComponent(`Inquiry from ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
              
              const bcc = encodeURIComponent("hariom@liftuplabs.in, deva@liftuplabs.in");
              const mailtoUrl = `mailto:info@liftuplabs.in?bcc=${bcc}&subject=${subject}&body=${body}`;
              
              // Create an anchor and click it for better browser compatibility
              const link = document.createElement('a');
              link.href = mailtoUrl;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              
              toast({
                title: "Message Initiated",
                description: "If your email app didn't open, please ensure you have a default mail client set up.",
              });
            }}>
              <div className="form-element space-y-4 group">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-accent transition-colors flex items-center gap-2">
                  <span className="text-accent/50">01</span> Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="JOHN DOE"
                    required
                    className="w-full bg-transparent border-b border-border/40 py-4 font-mono text-sm md:text-base uppercase tracking-wider focus:border-accent outline-none transition-all duration-300 peer placeholder-muted-foreground/30"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 peer-focus:w-full" />
                </div>
              </div>
              
              <div className="form-element space-y-4 group">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-accent transition-colors flex items-center gap-2">
                  <span className="text-accent/50">02</span> Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="HELLO@LIFTUPLABS.COM"
                    required
                    className="w-full bg-transparent border-b border-border/40 py-4 font-mono text-sm md:text-base uppercase tracking-wider focus:border-accent outline-none transition-all duration-300 peer placeholder-muted-foreground/30"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 peer-focus:w-full" />
                </div>
              </div>
              
              <div className="form-element space-y-4 group">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-accent transition-colors flex items-center gap-2">
                  <span className="text-accent/50">03</span> Message
                </label>
                <div className="relative">
                  <textarea
                    placeholder="TELL US ABOUT YOUR PROJECT"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-border/40 py-4 font-mono text-sm md:text-base uppercase tracking-wider focus:border-accent outline-none transition-all duration-300 resize-none peer placeholder-muted-foreground/30"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 peer-focus:w-full" />
                </div>
              </div>
              
              <div className="form-element pt-4">
                <button type="submit" className="group relative overflow-hidden flex items-center justify-between w-full sm:w-auto gap-8 bg-foreground text-background px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-500">
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-foreground transition-colors duration-500">
                    Send Inquiry <Send size={14} className="opacity-70" />
                  </span>
                  <div className="relative z-10 w-8 h-8 rounded-full border border-background/20 group-hover:border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                    <ArrowRight size={14} className="group-hover:-rotate-45 text-background group-hover:text-background transition-transform duration-500" />
                  </div>
                  {/* Button hover effect */}
                  <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Detailing & Map */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:space-y-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="space-y-5 p-6 border border-border/20 bg-secondary/10 hover:bg-secondary/20 transition-colors duration-500 group/item">
              <div className="flex items-center gap-3 text-accent/70 group-hover/item:text-accent transition-colors">
                <MapPin size={18} />
                <h4 className="font-mono text-[10px] uppercase tracking-[0.3em]">Office Location</h4>
              </div>
              <p className="font-mono text-xs md:text-sm text-foreground/80 leading-relaxed uppercase group-hover/item:text-foreground transition-colors">
                Kumar Meadows B block,<br />
                Amar Srushti, Manjri Bk,<br />
                Pune, Maharashtra 412307
              </p>
            </div>
            
            <div className="space-y-5 p-6 border border-border/20 bg-secondary/10 hover:bg-secondary/20 transition-colors duration-500 group/item">
              <div className="flex items-center gap-3 text-accent/70 group-hover/item:text-accent transition-colors">
                <Mail size={18} />
                <h4 className="font-mono text-[10px] uppercase tracking-[0.3em]">Contact Details</h4>
              </div>
              <div className="space-y-2">
                <a href="mailto:info@liftuplabs.in" className="block font-mono text-xs md:text-sm text-foreground/80 hover:text-accent transition-colors uppercase">
                  info@liftuplabs.in
                </a>
                <a href="tel:+917588421856" className="block font-mono text-xs md:text-sm text-foreground/80 hover:text-accent transition-colors uppercase">
                  +91 7588421856
                </a>
              </div>
            </div>
          </div>

          {/* Abstract Map Link */}
          <a
            href="https://maps.app.goo.gl/p25xmvsuhfddEbrW7"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block group mt-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            
            <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-square overflow-hidden border border-border/30">
              <img
                src="/lab_map_abstract.png"
                alt="Lab Location Map"
                className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
              
              {/* Radar ping effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 z-20">
                <span className="absolute inset-0 bg-accent rounded-full animate-ping opacity-60 duration-1000" />
                <span className="relative block w-3 h-3 bg-accent rounded-full border border-background shadow-[0_0_15px_rgba(var(--color-accent),0.8)]" />
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent/50 z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/50 z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/50 z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent/50 z-20 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
            </div>

            {/* Hover reveal button */}
            <div className="absolute bottom-6 left-6 right-6 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-background/90 backdrop-blur-md px-4 py-3 border border-border flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground">
                  Launch Navigation
                </span>
                <ArrowRight size={14} className="text-accent -rotate-45" />
              </div>
            </div>
          </a>

          {/* Socials - redesigned */}
          <div className="pt-10">
            <div className="flex items-center gap-4 mb-6">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">Social Networks</h4>
              <div className="h-[1px] w-full bg-border/40" />
            </div>
            <div className="flex gap-4">
              {[
                { name: 'LI', url: 'https://www.linkedin.com/company/liftuplabs/posts/?feedView=all', icon: <Linkedin size={18} /> },
                { name: 'IG', url: 'https://www.instagram.com/liftuplabs/?hl=en', icon: <Instagram size={18} /> }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 border border-border/30 bg-card/20 text-foreground/60 hover:text-background hover:bg-accent hover:border-accent transition-all duration-300 group/social relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
