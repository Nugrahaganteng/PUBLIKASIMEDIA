import Image from 'next/image'

export const metadata = {
  title: 'Tentang Kami – Konten Digital.id',
  description:
    'Ekspertis dalam komunikasi strategis dan pertumbuhan digital. Kami membantu brand Anda menjangkau audiens melalui narasi yang tepat di media nasional.',
}

export default function TentangPage() {
  return (
    <main className="w-full bg-[#fcfcfc] text-slate-900 selection:bg-amber-200">
      
      {/* ── Minimalist Hero Section ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Background Image with subtle parallax effect feel */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/konten1.png" 
            alt="Background" 
            fill 
            className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="inline-block text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Established Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-6">
            Membangun <span className="italic font-serif">Legacy</span> Digital
          </h1>
          <nav className="flex items-center justify-center gap-4 text-xs uppercase tracking-widest text-slate-400">
            <a href="/" className="hover:text-amber-500 transition-colors">Home</a>
            <span className="w-1 h-1 rounded-full bg-amber-500" />
            <span className="text-white">Tentang Kami</span>
          </nav>
        </div>
      </section>

      {/* ── Narrative Section ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Image Composition - Left */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
                <Image
                  src="/konten1.png"
                  alt="Professional Workspace"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-[12px] border-white/10 m-4" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-amber-500 p-8 text-slate-950 hidden md:block">
                <p className="text-4xl font-light mb-1">08+</p>
                <p className="text-[10px] uppercase tracking-tighter font-bold leading-none">
                  Tahun <br /> Dedikasi
                </p>
              </div>
            </div>

            {/* Content - Right */}
            <div className="lg:col-span-7 pt-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-amber-600 font-bold mb-8">
                The Agency
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif leading-snug mb-8 text-slate-800">
                Lebih dari sekadar agensi konten, kami adalah arsitek reputasi digital Anda.
              </h3>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
                <p>
                  Di <span className="font-semibold text-slate-900">Konten Digital.id</span>, kami memahami bahwa visibilitas bukan hanya soal angka, melainkan soal bagaimana sebuah brand dipersepsikan. Kami mengkurasi narasi melalui <span className="italic">Press Release</span> dan <span className="italic">Backlink Media Nasional</span> untuk menciptakan otoritas yang nyata di mata publik.
                </p>
                <p>
                  Setiap strategi yang kami susun didasarkan pada analisis mendalam dan eksekusi yang presisi. Kami percaya bahwa setiap brand memiliki cerita unik yang layak mendapatkan panggung terbaik di ekosistem digital.
                </p>
              </div>

              {/* Refined Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-slate-100 pt-12">
                <div>
                  <p className="text-3xl font-light text-slate-900">500<span className="text-amber-500">+</span></p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">Kemitraan Strategis</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-slate-900">1k<span className="text-amber-500">+</span></p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">Publikasi Media</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-slate-900">100<span className="text-amber-500">%</span></p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">Komitmen Kualitas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Luxury Services Bar ── */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Press Release', 'Backlink Media', 'Press Conference', 'Script Writing', 'Content Training'].map((item) => (
              <span key={item} className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Premium CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10">
            Siap untuk membawa brand Anda ke level berikutnya?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/6208778600919"
              target="_blank"
              className="px-10 py-5 bg-slate-950 text-white text-xs uppercase tracking-widest font-bold hover:bg-amber-600 transition-all duration-300 rounded-none"
            >
              Konsultasi Eksklusif
            </a>
            <div className="flex flex-col items-start gap-1">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Hotline Service</span>
              <a href="tel:+628778600919" className="text-lg font-light text-slate-800 hover:text-amber-600">
                0877 8600 0919
              </a>
            </div>
          </div>
          
          {/* Social Links - Clean & Minimal */}
          <div className="mt-20 flex justify-center gap-8">
            {['IG', 'FB', 'YT', 'TK'].map((social) => (
              <a key={social} href="#" className="text-[10px] font-bold tracking-tighter text-slate-300 hover:text-amber-500 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}