"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrambleTextOnHover } from "@/components/scramble-text"

gsap.registerPlugin(ScrollTrigger)

const TEAM_MEMBERS = [
  {
    name: "Hariom Sonawane",
    role: "CEO & MD",
    expertise: "Strategic Vision",
    link: "https://www.linkedin.com/in/theharry/",
    image: "/team/hariom.png",
    bio: "With deep expertise in technical leadership and business strategy, Hariom drives the company's vision and ensures sustainable growth across all digital frontiers.",
    experience: "5+ YEARS IN TECH LEADERSHIP",
    linkedin: "https://www.linkedin.com/in/theharry/",
    portfolio: "#",
    instagram: "https://www.instagram.com/harryisosm/?hl=en"
  },
  {
    name: "Deva Bokare",
    role: "CTO (Chief Technology Officer)",
    expertise: "Technology Strategy & Vision",
    link: "https://deva-portfolio-master.vercel.app/",
    image: "/team/db.jpg",
    bio: "Deva spearheads the technical architecture, ensuring robust, scalable, and cutting-edge solutions across all our digital platforms and client projects.",
    experience: "3+ YEARS IN SOFTWARE ARCHITECTURE",
    linkedin: "https://www.linkedin.com/in/deva-bokare",
    portfolio: "https://deva-portfolio-master.vercel.app/",
    instagram: "#"
  },
  {
    name: "Sudhanshu Lawhare",
    role: "CTA (Chief Technology Architect)",
    expertise: "Technical Architecture",
    link: "https://portfolio-shu.vercel.app/",
    image: "/team/shu.jpg",
    bio: "Sudhanshu is at the forefront of our AI initiatives, designing intelligent automation workflows and machine learning systems that transform operations.",
    experience: "3+ YEARS IN AI & ML",
    linkedin: "https://www.linkedin.com/in/sudhanshu-lawhare/",
    portfolio: "https://portfolio-shu.vercel.app/",
    instagram: "https://www.instagram.com/su.dhansh.u/?hl=en"
  },
  {
    name: "Prathmesh jadhav",
    role: "COO (Chief Operating Officer)",
    expertise: "Operations & Scale",
    link: "#",
    image: "/team/prathamesh.png",
    bio: "Prathmesh oversees daily operations, streamlining processes to ensure maximum efficiency, optimal team performance, and seamless project delivery.",
    experience: "9+ YEARS IN OPERATIONS",
    linkedin: "#",
    portfolio: "#",
    instagram: "https://www.instagram.com/the_prathmesh_21/?hl=en"
  },
  {
    name: "Shivam Sonawane",
    role: "Marketing (Head of Social Media)",
    expertise: "Marketing",
    link: "#",
    image: "/team/shivam.png",
    bio: "Shivam leads our marketing strategies, building strong brand presence, forging valuable partnerships, and driving customer engagement globally.",
    experience: "5+ YEARS IN MARKETING",
    linkedin: "https://www.linkedin.com/in/shivam-sonwane-2005aa237/",
    portfolio: "#",
    instagram: "https://www.instagram.com/shivam.infra.tech/?hl=en"
  }
];

