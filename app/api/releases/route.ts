import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export async function GET() {
  const releases = await prisma.release.findMany({ include: { artist: true }, orderBy: { date: 'desc' } })
  return NextResponse.json(releases)
}
