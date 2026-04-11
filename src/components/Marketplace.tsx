'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ShoppingCart, Star, MapPin, Leaf, Shield, Filter, ChevronDown } from 'lucide-react'

type Credit = {
  id: number
  name: string
  location: string
  type: string
  pricePerTon: number
  totalTons: number
  available: number
  rating: number
  reviews: number
  verified: string
  description: string
  sdgs: string[]
  badge?: string
  color: string
  bgColor: string
  image: string
}

const credits: Credit[] = [
  {
    id: 1,
    name: 'Sudan Rangeland Restoration',
    location: 'North Darfur, Sudan',
    type: 'Soil Carbon',
    pricePerTon: 18.40,
    totalTons: 120000,
    available: 84200,
    rating: 4.9,
    reviews: 127,
    verified: 'Verra VM0042',
    description: 'Holistic grazing management transforming 200,000+ ha of degraded drylands while supporting 60,000 pastoralist families.',
    sdgs: ['Zero Hunger', 'Climate Action', 'Life on Land'],
    badge: 'Best Seller',
    color: 'text-earth-700',
    bgColor: 'bg-earth-50 border-earth-200',
    image: 'https://soilwatch.eu/wp-content/uploads/2023/07/Close-up-aerial-wildebeest-great-migration.jpg',
  },
  {
    id: 2,
    name: 'Kenya Agroforestry Initiative',
    location: 'Rift Valley, Kenya',
    type: 'Above Ground Biomass',
    pricePerTon: 22.75,
    totalTons: 65000,
    available: 41300,
    rating: 4.8,
    reviews: 89,
    verified: 'Gold Standard',
    description: 'Smallholder farmer reforestation integrating indigenous trees with crops for biodiversity, carbon, and food security.',
    sdgs: ['No Poverty', 'Climate Action', 'Biodiversity'],
    badge: 'Premium',
    color: 'text-carbon-700',
    bgColor: 'bg-carbon-50 border-carbon-200',
    image: 'https://soilwatch.eu/wp-content/uploads/2023/07/Satellite-slider.jpg',
  },
  {
    id: 3,
    name: 'Ethiopia Regenerative Agriculture',
    location: 'Tigray Region, Ethiopia',
    type: 'Soil Organic Carbon',
    pricePerTon: 15.90,
    totalTons: 95000,
    available: 71000,
    rating: 4.7,
    reviews: 64,
    verified: 'Verra VM0042',
    description: 'Regenerative practices including cover cropping and reduced tillage reversing soil degradation across smallholder farms.',
    sdgs: ['Food Security', 'Climate Action', 'Communities'],
    color: 'text-soil-700',
    bgColor: 'bg-soil-50 border-soil-200',
    image: 'https://soilwatch.eu/wp-content/uploads/2023/07/Sampling-soil-type-in-Zimbabwe-cropped-scaled.jpg',
  },
  {
    id: 4,
    name: 'Morocco Olive Grove Restoration',
    location: 'Atlas Mountains, Morocco',
    type: 'Agroforestry',
    pricePerTon: 26.50,
    totalTons: 40000,
    available: 28900,
    rating: 4.9,
    reviews: 43,
    verified: 'Plan Vivo',
    description: 'Ancient olive grove rehabilitation with soil health interventions generating measurable carbon removals and biodiversity gains.',
    sdgs: ['Sustainable Land', 'Climate Action', 'Partnerships'],
    badge: 'New',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50 border-amber-200',
    image: 'https://soilwatch.eu/wp-content/uploads/2023/07/GEE-1.jpg',
  },
  {
    id: 5,
    name: 'Tanzania Forest Protection',
    location: 'Selous, Tanzania',
    type: 'REDD+',
    pricePerTon: 12.80,
    totalTons: 250000,
    available: 198000,
    rating: 4.6,
    reviews: 201,
    verified: 'Verra REDD+',
    description: 'Preventing deforestation in a biodiverse ecosystem while funding community development programs for 15,000 residents.',
    sdgs: ['Life on Land', 'Climate Action', 'Communities'],
    color: 'text-green-700',
    bgColor: 'bg-green-50 border-green-200',
    image: 'https://soilwatch.eu/wp-content/uploads/2023/07/Close-up-aerial-wildebeest-great-migration.jpg',
  },
  {
    id: 6,
    name: 'Senegal Mangrove Carbon',
    location: 'Casamance, Senegal',
    type: 'Blue Carbon',
    pricePerTon: 34.00,
    totalTons: 30000,
    available: 22100,
    rating: 5.0,
    reviews: 28,
    verified: 'Verra VM0033',
    description: 'Mangrove restoration and protection capturing blue carbon while protecting coastal communities from sea-level rise.',
    sdgs: ['Life Below Water', 'Climate Action', 'Communities'],
    badge: 'Rare',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50 border-blue-200',
    image: 'https://soilwatch.eu/wp-content/uploads/2023/07/AGB_screenshot_malanje_change.png',
  },
]

const filterTypes = ['All', 'Soil Carbon', 'Above Ground Biomass', 'Agroforestry', 'REDD+', 'Blue Carbon']

