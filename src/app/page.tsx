import Navbar from '@/components/Navbar'
import Hero from '@/components/Home'
import ProjectTypologies from '@/components/ProjectTypologies'
import SoilNarrative from '@/components/SoilNarrative'
import Marketplace from '@/components/Marketplace'
import HowItWorks from '@/components/HowItWorks'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectTypologies />
      <SoilNarrative />
      <Marketplace />
      <HowItWorks />
    </main>
  )
}
