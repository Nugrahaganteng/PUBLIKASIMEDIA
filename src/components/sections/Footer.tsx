'use client'

import {
  Instagram, Twitter, Facebook, Linkedin, Youtube,
  Phone, Mail, MapPin, ArrowUpRight,
} from 'lucide-react'
import Image from 'next/image'
import { siteData } from '@/lib/data'

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-2">
            {/* Logo — inverted white on dark bg */}
            <a href="/" aria-label="Publikasi Media — Home" className="inline-flex mb-6 group">
              <Image
                src="/konten-digital.png"
                alt={siteData.company.name}
                width={200}
                height={52}
                className="h-11 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>

            <p className="text-ink-400 text-sm leading-relaxed mb-6 max-w-sm">
              {siteData.company.tagline}
            </p>

            <div className="space-y-3 mb-6">
              <a
                href={`tel:${siteData.company.phone}`}
                className="flex items-start gap-3 text-sm text-ink-400 hover:text-white transition-colors group"
              >
                <Phone size={15} className="mt-0.5 flex-shrink-0 group-hover:text-brand-400 transition-colors" />
                <span>{siteData.company.phone}</span>
              </a>
              <a
                href={`mailto:care@publikasimedia.com`}
                className="flex items-start gap-3 text-sm text-ink-400 hover:text-white transition-colors group"
              >
                <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-brand-400 transition-colors" />
                <span>{siteData.company.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-ink-500" />
                <span>{siteData.company.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-ink-800 flex items-center justify-center text-ink-400 hover:text-white hover:bg-brand-600 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns from siteData.footerLinks */}
          {Object.entries(siteData.footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-ink-400 hover:text-white flex items-center gap-1 group transition-colors"
                    >
                      {label}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500">
          <p>Copyright @ {new Date().getFullYear()} - Publikasimedia.com</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors"
          >
            Kembali ke atas ↑
          </button>
        </div>

      </div>
    </footer>
  )
}