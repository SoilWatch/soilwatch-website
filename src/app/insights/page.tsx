import Navbar from '@/components/Navbar'
import HowItWorks from '@/components/HowItWorks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Science — SoilWatch',
  description: 'Shorter reads on the approaches, landscapes, species, and science behind SoilWatch carbon projects. Biochar, ERW, Prosopis, water hyacinth, NbS, and more.'
}

const articles = [
  {
    title: 'What Is Prosopis, And Why Does It Matter?',
    category: 'Invasive Species',
    summary:
      'Prosopis juliflora — also known as mesquite — has spread across large parts of East Africa, displacing native vegetation, collapsing pastoralist livelihoods, and driving conflict over land. Understanding how it spreads, why it is so hard to control, and what removal and restoration look like is central to the projects we run in Ethiopia and beyond.',
  },
  {
    title: 'Water Hyacinth: Africa\'s Floating Threat',
    category: 'Invasive Species',
    summary:
      'Water hyacinth covers major lakes and waterways across sub-Saharan Africa, blocking fishing routes, reducing oxygen in the water, and destroying livelihoods. Removal and biomass conversion — including into biochar — offers both an ecological and economic pathway. We have documented significant infestations in Ethiopia.',
  },
  {
    title: 'Biochar: Carbon Locked For Centuries',
    category: 'Carbon Removal',
    summary:
      'Biochar is produced by heating biomass in low-oxygen conditions, converting it into a stable form of carbon that can persist in soils for hundreds to thousands of years. It also improves soil structure, water retention, and nutrient availability — making it both a carbon removal and a food security intervention.',
  },
  {
    title: 'Enhanced Rock Weathering: Speeding Up Nature',
    category: 'Carbon Removal',
    summary:
      'Rocks naturally absorb CO₂ from the atmosphere through weathering — a process that normally takes millennia. Enhanced rock weathering (ERW) accelerates this by crushing silicate rocks and spreading them on agricultural land, where they weather rapidly and transport carbon to the ocean as bicarbonates, while improving soil pH and crop yields.',
  },
  {
    title: 'Why Nature-Based Solutions Belong In Carbon Markets',
    category: 'NbS & Policy',
    summary:
      'There is growing pressure to exclude NbS from voluntary carbon markets on grounds of permanence and reversibility. We make the case for why well-designed NbS projects — with strong governance, community ownership, and monitoring — are not just defensible, but essential. And why permanence is a design question, not a disqualifier.',
  },
  {
    title: 'Soil Degradation: A Crisis Built In One Generation',
    category: 'Soil Science',
    summary:
      'In Sudan\'s Gedaref, uncontrolled agricultural expansion destroyed an entire agropastoral system within 30 years. In Samburu, overgrazing produced near-Martian landscapes where nothing palatable remains for livestock. These collapses are recent, documented, and reversible — if we act with the right approach.',
  },
]

export default function InsightsPage() {
  return (
    <main>
      <Navbar />

      <section className="section-shell overflow-hidden bg-soil-50 pb-16 pt-32">
        <div className="absolute inset-0 theme-lines opacity-70" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-6">
            Insights &amp; Science
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-soil-900 mb-5">
            The Science Behind
            <span className="gradient-text block">What We Do</span>
          </h1>
          <p className="text-soil-600 text-xl max-w-3xl mx-auto leading-8">
            Shorter reads on the approaches, landscapes, and species we work with. No depth required to browse — but it&apos;s there if you want it.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="soft-panel rounded-[1.8rem] p-7 flex flex-col"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-earth-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-earth-700">
                    {article.category}
                  </span>
                  <span className="rounded-full border border-soil-200 bg-soil-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-soil-500">
                    Coming Soon
                  </span>
                </div>
                <h2 className="font-display text-lg font-bold uppercase text-soil-900 mb-3 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm leading-6 text-soil-600 flex-1">{article.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soil-50 py-20 border-t border-soil-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-5">
              Featured
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-soil-900 mb-4">
              Environmental Restoration In Practice
            </h2>
            <p className="text-soil-600 text-lg max-w-2xl mx-auto leading-7">
              SoilWatch contributed to this film by Andrew Millison on environmental restoration — a vivid illustration of what is possible when land is given the chance to recover.
            </p>
          </div>
          <div className="soft-panel rounded-[2rem] overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/xbBdIG--b58"
              title="Environmental Restoration in Practice — Andrew Millison"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      <HowItWorks />
    </main>
  )
}
