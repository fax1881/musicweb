#!/usr/bin/env node
const { spawnSync } = require('node:child_process')

const databaseUrl = process.env.DATABASE_URL || ''

if (!databaseUrl || databaseUrl.includes('localhost') || databaseUrl.includes('127.0.0.1')) {
  console.log('[postinstall] Skipping prisma migrate: invalid or local DATABASE_URL')
  process.exit(0)
}

console.log('[postinstall] Running prisma migrate deploy...')
const result = spawnSync('npx', ['prisma', 'migrate', 'deploy'], { stdio: 'inherit', shell: true })
process.exit(result.status || 0)

