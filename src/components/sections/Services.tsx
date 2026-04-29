'use client'

import { motion } from 'framer-motion'
import {
  FileText, Mic, Link2, BarChart3, Send, Monitor, Globe, Plane,
  ArrowUpRight,
} from 'lucide-react'
import { siteData } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  FileText, Mic, Link2, BarChart3, Send, Monitor, Globe, Plane,
}

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  blue: {
    bg: 'from-brand-50 to-blue-50',
    icon: 'bg-brand-500 text-white',
    border: 'border-brand-200 hover:border-brand-400',
    badge: 'bg-brand-100 text-brand-700',
  },
  purple: {
    bg: 'from-purple-50 to-violet-50',
    icon: 'bg-purple-500 text-white',
    border: 'border-purple-200 hover:border-purple-400',
    badge: 'bg-purple-100 text-purple-700',
  },
  teal: {
    bg: 'from-teal-50 to-cyan-50',
    icon: 'bg-teal-500 text-white',
    border: 'border-teal-200 hover:border-teal-400',
    badge: 'bg-teal-100 text-teal-700',
  },
  orange: {
    bg: 'from-orange-50 to-amber-50',
    icon: 'bg-orange-500 text-white',
    border: 'border-orange-200 hover:border-orange-400',
    badge: 'bg-orange-100 text-orange-700',
  },
  green: {
    bg: 'from-emerald-50 to-green-50',
    icon: 'bg-emerald-500 text-white',
    border: 'border-emerald-200 hover:border-emerald-400',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  red: {
    bg: 'from-red-50 to-rose-50',
    icon: 'bg-red-500 text-white',
    border: 'border-red-200 hover:border-red-400',
    badge: 'bg-red-100 text-red-700',
  },
  indigo: {
    bg: 'from-indigo-50 to-blue-50',
    icon: 'bg-indigo-500 text-white',
    border: 'border-indigo-200 hover:border-indigo-400',
    badge: 'bg-indigo-100 text-indigo-700',
  },
  sky: {
    bg: 'from-sky-50 to-cyan-50',
    icon: 'bg-sky-500 text-white',
    border: 'border-sky-200 hover:border-sky-400',
    badge: 'bg-sky-100 text-sky-700',
  },
}

export default function Services() {
  return (
    <section id="layanan" className="py-28 bg-gradient-to-b from-white to-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-sm font-semibold rounded-full mb-4"
          >
            Layanan Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl text-ink-900 mb-4"
          >
            Semua Kebutuhan Media{' '}
            <span className="italic text-brand-600">Satu Pintu</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink-500 text-lg max-w-2xl mx-auto"
          >
            Rangkaian layanan media profesional untuk memperkuat brand presence dan memperluas jangkauan bisnis Anda.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteData.services.map((service, i) => {
            const Icon = iconMap[service.icon] || FileText
            const colors = colorMap[service.color] || colorMap.blue

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`group relative bg-white rounded-2xl p-6 border ${colors.border} shadow-sm hover:shadow-xl hover:shadow-ink-900/8 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${colors.icon} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-ink-900 text-base mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-ink-500 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-ink-500">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.icon} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${siteData.company.whatsapp}?text=Halo, saya tertarik dengan layanan ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${colors.badge} px-3 py-1.5 rounded-lg group-hover:gap-2 transition-all`}
                  >
                    Tanya Harga
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* "Iklan tipe lainnya" note + CTA — visible in screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 mb-4"
        >
          <p className="text-ink-500 text-sm mb-4">
            Iklan tipe lainnya, bisa hubungi kami melalui kontak berikut
          </p>
          <a
            href={`https://wa.me/${siteData.company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink-900 text-white font-semibold rounded-2xl hover:bg-brand-700 transition-colors duration-300"
          >
            Selengkapnya...
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}