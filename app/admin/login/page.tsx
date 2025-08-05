'use client'

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/admin",
    })
    if (res?.error) setError("Giriş başarısız. Bilgileri kontrol edin.")
    else if (res?.ok) window.location.href = res.url ?? "/admin"
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary text-white p-4">
      <form onSubmit={handleSubmit} className="bg-black/80 p-8 rounded-lg w-full max-w-md space-y-6 border border-primary/30">
        <h1 className="text-2xl font-display text-primary text-center">Admin Giriş</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div>
          <label className="block mb-1" htmlFor="email">E-posta</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 focus:border-primary focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 focus:border-primary focus:outline-none"
            required
          />
        </div>
        <button type="submit" className="w-full bg-primary text-black font-bold py-2 rounded hover:bg-primary-dark">Giriş Yap</button>
      </form>
    </div>
  )
}
