import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { revalidatePath } from 'next/cache'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const release = await prisma.release.findUnique({ where: { id: params.id }, include: { artist: true } })
  if (!release) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(release)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || session.user?.role !== 'ADMIN') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const data = await req.json()
    const { title, slug, type, date, coverImage, tracks, artistId } = data
    const release = await prisma.release.update({
      where: { id: params.id },
      data: {
        title,
        slug,
        type,
        date: date ? new Date(date) : undefined,
        coverImage,
        tracks,
        artist: artistId ? { connect: { id: artistId } } : undefined,
      },
    })
    revalidatePath('/releases')
    return NextResponse.json(release)
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || session.user?.role !== 'ADMIN') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    await prisma.release.delete({ where: { id: params.id } })
    revalidatePath('/releases')
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
