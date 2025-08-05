'use client'

import { SessionProvider } from "next-auth/react"
import React from "react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-secondary text-white flex">
        {/* Sidebar placeholder */}
        <aside className="w-56 bg-black/90 border-r border-primary/30 p-4 hidden md:block">
          <h1 className="text-primary font-display text-2xl mb-8">Admin</h1>
          <nav className="space-y-2">
            <a href="/admin" className="block px-3 py-2 rounded hover:bg-primary/20">Dashboard</a>
            <a href="/admin/artists" className="block px-3 py-2 rounded hover:bg-primary/20">Artists</a>
            <a href="/admin/releases" className="block px-3 py-2 rounded hover:bg-primary/20">Releases</a>
            <a href="/admin/news" className="block px-3 py-2 rounded hover:bg-primary/20">News</a>
            <a href="/admin/settings" className="block px-3 py-2 rounded hover:bg-primary/20">Settings</a>
            <a href="/admin/users" className="block px-3 py-2 rounded hover:bg-primary/20">Users</a>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </SessionProvider>
  )
}
