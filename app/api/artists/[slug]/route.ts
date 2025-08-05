import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const artist = await prisma.artist.findUnique({ where: { slug: params.slug } })
  if (!artist) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(artist)
}
