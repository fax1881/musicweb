import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Middleware to protect /admin and /api/admin routes
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Only run for admin paths (see matcher below)
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  // If no valid session or not ADMIN role, redirect to login (or 404 for API)
  if (!token || token.role !== 'ADMIN') {
    if (pathname.startsWith('/api')) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
    }
    const loginUrl = new URL('/admin/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  // Allow request to proceed
  return NextResponse.next()
}

// Apply middleware only to these paths
export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
