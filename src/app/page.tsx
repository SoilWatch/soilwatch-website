import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marketplace from '@/components/Marketplace'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marketplace />
      <Services />
      <HowItWorks />
    </main>
  )
}
