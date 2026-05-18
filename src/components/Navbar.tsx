'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Approach', href: '/approach' },
  { label: 'Carbon Removals', href: '/carbon-removals' },
  { label: 'Improved Livelihoods', href: '/livelihoods' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled
          ? 'bg-soil-50/92 border-b border-soil-200/80 py-2.5 md:py-3'
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 md:gap-3 group">
          <div className="relative h-10 w-7 shrink-0 overflow-hidden rounded-sm md:h-12 md:w-8">
            <Image
              src="/images/soilwatch_logo_outline_stroke_2023-1.webp"
              alt="SoilWatch logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <div className="min-w-0 leading-none">
            <span className="font-display block text-[1.05rem] font-bold uppercase tracking-[0.06em] text-soil-900 md:text-[1.35rem] md:tracking-[0.08em]">
              SoilWatch
            </span>
            <span className="block max-w-[11.5rem] truncate text-[8px] uppercase tracking-[0.16em] text-soil-500 sm:max-w-none sm:text-[9px] sm:tracking-[0.22em] md:text-[10px] md:tracking-[0.32em]">
              Natural Climate Solutions
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.08em] text-soil-600 hover:text-soil-900 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-earth-300 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <div className="relative group">
            <Link
              href="/contact"
              className="btn-shimmer text-soil-900 text-sm font-bold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full block"
            >
              Contact
            </Link>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-soil-200 rounded-xl shadow-lg overflow-hidden">
                <Link
                  href="/careers"
                  className="block px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-soil-600 hover:text-soil-900 hover:bg-soil-50 transition-colors whitespace-nowrap"
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          className="md:hidden flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-soil-200/70 bg-soil-50/85 text-soil-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed right-3 top-[4.35rem] z-50 w-[14.5rem] max-w-[calc(100vw-1.5rem)] animate-fade-in sm:right-6">
          <div className="max-h-[calc(100svh-5.5rem)] overflow-y-auto rounded-2xl border border-soil-200 bg-[#faf7f2] p-3 shadow-2xl shadow-soil-900/20">
            <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-10 items-center rounded-xl px-3 text-[12px] font-semibold uppercase tracking-[0.02em] text-soil-800 transition-colors hover:bg-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/careers" className="flex min-h-10 items-center rounded-xl px-3 text-[12px] font-semibold uppercase tracking-[0.02em] text-soil-800 transition-colors hover:bg-white" onClick={() => setMenuOpen(false)}>
            Careers
          </Link>
          <Link href="/contact" className="btn-shimmer mt-2 flex min-h-10 items-center justify-center rounded-full px-4 text-center text-[12px] font-bold uppercase tracking-[0.04em] text-soil-900" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