export default function Marketplace() {
  const [filter, setFilter] = useState('All')
  const [cart, setCart] = useState<number[]>([])
  const [quantities, setQuantities] = useState<Record<number, number>>({})
  const [toast, setToast] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = filter === 'All' ? credits : credits.filter((c) => c.type === filter)

  const addToCart = (credit: Credit) => {
    const qty = quantities[credit.id] || 1
    setCart((prev) => [...prev, credit.id])
    setToast(`${qty} tCO₂e of "${credit.name}" added to cart!`)
    setTimeout(() => setToast(''), 3000)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-fade-up')
          }
        })
      },
      { threshold: 0.08 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-shell overflow-hidden py-24 bg-soil-50" id="marketplace">
      <div className="absolute inset-0 theme-grid opacity-[0.18]" />
      <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-earth-200/45 blur-3xl" />

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-2xl bg-soil-900 px-6 py-3.5 text-sm font-medium text-white shadow-xl animate-fade-up">
          <Leaf size={14} />
          {toast}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal opacity-0 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 mb-4">
              <ShoppingCart size={12} />
              Carbon Marketplace
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-soil-900 mb-3">
              Buy Verified Carbon Credits
            </h2>
            <p className="text-soil-600 text-lg max-w-2xl leading-8">
              Built as a shopping window on top of the original SoilWatch narrative: every listing is tied to a real landscape story, a monitoring trail, and transparent verification.
            </p>
          </div>
          <div className="soft-panel flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-soil-600">
            <ShoppingCart size={16} className="text-earth-700" />
            <span><strong className="text-soil-900">{cart.length}</strong> items in cart</span>
          </div>
        </div>

        {/* Filter bar */}
        <div className="reveal opacity-0 delay-100 flex flex-wrap gap-2 mb-10 rounded-[1.75rem] border border-soil-200 bg-white/75 p-3 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-soil-500 text-sm mr-2">
            <Filter size={14} />
            Filter:
          </div>
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === type
                  ? 'bg-soil-900 text-white'
                  : 'bg-white border border-soil-200 text-soil-600 hover:border-earth-300 hover:text-soil-900'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((credit, i) => (
            <div
              key={credit.id}
              className={`reveal opacity-0 service-card overflow-hidden rounded-[2rem] border border-soil-200 bg-white group delay-${(i % 3) * 100}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Card image area */}
              <div className={`relative h-56 ${credit.bgColor} overflow-hidden`}>
                <Image
                  src={credit.image}
                  alt={credit.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-900/80 via-soil-900/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    Project spotlight
                  </div>
                </div>

                {/* Badges */}
                {credit.badge && (
                  <div className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
                    credit.badge === 'Best Seller' ? 'bg-earth-300 text-soil-900' :
                    credit.badge === 'Premium' ? 'bg-soil-900 text-white' :
                    credit.badge === 'New' ? 'bg-carbon-700 text-white' :
                    'bg-amber-500 text-soil-900'
                  }`}>
                    {credit.badge}
                  </div>
                )}
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-soil-700 backdrop-blur-sm">
                  <Shield size={10} className="text-earth-700" />
                  {credit.verified}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-1 text-soil-400 text-xs mb-1">
                      <MapPin size={10} />
                      {credit.location}
                    </div>
                    <h3 className="font-display font-bold text-soil-900 text-lg leading-snug">{credit.name}</h3>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${credit.bgColor} ${credit.color} shrink-0 ml-2`}>
                    {credit.type}
                  </span>
                </div>

                <p className="text-soil-500 text-sm leading-6 mb-4 line-clamp-3">{credit.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(credit.rating) ? 'text-amber-400 fill-amber-400' : 'text-soil-200 fill-soil-200'}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-soil-700">{credit.rating}</span>
                  <span className="text-xs text-soil-400">({credit.reviews} projects)</span>
                </div>

                {/* Availability bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-soil-400 mb-1.5">
                    <span>{(credit.available / 1000).toFixed(0)}k tCO₂e available</span>
                    <span>{Math.round((credit.available / credit.totalTons) * 100)}% remaining</span>
                  </div>
                  <div className="h-1.5 bg-soil-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-earth-300 rounded-full transition-all duration-700"
                      style={{ width: `${(credit.available / credit.totalTons) * 100}%` }}
                    />
                  </div>
                </div>

                {/* SDG tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {credit.sdgs.map((sdg) => (
                    <span key={sdg} className="text-[10px] font-medium bg-soil-50 border border-soil-100 text-soil-500 px-2 py-0.5 rounded-full">
                      {sdg}
                    </span>
                  ))}
                </div>

                {/* Buy row */}
                <div className="flex items-center justify-between pt-4 border-t border-soil-100">
                  <div>
                    <div className="text-xs text-soil-400 mb-0.5">Price per tCO₂e</div>
                    <div className="font-display text-2xl font-bold text-soil-900">
                      ${credit.pricePerTon.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-soil-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setQuantities((q) => ({ ...q, [credit.id]: Math.max(1, (q[credit.id] || 1) - 1) }))}
                        className="px-3 py-2 text-soil-600 hover:bg-soil-50 text-sm font-medium"
                      >−</button>
                      <span className="px-2 text-sm font-medium text-soil-900 min-w-[28px] text-center">
                        {quantities[credit.id] || 1}
                      </span>
                      <button
                        onClick={() => setQuantities((q) => ({ ...q, [credit.id]: (q[credit.id] || 1) + 1 }))}
                        className="px-3 py-2 text-soil-600 hover:bg-soil-50 text-sm font-medium"
                      >+</button>
                    </div>
                    <button
                      onClick={() => addToCart(credit)}
                      className="btn-shimmer flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-soil-900"
                    >
                      <ShoppingCart size={14} />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="reveal opacity-0 text-center mt-12">
          <button className="inline-flex items-center gap-2 rounded-full border-2 border-soil-300 bg-white/80 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-soil-800 transition-all hover:border-earth-300 hover:bg-earth-300/15">
            View All Projects
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
