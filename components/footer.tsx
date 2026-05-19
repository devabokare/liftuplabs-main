import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/30 bg-background/40 backdrop-blur-md py-8 px-6 md:px-12 relative z-50 mt-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 LiftUpLabs. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-accent/80 uppercase tracking-widest">
            Built with ❤️ by LiftUpLabs.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="font-mono text-[10px] text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest">
            Privacy Policy
          </Link>
          <Link href="#" className="font-mono text-[10px] text-muted-foreground hover:text-accent transition-colors uppercase tracking-widest">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
