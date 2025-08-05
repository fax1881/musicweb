import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export async function GET() {
  const news = await prisma.news.findMany({ orderBy: { publishedAt: 'desc' } })
  return NextResponse.json(news)
}
