import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function GET() {
  const news = await prisma.news.findMany({ orderBy: { publishedAt: 'desc' } })
  return NextResponse.json(news)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || session.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await req.json()
    const { title, slug, content, publishedAt } = data

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const item = await prisma.news.create({
      data: {
        title,
        slug,
        content,
        publishedAt: publishedAt ? new Date(publishedAt) : undefined,
      },
    })

    // Revalidate News page
    revalidatePath('/news')

    return NextResponse.json(item, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
