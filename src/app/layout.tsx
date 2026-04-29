import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MediaPro Indonesia — Solusi Media & Publikasi Terpercaya',
  description: 'Layanan iklan advertorial, press release, backlink media, monitoring, press conference, billboard, dan Wikipedia untuk bisnis Anda.',
  keywords: 'iklan advertorial, press release, backlink media, monitoring media, press conference, billboard',
  openGraph: {
    title: 'MediaPro Indonesia',
    description: 'Solusi Media & Publikasi Terpercaya sejak 2012',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}