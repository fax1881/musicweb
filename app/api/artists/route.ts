import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Disable Next.js route caching to always serve fresh data
export const dynamic = 'force-dynamic'

export async function GET() {
  const artists = await prisma.artist.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(artists)
}
