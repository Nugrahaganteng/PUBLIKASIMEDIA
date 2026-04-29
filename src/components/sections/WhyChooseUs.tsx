'use client'

import { motion } from 'framer-motion'
import {
  Award, Shield, CheckCircle, Zap, Tag, BadgeCheck, Users, Anchor, Smile,
} from 'lucide-react'
import { siteData } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  Award, Shield, CheckCircle, Zap, Tag, BadgeCheck, Users, Anchor, Smile,
}

const gridConfig = [
  { colSpan: 'lg:col-span-2' },
  { colSpan: '' },
  { colSpan: '' },
  { colSpan: '' },
  { colSpan: 'lg:col-span-2' },
  { colSpan: '' },
  { colSpan: '' },
  { colSpan: '' },
  { colSpan: 'lg:col-span-2' },
]

const accentColors = [
  'from-brand-500 to-blue-400',
  'from-purple-500 to-violet-400',
  'from-teal-500 to-cyan-400',
  'from-amber-500 to-yellow-400',
  'from-emerald-500 to-green-400',
  'from-rose-500 to-pink-400',
  'from-indigo-500 to-blue-400',
  'from-orange-500 to-red-400',
  'from-sky-500 to-cyan-400',
]

export default function WhyChooseUs() {
  return (
    <section id="mengapa-kami" className="py-28 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-500/20 text-brand-300 text-sm font-semibold rounded-full border border-brand-500/30 mb-4"
          >
            Keunggulan Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl text-white mb-4"
          >
            Alasan Memilih{' '}
            <span className="italic text-brand-400">Kami</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink-400 text-lg max-w-2xl mx-auto"
          >
            Misi kami memberikan pelayanan sebaik mungkin, cepat tanggap &amp; profesional.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteData.whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || CheckCircle
            const config = gridConfig[i] || {}
            const gradient = accentColors[i]
            const isWide = config.colSpan === 'lg:col-span-2'

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative rounded-2xl p-6 bg-ink-800/60 border border-ink-700/50 hover:border-ink-600 backdrop-blur-sm overflow-hidden transition-all duration-300 ${config.colSpan || ''} ${isWide ? 'sm:col-span-2' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg shadow-black/30 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="font-semibold text-white text-base mb-2">
                  {item.title}
                </h3>
                <p className={`text-sm text-ink-400 leading-relaxed ${isWide ? 'max-w-md' : ''}`}>
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}