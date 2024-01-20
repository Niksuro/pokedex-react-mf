import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
  const session: any = await getToken({
    req: request,
    secret: process.env.SECRET,
  })
  const expirationDate = new Date(session?.exp * 1000).getTime()
  if (expirationDate < Date.now()) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  if (!session?.user?.token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: '/dashboard/:path*',
}
