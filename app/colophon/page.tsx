"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ColophonPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/#colophon")
  }, [router])

  return null
}
