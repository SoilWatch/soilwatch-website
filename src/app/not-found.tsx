import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-32 pb-24 bg-[#0e1a0e] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1a0e] to-[#1a2a0a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-earth-700/15 rounded-full blur-[80px]" />
        <div className="relative z-10 text-center max-w-lg mx-auto px-6">
          <div className="font-display text-[120px] font-bold text-earth-700/30 leading-none mb-4">404</div>
          <h1 className="font-display text-4xl font-bold text-white mb-4">This soil hasn't been mapped yet</h1>
          <p className="text-soil-400 text-lg mb-10">
            The page you're looking for doesn't exist — but there's plenty of verified carbon to explore.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-shimmer inline-flex items-center gap-2 text-white font-medium px-8 py-4 rounded-full text-sm">
              Back to Home <ArrowRight size={16} />
            </Link>
            <Link href="/marketplace" className="border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-8 py-4 rounded-full text-sm transition-all inline-flex items-center">
              Browse Credits
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
