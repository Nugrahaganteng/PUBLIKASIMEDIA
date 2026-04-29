'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { siteData } from '@/lib/data'

// Reusable dropdown component
function DropdownMenu({
  label,
  items,
}: {
  label: string
  items: { label: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 rounded-lg hover:bg-ink-50 transition-all duration-200"
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl shadow-ink-900/10 border border-ink-100 py-2 z-50"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-ink-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false)
  const [mobilePerusahaanOpen, setMobilePerusahaanOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/90 backdrop-blur-xl shadow-[0_2px_40px_rgba(0,0,0,0.08)] border-b border-ink-200/50'
            : 'py-5 bg-white/90 backdrop-blur-xl border-b border-ink-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="/" aria-label="Publikasi Media — Home" className="flex items-center group flex-shrink-0">
              <Image
                src="/publikasimedialogo.png"
                alt={siteData.company.name}
                width={180}
                height={48}
                className="h-10 w-auto object-contain transition-opacity group-hover:opacity-85"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {/* Layanan dropdown */}
              <DropdownMenu label="Layanan" items={siteData.navLayanan} />

              {/* Harga */}
              <a
                href="#harga"
                className="px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 rounded-lg hover:bg-ink-50 transition-all duration-200"
              >
                Harga
              </a>

              {/* Perusahaan dropdown */}
              <DropdownMenu label="Perusahaan" items={siteData.navPerusahaan} />
            </div>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#kontak"
                className="px-5 py-2.5 text-sm font-semibold text-ink-700 border border-ink-300 rounded-xl hover:border-brand-400 hover:text-brand-600 transition-all duration-200"
              >
                Kontak Kami
              </a>
              <a
                href="/login"
                className="cta-btn px-5 py-2.5 bg-gradient-to-r from-brand-600 to-brand-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Login
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-ink-100 transition-colors"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-ink-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-ink-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white/95 backdrop-blur-xl border-b border-ink-200 shadow-2xl lg:hidden overflow-y-auto max-h-[80vh]"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">

              {/* Layanan accordion */}
              <div>
                <button
                  onClick={() => setMobileLayananOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-ink-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
                >
                  Layanan
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileLayananOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileLayananOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      {siteData.navLayanan.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 text-sm text-ink-600 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Harga */}
              <a
                href="#harga"
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-4 py-3 text-base font-medium text-ink-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
              >
                Harga
              </a>

              {/* Perusahaan accordion */}
              <div>
                <button
                  onClick={() => setMobilePerusahaanOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-ink-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
                >
                  Perusahaan
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobilePerusahaanOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {mobilePerusahaanOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      {siteData.navPerusahaan.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 text-sm text-ink-600 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Kontak Kami */}
              <a
                href="#kontak"
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-4 py-3 text-base font-medium text-ink-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
              >
                Kontak Kami
              </a>

              {/* Login button */}
              <div className="pt-2 pb-2">
                <a
                  href="/login"
                  className="w-full block py-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white text-center font-semibold rounded-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}