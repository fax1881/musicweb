'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function NewArtist() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({ name: '', slug: '', bio: '', image: '' })
  const [error, setError] = useState('')

  if (status === 'loading') return null
  if (!session) redirect('/admin/login')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/admin/artists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) router.push('/admin/artists')
    else {
      const data = await res.json()
      setError(data.error || 'Hata')
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-display text-primary mb-6">Yeni Artist</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-1">Ad</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1">Slug</label>
          <input name="slug" value={form.slug} onChange={handleChange} className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1">Bio</label>
          <textarea name="bio" value={form.bio} onChange={handleChange} className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1">Görsel URL</label>
          <input name="image" value={form.image} onChange={handleChange} className="w-full bg-white/10 border border-white/20 px-3 py-2 rounded" />
        </div>
        <button className="bg-primary text-black px-4 py-2 rounded font-semibold">Kaydet</button>
      </form>
    </div>
  )
}
