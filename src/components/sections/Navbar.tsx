'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { siteData } from '@/lib/data'

// Dropdown yang diperbarui agar identik dengan gambar referensi
function DropdownMenu({
  label,
  items,
}: {
  label: string
  items: { label: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
        className={`flex items-center gap-1.5 px-3 py-2 text-[15px] font-semibold transition-colors duration-200 ${
          open ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          strokeWidth={3}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-[320px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 z-50 overflow-hidden"
          >
            <div className="flex flex-col">
              {items.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-6 py-4 text-[15px] font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 ${
                    index !== items.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <Image
                src="/konten-digital.png" 
                alt="Logo"
                width={180}
                height={50}
                className="h-11 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-4">
              <a href="/" className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-blue-600">
                Home
              </a>
              <a href="/tentang" className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-blue-600">
                Tentang
              </a>
              
              <DropdownMenu label="Layanan" items={siteData.navLayanan} />
              
              <a href="/cara-order" className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-blue-600">
                Cara Order
              </a>
              <a href="/syarat-ketentuan" className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-blue-600">
                Syarat & Ketentuan
              </a>
              <a href="/kontak" className="px-3 py-2 text-[15px] font-semibold text-slate-700 hover:text-blue-600">
                Kontak
              </a>
            </div>

            {/* Right Side - Button Order Now */}
            <div className="hidden lg:block">
              <a
                href="#order"
                className="group inline-flex items-center justify-center px-6 py-2.5 border-[2px] border-slate-200 text-slate-800 text-[14px] font-bold rounded-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
              >
                Order Now 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-700 focus:outline-none"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className={`${scrolled ? 'h-20' : 'h-24'}`}></div>
    </>
  )
}