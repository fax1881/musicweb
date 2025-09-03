import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { revalidatePath } from 'next/cache'
import { authOptions } from '@/lib/auth'

const prisma = new PrismaClient()

export async function GET() {
  const artists = await prisma.artist.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(artists)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || session.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await req.json()
    const { name, slug, bio, image, socials } = data

    if (!name || !slug) {
      return NextResponse.json({ error: 'name and slug required' }, { status: 400 })
    }

    const artist = await prisma.artist.create({
      data: {
        name,
        slug,
        bio,
        image,
        socials,
      },
    })
    revalidatePath('/artists')
    return NextResponse.json(artist, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
