import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const artists: Prisma.ArtistCreateInput[] = [
  {
    name: 'poyrazoraman',
    slug: 'poyrazoraman',
    bio: 'Elektronik müzik prodüktörü ve DJ. Minimal ve deep house tarzında üretimler yapıyor.',
    image: '/images/poyrazoraman.jpg',
    socials: {
      spotify: 'https://open.spotify.com/artist/6AcHcYKBjvIpGKWFsfErtD',
    },
  },
  {
    name: 'Hakan Güray',
    slug: 'hakan-guray',
    bio: 'Tekno müzik prodüktörü. Endüstriyel ve dark techno tarzında üretimler yapıyor.',
    image: '/images/hakangüray.jpg',
    socials: {
      spotify: 'https://open.spotify.com/artist/2B2mBRXPcC5ONhdhOrJ0zX',
    },
  },
  {
    name: 'Teymullah',
    slug: 'teymullah',
    bio: 'Pop müzik sanatçısı. Modern ve enerjik şarkılar üretiyor.',
    image: '/images/teymullah.jpg',
    socials: {
      spotify: 'https://open.spotify.com/artist/4bsb7ElO0Euy32G1OyZ4RE',
    },
  },
  {
    name: 'Fatma Polat',
    slug: 'fatma-polat',
    bio: 'Duygusal vokalleriyle tanınan R&B ve soul sanatçısı.',
    image: '/images/fatmapolat.jpg',
    socials: {
      spotify: 'https://open.spotify.com/artist/7J15rRmjDXGyv3ip6CdmeM',
    },
  },
  {
    name: 'zenaly',
    slug: 'zenaly',
    bio: 'Söz yazarı ve rap sanatçısı. Modern ve enerjik beatler.',
    image: '/images/zenaly.jpg',
    socials: {
      spotify: 'https://open.spotify.com/artist/4t8Vci0kIxjhdnS9FlSjDd',
    },
  },
  {
    name: 'Atilla Kaya',
    slug: 'atilla-kaya',
    bio: 'Caz vokali ve besteci. Modern caz tınılarıyla dikkat çekiyor.',
    image: '/images/atillakaya.jpg',
    socials: {
      spotify: 'https://open.spotify.com/artist/55dxJQtMgnMst1oFt98djw',
    },
  },
]

async function main() {
  for (const a of artists) {
    await prisma.artist.upsert({
      where: { slug: a.slug },
      update: {},
      create: a,
    })
  }
  console.log('Seed completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
