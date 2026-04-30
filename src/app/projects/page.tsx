import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { MapPin, Clock, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects - SoilWatch Carbon Projects',
  description: 'Portfolio of current and pipeline carbon projects developed and implemented by SoilWatch.',
}

const projects = [
  {
    id: 'ethiopia-rangeland',
    title: 'Ethiopia Rangeland Restoration',
    location: 'Borena Zone, Ethiopia',
    typology: 'Rangeland Management',
    status: 'Active',
    statusColor: 'bg-earth-100 text-earth-700',
    description:
      'Holistic grazing management with pastoralist communities across degraded rangeland in southern Ethiopia, reversing decades of overgrazing and restoring ecosystem productivity.',
    image: '/images/services/close-up-aerial-wildebeest-great-migration.jpg',
    methodology: 'VM0042',
    isEven: true,
  },
  {
    id: 'prosopis-biochar',
    title: 'Prosopis Biochar',
    location: 'Amhara Region, Ethiopia',
    typology: 'Biochar',
    status: 'Active',
    statusColor: 'bg-earth-100 text-earth-700',
    description:
      'Converting invasive Prosopis and water hyacinth biomass into biochar, applied to agricultural soils. Combines carbon removal and soil health improvement.',
    image: '/images/fieldwork/20251029_105741.jpg',
    methodology: 'Puro.earth',
    isEven: false,
  },
  {
    id: 'regen-ag-east-africa',
    title: 'Regenerative Agriculture - East Africa',
    location: 'Multiple Countries',
    typology: 'Regenerative Agriculture',
    status: 'Pipeline',
    statusColor: 'bg-soil-100 text-soil-600',
    description:
      'Smallholder-focused project improving soil carbon through cover cropping, reduced tillage, and rotational grazing. Baseline establishment underway across target geographies.',
    image: '/images/services/southsudan-po-ssd-may2018-0007.jpg',
    methodology: 'VM0042 / VM0053',
    isEven: true,
  },
]

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      <section className="section-shell overflow-hidden bg-soil-50 pb-16 pt-32">
        <div className="absolute inset-0 theme-lines opacity-70" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-6">
            <Leaf size={12} />
            Project Portfolio
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-soil-900 mb-5">
            Our Projects
            <span className="gradient-text block">On the Ground</span>
          </h1>
          <p className="text-soil-600 text-xl max-w-3xl mx-auto leading-8">
            A portfolio of current and pipeline projects developed and implemented by SoilWatch - each one rooted in science, community, and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="section-shell bg-white py-24">
        <div className="absolute inset-0 theme-grid opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-soil-200 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-soil-900/[0.06]"
              >
                <div className="grid lg:grid-cols-5">
                  <div className={`relative lg:col-span-2 ${!project.isEven ? 'lg:order-last' : ''}`}>
                    <div className="relative h-64 lg:h-full min-h-[260px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-soil-900/80 via-soil-900/25 to-transparent lg:bg-gradient-to-r lg:from-soil-900/65 lg:via-soil-900/20 lg:to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                        <h2 className="font-display text-2xl font-bold uppercase leading-tight text-white drop-shadow-sm">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className={`lg:col-span-3 flex flex-col p-7 lg:p-9 ${!project.isEven ? 'lg:order-first' : ''}`}>
                    <div className="mb-5 flex flex-wrap gap-2">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${project.statusColor}`}>
                        <Clock size={10} />
                        {project.status}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-soil-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-soil-600">
                        {project.typology}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-soil-200 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-soil-500">
                        {project.methodology}
                      </span>
                    </div>
                    <p className="mb-6 text-[15px] leading-7 text-soil-700">{project.description}</p>
                    <div className="mt-auto flex items-center gap-2 text-soil-400 text-sm">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="mb-6 text-soil-500 text-sm">Interested in developing a project with us?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 btn-shimmer rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-soil-900"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
