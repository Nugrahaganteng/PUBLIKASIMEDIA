'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { siteData } from '@/lib/data'

export default function CTA() {
  return (
    <section id="kontak" className="py-28 relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-blue-700">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full border border-white/30 mb-6">
            Mulai Sekarang
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Iklan tipe lainnya, bisa{' '}
            <span className="italic">hubungi kami</span> melalui kontak berikut
          </h2>

          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Cara tercepat, mudah dan terpercaya sampaikan berita ke media massa.
            Bangun persepsi, jangkau jutaan pembaca dan kuatkan otoritas bisnis Anda lewat 1 pintu Publikasimedia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`https://wa.me/${siteData.company.whatsapp}?text=Halo Publikasimedia, saya ingin konsultasi mengenai layanan media.`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn group flex items-center gap-3 px-8 py-4 bg-white text-brand-700 font-bold rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              Hubungi Kami
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${siteData.company.phone}`}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Phone size={20} />
              {siteData.company.phone}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-blue-100 text-sm">
            {[
              '✓ Selengkapnya...',
              '✓ Garansi Uang Kembali',
              '✓ Respon Cepat',
              '✓ Harga Transparan',
            ].map((item) => (
              <span key={item} className="opacity-80">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}