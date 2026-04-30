import Navbar from '@/components/Navbar'
import Hero from '@/components/Home'
import ProjectTypologies from '@/components/ProjectTypologies'
import SoilNarrative from '@/components/SoilNarrative'
import HowItWorks from '@/components/HowItWorks'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectTypologies />
      <SoilNarrative />
      <HowItWorks />
    </main>
  )
}
