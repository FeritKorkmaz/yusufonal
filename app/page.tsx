import About from '@/components/About'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import FloatingButtons from '@/components/FloatingButtons'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Listings from '@/components/Listings'
import Services from '@/components/Services'
import Valuation from '@/components/Valuation'
import WhyUs from '@/components/WhyUs'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Listings />
      <Services />
      <WhyUs />
      <About />
      <Valuation />
      <CTA />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
