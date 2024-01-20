'use client'
import { useRouter } from 'next/navigation'
import HomeContainer from '../_components/organisms/HomeContainer/HomeContainer'
import { useState } from 'react'
import Spinner from '../_components/atoms/Spinner/Spinner'
import { checkSession } from '../_helpers/checkSession'

export default function Home() {
  /**
   * Router instance to manage the routes
   */
  const router = useRouter()
  /**
   * Loading state to show the loading screen
   */
  const [loading, setLoading] = useState(true)
  /**
   * Check if the user has a session and redirect if it's active
   */
  const checkSessionActive = async () => {
    const isActive = await checkSession()
    if (isActive) {
      router.push('/dashboard')
      return
    }
    setLoading(false)
  }
  checkSessionActive()
  return (
    <>
      {loading && <Spinner />}
      <HomeContainer />
    </>
  )
}
