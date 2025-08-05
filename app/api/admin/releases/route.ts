import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { revalidatePath } from 'next/cache'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function GET() {
  const releases = await prisma.release.findMany({
    include: { artist: true },
    orderBy: { date: 'desc' },
  })
  return NextResponse.json(releases)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || session.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const data = await req.json()
    const { title, slug, type, date, coverImage, tracks, artistId } = data
    if (!title || !slug || !type || !artistId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    const release = await prisma.release.create({
      data: {
        title,
        slug,
        type,
        date: date ? new Date(date) : new Date(),
        coverImage,
        tracks,
        artist: { connect: { id: artistId } },
      },
    })
    revalidatePath('/releases')
    return NextResponse.json(release, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
