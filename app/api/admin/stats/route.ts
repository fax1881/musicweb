import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session || session.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const [artistCount, releaseCount, newsCount] = await Promise.all([
    prisma.artist.count(),
    prisma.release.count(),
    prisma.news.count(),
  ])

  const [recentArtists, recentReleases, recentNews] = await Promise.all([
    prisma.artist.findMany({ take: 5, orderBy: { createdAt: 'desc' }, select: { id: true, name: true, createdAt: true } }),
    prisma.release.findMany({ take: 5, orderBy: { createdAt: 'desc' }, select: { id: true, title: true, createdAt: true } }),
    prisma.news.findMany({ take: 5, orderBy: { publishedAt: 'desc' }, select: { id: true, title: true, publishedAt: true } }),
  ])

  return NextResponse.json({
    counts: {
      artists: artistCount,
      releases: releaseCount,
      news: newsCount,
    },
    recent: {
      artists: recentArtists,
      releases: recentReleases,
      news: recentNews,
    },
  })
}
