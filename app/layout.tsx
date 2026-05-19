import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  title: "LIFTUPLABS — ERP Solutions",
  description:
    "LiftUpLabs delivers high-performance digital solutions, AI automation, and custom software engineered for scale and precision.",
  icons: {
    icon: "/lf.png",
  },
}

import { SideNav } from "@/components/side-nav"
import { CustomCursor } from "@/components/custom-cursor"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
        <CustomCursor />
        <SideNav />
        <main className="relative z-10 min-h-screen">
          <SmoothScroll>{children}</SmoothScroll>
        </main>
      </body>
    </html>
  )
}
