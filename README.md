# SoilWatch — Next.js 14 Website

Production-ready Next.js 14 website for SoilWatch — developer and implementer of high-integrity carbon projects.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Playfair Display + DM Sans + DM Mono (Google Fonts)
- **Icons**: Lucide React
- **Language**: TypeScript (strict)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Project Typologies, Soil Narrative, Marketplace, How It Works |
| `/approach` | Project typologies and MRV methodology |
| `/carbon-removals` | Carbon credit catalogue |
| `/projects` | Current and pipeline project portfolio |
| `/about` | Team, mission, values, NbS philosophy |
| `/insights` | Science articles and featured video |
| `/contact` | Project enquiry form |
| `/careers` | Open roles — accessible via Contact dropdown |
| `/cart` | Shopping cart with checkout flow |

## Getting Started

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Design System

### Color Palette
- `soil-*` — Browns (text, backgrounds)
- `earth-*` — Greens (primary brand, CTAs)
- `carbon-*` — Blues (data, trust)

### Typography
- Display/headings: Playfair Display
- Body: DM Sans
- Data/code: DM Mono

### Key Components
- `Navbar` — Sticky nav with blur, mobile menu, Contact dropdown with Careers
- `Home` — Hero with image mosaic and stats
- `ProjectTypologies` — 6 typology cards with USP strip
- `SoilNarrative` — Soil degradation section with stats
- `Marketplace` — Carbon credit listings (coming soon)
- `Services` — Detailed typology cards with MRV section
- `HowItWorks` — 4-step pipeline, partners, CTA, footer
- `CartContext` — Global cart state provider

## Project Typologies

Six typologies across Africa:
1. Regenerative Agriculture (VM0042 / VM0053)
2. Rangeland & Pastoralism (VM0042)
3. Biochar (Puro.earth / Gold Standard)
4. Enhanced Rock Weathering (Emerging MRV frameworks)
5. Agroforestry (Gold Standard / Plan Vivo)
6. Invasive Species Management (VM0047 / custom protocols)

## Features

- Animated scroll reveals on all sections
- Intersection Observer-based fade-up animations
- Carbon credit cart with localStorage persistence
- Full checkout flow with order success state
- Hover dropdown on Contact button for Careers
- Responsive across all screen sizes
