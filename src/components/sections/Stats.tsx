'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteData } from '@/lib/data'

function useCounter(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, start])

  return count
}

function StatCard({ stat, index }: { stat: (typeof siteData.stats)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const numericValue = parseInt(stat.value.replace(/\D/g, ''), 10)
  const count = useCounter(numericValue, 2000, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl font-display font-normal text-ink-900 mb-2">
        {inView ? count.toLocaleString() : 0}
        <span className="text-brand-500">{stat.suffix}</span>
      </div>
      <p className="text-ink-500 font-medium">{stat.label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating strip — matches "Kami mendapatkan rating Excellent, 4.9 dari 100+ ulasan" in screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 text-sm text-ink-500"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-semibold text-ink-700">Kami mendapatkan rating Excellent, 4.9 dari 100+ ulasan.</span>
        </motion.div>

        {/* Stats counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}