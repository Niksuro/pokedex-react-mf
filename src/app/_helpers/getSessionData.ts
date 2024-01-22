import { getSession } from 'next-auth/react'
/**
 * Function that loads the session data from the cookie
 * @returns returns the session data as a promise
 */
export const getSessionData = async () => {
  const userData: any = await getSession()
  return userData?.user
}
