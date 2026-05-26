"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PrinciplesPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/#principles")
  }, [router])

  return null
}
