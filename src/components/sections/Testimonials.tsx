'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { siteData } from '@/lib/data'

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
}

const avatarColors = [
  'from-brand-500 to-blue-400',
  'from-purple-500 to-violet-400',
  'from-teal-500 to-cyan-400',
  'from-amber-500 to-orange-400',
  'from-rose-500 to-pink-400',
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = siteData.testimonials.length

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + total) % total)
  }, [total])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 },
    }),
  }

  const testimonial = siteData.testimonials[current]

  return (
    <section id="testimoni" className="py-28 bg-gradient-to-b from-ink-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-sm font-semibold rounded-full mb-4"
          >
            Testimoni Pelanggan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl text-ink-900 mb-4"
          >
            Testimoni{' '}
            <span className="italic text-brand-600">Pelanggan</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-ink-900/8 border border-ink-100 relative"
            >
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={60} className="text-brand-500" />
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-xl text-ink-700 leading-relaxed mb-8 font-body italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${avatarColors[current % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">{testimonial.name}</p>
                    <p className="text-sm text-ink-500">
                      {testimonial.role} — {testimonial.company}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:block px-3 py-1.5 bg-brand-100 text-brand-700 text-xs font-semibold rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-ink-200 flex items-center justify-center text-ink-500 hover:text-ink-900 hover:border-ink-400 shadow-sm transition-all hover:scale-105"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {siteData.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2.5 bg-brand-500' : 'w-2.5 h-2.5 bg-ink-300 hover:bg-ink-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-ink-200 flex items-center justify-center text-ink-500 hover:text-ink-900 hover:border-ink-400 shadow-sm transition-all hover:scale-105"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Side preview cards (desktop) */}
        <div className="hidden xl:flex justify-center gap-8 mt-12">
          {[-1, 1].map((offset) => {
            const idx = (current + offset + total) % total
            const t = siteData.testimonials[idx]
            return (
              <motion.div
                key={idx}
                animate={{ opacity: 0.5 }}
                className="w-72 bg-white rounded-2xl p-6 border border-ink-100 shadow-md"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-ink-600 italic line-clamp-2">&ldquo;{t.text}&rdquo;</p>
                <p className="text-xs font-semibold text-ink-800 mt-3">{t.name}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}