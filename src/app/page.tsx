import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}