const ADVISORY_BOARD = [
  {
    name: "Mr. Santosh Dhakane",
    role: "President & MD (Adroit group & SMTAUTO Solutions LLP)",
    expertise: "Business",
    link: "https://www.linkedin.com/in/santosh-dhakane-3894a224/",
    image: "/team/santosh.jpg",
    bio: "Santosh Dhakane is a visionary entrepreneur who rose from a humble background to build 5–6 successful ventures across diverse industries. Starting his career as a junior engineer, he has led projects in over 30 countries through innovation, determination, and strategic leadership.",
    experience: "15+ YEARS IN BUSINESS",
    linkedin: "https://www.linkedin.com/in/santosh-dhakane-3894a224/",
  },
  {
    name: "Dr. Anand Kachru Pathrikar",
    role: "Director(Shri Shivaji Institute of Engineering and Management Studies)",
    expertise: "Education & Management",
    link: "#",
    image: "/team/anand.jpeg",
    bio: "Dr. Anand Kachru Pathrikar is the Director of Shri Shivaji Institute of Engineering and Management Studies with over 24 years of experience in engineering education and academic leadership. He holds a Ph.D. in Electronics Engineering and has published 22 international research papers and one book, reflecting his strong commitment to academic excellence and research.",
    experience: "24+ YEARS IN EDUCATION & MANAGEMENT",
    linkedin: "#"
  },
  {
    name: "Prof. Ajay S. Wadhawe",
    role: "Head of Electrical and Electronics Engineering Dept",
    expertise: "Electrical | Electronics | Instrumentation Engineering Professional",
    link: "#",
    image: "/team/Wadhawe.jpeg",
    bio: "Prof. Ajay S. Wadhawe is a senior Electrical, Electronics, and Instrumentation Engineering professional with over 19 years of experience in industry and academia. He specializes in industrial automation, AI, IoT, robotics, and research, and currently serves as Head of the Electrical and Electronics Engineering Department at Shri Shivaji College of Engineering.",
    experience: "19+ Years (13+ years in academic leadership and 6 years in industrial Electrical & Instrumentation engineering)",
    linkedin: "#"
  }
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [selectedMember, setSelectedMember] = useState<(typeof TEAM_MEMBERS[0] | typeof ADVISORY_BOARD[0]) & { instagram?: string; portfolio?: string } | null>(null)
  const [shareStatus, setShareStatus] = useState<string>("")

  useEffect(() => {
    // Check if there is a member parameter in query string on mount
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const memberName = params.get("member");
      if (memberName) {
        const decodedName = decodeURIComponent(memberName).toLowerCase();
        const found = TEAM_MEMBERS.find(m => m.name.toLowerCase() === decodedName) || 
                      ADVISORY_BOARD.find(m => m.name.toLowerCase() === decodedName);
        if (found) {
          setSelectedMember(found);
          // Scroll to the about section
          setTimeout(() => {
            const el = document.getElementById("about");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 500);
        }
      }
    }
  }, []);

  useEffect(() => {
    setShareStatus("")
    if (selectedMember) {
      document.body.style.overflow = "hidden"
      // @ts-expect-error - lenis exposed to window
      if (typeof window !== "undefined" && window.lenis) window.lenis.stop()
      
      // Update URL with selected member
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.set("member", selectedMember.name);
        window.history.replaceState({}, "", url.toString());
      }
    } else {
      document.body.style.overflow = ""
      // @ts-expect-error - lenis exposed to window
      if (typeof window !== "undefined" && window.lenis) window.lenis.start()
      
      // Remove member from URL if closed
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        if (url.searchParams.has("member")) {
          url.searchParams.delete("member");
          window.history.replaceState({}, "", url.toString());
        }
      }
    }
    return () => {
      document.body.style.overflow = ""
      // @ts-expect-error - lenis exposed to window
      if (typeof window !== "undefined" && window.lenis) window.lenis.start()
    }
  }, [selectedMember])

  const handleShareProfile = () => {
    if (!selectedMember) return;
    
    const shareUrl = `${window.location.origin}${window.location.pathname}?member=${encodeURIComponent(selectedMember.name)}#about`;
    
    const fallbackCopy = (text: string) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.width = "2em";
      textArea.style.height = "2em";
      textArea.style.padding = "0";
      textArea.style.border = "none";
      textArea.style.outline = "none";
      textArea.style.boxShadow = "none";
      textArea.style.background = "transparent";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setShareStatus("Copied!");
        } else {
          setShareStatus("Failed to copy");
        }
      } catch (err) {
        setShareStatus("Failed to copy");
      }
      document.body.removeChild(textArea);
      setTimeout(() => setShareStatus(""), 2000);
    };

    if (navigator.share) {
      navigator.share({
        title: `${selectedMember.name} - ${selectedMember.role}`,
        text: `Check out ${selectedMember.name}'s professional profile at LiftUpLabs!`,
        url: shareUrl,
      })
      .then(() => {
        setShareStatus("Shared!");
        setTimeout(() => setShareStatus(""), 2000);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          fallbackCopy(shareUrl);
        }
      });
    } else {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl)
          .then(() => {
            setShareStatus("Copied!");
            setTimeout(() => setShareStatus(""), 2000);
          })
          .catch(() => {
            fallbackCopy(shareUrl);
          });
      } else {
        fallbackCopy(shareUrl);
      }
    }
  };

  useEffect(() => {
    // Entrance animations removed as requested to keep the section static.
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative pt-6 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / About</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight uppercase">OUR MISSION</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-7 animate-block">
          <p className="font-[var(--font-bebas)] text-3xl md:text-5xl leading-tight tracking-tight mb-12 text-foreground/90">
            LiftUpLabs is a technology powerhouse dedicated to engineering the future of digital interaction.
          </p>

          <div className="space-y-8 font-mono text-sm text-muted-foreground leading-relaxed">
            <p>
              We specialize in building modern digital solutions that bridge the gap between complex technology and human intuition. Our expertise spans from high-performance web applications to autonomous AI automation systems.
            </p>
            <p>
              Based on our deep understanding of the digital landscape, we help businesses transition into the next era of automation and 3D visualization.
            </p>
            <p>
              Our team focuses on a highly curated tech stack including <span className="text-accent">Next.js</span>, <span className="text-accent">TypeScript</span>, <span className="text-accent">Three.js</span>, and <span className="text-accent">AI orchestration</span>.
            </p>
            <p>
              Whether it's manufacturing, logistics, or healthcare, we deliver custom software products designed to scale without limits.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-block overflow-hidden rounded-sm min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="absolute inset-0 border border-border/20 z-20 pointer-events-none" />
          <img
            src="/about_abstract.png"
            alt="Abstract Structure"
            className="w-full h-full object-cover parallax-img brightness-75 contrast-125"
          />
        </div>
      </div>

      <div className="mt-20 animate-block">
        <ScrambleTextOnHover
          as="h3"
          text="CORE DOMAINS OF EXPERTISE"
          className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight mb-12 cursor-default"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ScrambleTextOnHover
              as="h4"
              text="ERP Solutions"
              className="font-mono text-sm font-semibold text-accent mb-4 uppercase tracking-widest cursor-default"
            />
            <ul className="space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Odoo ERP implementation & customization</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Tally Solutions integration</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Finance & accounting automation</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Inventory and HR modules</li>
            </ul>
          </div>
          <div>
            <ScrambleTextOnHover
              as="h4"
              text="Cloud Solutions"
              className="font-mono text-sm font-semibold text-accent mb-4 uppercase tracking-widest cursor-default"
            />
            <ul className="space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Cloud-native applications</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Infrastructure architecture</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Deployment automation</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Multi-tenant SaaS platforms</li>
            </ul>
          </div>
          <div>
            <ScrambleTextOnHover
              as="h4"
              text="Education Technology (EdTech)"
              className="font-mono text-sm font-semibold text-accent mb-4 uppercase tracking-widest cursor-default"
            />
            <ul className="space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Educational ERP Systems</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Academic Management</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Student Information Systems</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Exam & Attendance Management</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Learning Analytics</li>
            </ul>
          </div>
          <div>
            <ScrambleTextOnHover
              as="h4"
              text="Research & Development (R&D)"
              className="font-mono text-sm font-semibold text-accent mb-4 uppercase tracking-widest cursor-default"
            />
            <ul className="space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Custom software research</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Prototype development</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Product innovation</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Technology validation</li>
            </ul>
          </div>
          <div>
            <ScrambleTextOnHover
              as="h4"
              text="Product Engineering"
              className="font-mono text-sm font-semibold text-accent mb-4 uppercase tracking-widest cursor-default"
            />
            <ul className="space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> End-to-end product development</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> SaaS architecture</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Modular software design</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Scalable system engineering</li>
            </ul>
          </div>
          <div>
            <ScrambleTextOnHover
              as="h4"
              text="Workflow Automation"
              className="font-mono text-sm font-semibold text-accent mb-4 uppercase tracking-widest cursor-default"
            />
            <ul className="space-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Administrative process automation</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Business workflows</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Approval systems</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Operational dashboards</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-border/20 pt-16 animate-block">
        <div>
          <ScrambleTextOnHover
            as="h3"
            text="SPECIALIZED SERVICES"
            className="font-[var(--font-bebas)] text-3xl tracking-tight mb-8 cursor-default"
          />
          <ul className="space-y-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Custom Software Development</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Platform Architecture</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Data-Driven Systems</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Analytics Dashboards</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> API Development & Integration</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Database Design & Optimization</li>
          </ul>
        </div>
        <div>
          <ScrambleTextOnHover
            as="h3"
            text="INDUSTRY FOCUS"
            className="font-[var(--font-bebas)] text-3xl tracking-tight mb-8 cursor-default"
          />
          <ul className="space-y-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Schools and Colleges</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Universities</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Coaching Institutes</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Educational Organizations</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Small & Medium Enterprises (SMEs)</li>
          </ul>
        </div>
        <div>
          <ScrambleTextOnHover
            as="h3"
            text="TECHNOLOGY STRENGTHS"
            className="font-[var(--font-bebas)] text-3xl tracking-tight mb-8 cursor-default"
          />
          <ul className="space-y-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> SaaS Development</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Cloud Infrastructure</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> ERP Customization</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Scalable Systems Design</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Business Automation</li>
          </ul>
        </div>
      </div>

      <div className="mt-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-[2px] bg-accent inline-block"></span>
          <ScrambleTextOnHover
            as="h2"
            text="THE TEAM"
            className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight cursor-default"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-8 team-grid">
          {TEAM_MEMBERS.map((member, i) => (
            <button
              key={i}
              onClick={() => setSelectedMember(member)}
              className="group relative bg-secondary/5 border border-border/10 hover:border-accent/40 backdrop-blur-sm p-8 rounded-2xl hover:bg-secondary/10 transition-all duration-500 block text-left team-card shadow-lg hover:shadow-accent/5 w-full sm:w-[calc((100%-32px)/2)] lg:w-[calc((100%-64px)/3)]"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-border/25 group-hover:border-accent transition-all duration-500 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-3 block">
                {member.expertise}
              </span>
              <h4 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-wide mb-1 group-hover:text-accent transition-colors flex items-center gap-2 uppercase">
                {member.name}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 text-xl">→</span>
              </h4>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 border-b border-border/10 pb-4">
                {member.role}
              </p>
              <p className="font-sans text-xs text-foreground/75 leading-relaxed font-light normal-case tracking-normal line-clamp-2">
                {member.bio}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-[2px] bg-accent inline-block"></span>
          <ScrambleTextOnHover
            as="h2"
            text="ADVISORY BOARD"
            className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight cursor-default"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-8 advisory-grid">
          {ADVISORY_BOARD.map((member, i) => (
            <button
              key={i}
              onClick={() => setSelectedMember(member)}
              className="group relative bg-secondary/5 border border-border/10 hover:border-accent/40 backdrop-blur-sm p-8 rounded-2xl hover:bg-secondary/10 transition-all duration-500 block text-left advisory-card shadow-lg hover:shadow-accent/5 w-full sm:w-[calc((100%-32px)/2)]"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-border/25 group-hover:border-accent transition-all duration-500 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-3 block">
                {member.expertise}
              </span>
              <h4 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-wide mb-1 group-hover:text-accent transition-colors flex items-center gap-2 uppercase">
                {member.name}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 text-xl">→</span>
              </h4>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4 border-b border-border/10 pb-4">
                {member.role}
              </p>
              <p className="font-sans text-xs text-foreground/75 leading-relaxed font-light normal-case tracking-normal line-clamp-2">
                {member.bio}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* <div className="mt-32 mb-16">
          <h3 className="font-[var(--font-bebas)] text-3xl tracking-tight mb-8">BY THE NUMBERS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <p className="font-[var(--font-bebas)] text-4xl text-accent">50+</p>
              <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Solutions Delivered</p>
            </div>
            <div className="space-y-1">
              <p className="font-[var(--font-bebas)] text-4xl text-accent">12</p>
              <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Countries Served</p>
            </div>
            <div className="space-y-1">
              <p className="font-[var(--font-bebas)] text-4xl text-accent">99.9%</p>
              <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">System Uptime</p>
            </div>
            <div className="space-y-1">
              <p className="font-[var(--font-bebas)] text-4xl text-accent">24/7</p>
              <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">AI Monitoring</p>
            </div>
          </div>
        </div>*/}


      {selectedMember && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start md:items-center justify-center p-4 md:p-6 opacity-100 transition-opacity overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedMember(null)
          }}
          data-lenis-prevent="true"
        >
          <div
            className="bg-card text-card-foreground border border-border shadow-2xl rounded-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative animate-in fade-in zoom-in-95 duration-300 my-8 md:my-auto shrink-0"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            {/* Left Side - Image */}
            <div className="w-full md:w-2/5 bg-muted/20 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-border/40">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
              <div className="uppercase tracking-widest text-accent text-xs font-mono font-semibold mb-2">
                {selectedMember.expertise}
              </div>
              <h3 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight mb-2">
                {selectedMember.name}
              </h3>
              <div className="text-muted-foreground uppercase tracking-widest font-mono text-[10px] mb-1">
                {selectedMember.role}
              </div>
              <div className="text-muted-foreground uppercase tracking-widest font-mono text-[10px] mb-8">
                {selectedMember.experience}
              </div>

              <h4 className="text-lg font-semibold mb-4 border-b border-border/40 pb-2">Professional Bio</h4>
              <p className="text-muted-foreground leading-relaxed mb-auto">
                {selectedMember.bio}
              </p>

              <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between border-t border-border/40 pt-6 gap-6 md:gap-0">
                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                  {selectedMember.linkedin && (
                    <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                      LinkedIn
                    </a>
                  )}
                  {selectedMember.portfolio && (
                    <a href={selectedMember.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                      Portfolio
                    </a>
                  )}
                  {selectedMember.instagram && (
                    <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      Instagram
                    </a>
                  )}
                  <button
                    onClick={handleShareProfile}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium cursor-pointer"
                  >
                    {shareStatus === "Copied!" || shareStatus === "Shared!" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                    )}
                    {shareStatus || "Share Profile"}
                  </button>
                </div>
                <button onClick={() => setSelectedMember(null)} className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors md:ml-auto">
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
