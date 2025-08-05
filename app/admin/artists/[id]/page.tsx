'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

interface Artist {
  id: string
  name: string
  slug: string
  bio?: string
  image?: string
  socials?: any
}

export default function EditArtist() {
  const params = useParams<{ id: string }>()
  const { data: session, status } = useSession()
  const router = useRouter()
  const [artist, setArtist] = useState<Artist | null>(null)
  const [form, setForm] = useState({ name: '', slug: '', bio: '', image: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const id = params.id

  useEffect(() => {
    fetch(`/api/admin/artists/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtist(data)
        setForm({ name: data.name || '', slug: data.slug || '', bio: data.bio || '', image: data.image || '' })
        setLoading(false)
      })
  }, [id])

  if (status === 'loading' || loading) return <p>Yükleniyor...</p>
  if (!session) redirect('/admin/login')
  if (!artist) return <p>Sanatçı bulunamadı.</p>

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch(`/api/admin/artists/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) router.push('/admin/artists')
    else {
      const data = await res.json()
      setError(data.error || 'Hata')
    }
  }

  const handleDelete = async () => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return
    const res = await fetch(`/api/admin/artists/${id}`, { method: 'DELETE' })
    if (res.ok) router.push('/admin/artists')
    else setError('Silme işlemi başarısız')
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-display text-primary">Artist Düzenle</h1>
        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Sil</button>
      </div>
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
