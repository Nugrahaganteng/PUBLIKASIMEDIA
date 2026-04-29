'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Star, TrendingUp, Users, CheckCircle, Sparkles } from 'lucide-react'
import { siteData } from '@/lib/data'

const FloatingCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
    className={`glass rounded-2xl shadow-xl shadow-ink-900/8 ${className}`}
  >
    {children}
  </motion.div>
)

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFF] to-white pt-24"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231D4ED8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-12">
          {/* Left Content */}
          <motion.div style={{ y, opacity }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-200 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-brand-700 tracking-wide uppercase">
                Publikasi Media
              </span>
              <Sparkles size={12} className="text-brand-500" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-display text-5xl sm:text-6xl xl:text-7xl text-ink-900 leading-[1.1] mb-6"
            >
              Akses Cepat ke{' '}
              <span className="italic text-brand-600">Media Massa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-ink-500 mb-8 leading-relaxed max-w-lg"
            >
              Cara tercepat, mudah dan terpercaya sampaikan berita ke media massa. Bangun persepsi,
              jangkau jutaan pembaca dan kuatkan otoritas bisnis Anda lewat 1 pintu Publikasimedia.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href={`https://wa.me/${siteData.company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn group flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-brand-700 to-brand-500 text-white font-semibold rounded-2xl shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                Hubungi Kami
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#layanan"
                className="flex items-center gap-2 px-7 py-4 bg-white text-ink-800 font-semibold rounded-2xl shadow-md shadow-ink-200/60 hover:shadow-lg hover:-translate-y-1 border border-ink-200 transition-all duration-300"
              >
                Lihat Layanan
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['BS', 'SR', 'AF', 'DK', 'RP'].map((initials, i) => (
                    <div
                      key={initials}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-sm"
                      style={{
                        background: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'][i],
                      }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-ink-500 mt-0.5">
                    Kami mendapatkan rating Excellent, 4.9 dari 100+ ulasan.
                  </p>
                </div>
              </div>

              {[
                { icon: CheckCircle, text: 'Garansi Tayang' },
                { icon: TrendingUp, text: 'Terbukti Efektif' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-ink-600">
                  <Icon size={16} className="text-brand-500" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual — Floating Cards */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            {/* Main card */}
            <FloatingCard
              delay={0.4}
              className="absolute top-8 left-8 right-8 p-6 animate-float"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-medium text-ink-400 uppercase tracking-wide">Campaign Performance</p>
                  <h3 className="text-2xl font-bold text-ink-900 mt-1">Advertorial Terbaru</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center">
                  <TrendingUp className="text-brand-600" size={22} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Media Tayang', value: '247', color: 'text-brand-600' },
                  { label: 'Total Views', value: '1.2M', color: 'text-emerald-600' },
                  { label: 'Engagement', value: '8.4%', color: 'text-purple-600' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="bg-ink-50 rounded-xl p-3">
                    <p className={`text-xl font-bold ${color}`}>{value}</p>
                    <p className="text-[10px] text-ink-400 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </FloatingCard>

            {/* Mini card 1 */}
            <FloatingCard
              delay={0.6}
              className="absolute bottom-32 left-4 p-4 w-44 animate-float-delayed"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle size={18} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Tayang!</p>
                  <p className="text-xs text-ink-400">Kompas.com</p>
                </div>
              </div>
            </FloatingCard>

            {/* Mini card 2 */}
            <FloatingCard
              delay={0.7}
              className="absolute bottom-16 right-4 p-4 w-52 animate-float"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                  <Users size={14} className="text-brand-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink-900">Klien Baru</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={9} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-ink-500">&quot;Mantaaappp, proses cepat dan pelayanan bagus&quot;</p>
            </FloatingCard>

            {/* Media partners card */}
            <FloatingCard
              delay={0.8}
              className="absolute bottom-[230px] right-2 p-3"
            >
              <p className="text-[10px] text-ink-400 font-medium mb-2 uppercase tracking-wide">Media Partner</p>
              <div className="flex flex-wrap gap-1.5">
                {siteData.mediaPartners.slice(0, 6).map((m) => (
                  <span key={m} className="px-2 py-1 bg-ink-100 rounded-lg text-[10px] font-medium text-ink-600">
                    {m}
                  </span>
                ))}
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-ink-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-ink-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}