import { getSession } from "next-auth/react"

/**
 * Check if the user is logged in
 * @returns if the user is logged in
 */
export const checkSession = async () => {
  const token = await getSession()
  if (token) {
    return true
  }
  return false
}
