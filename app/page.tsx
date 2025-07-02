'use client'
import { useUserStore } from "@/store/UserStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { updateEmailStore } = useUserStore()
  const router = useRouter()

  useEffect(() => {
    const email = localStorage.getItem('email')
    if (email) {
      updateEmailStore(email)
      router.push('/dashboard')
    } else {
      router.push('/login')
    }
  }, [])

  return (
    <></>
  )
}
