# SoilWatch — Next.js 14 Website

A fully migrated, production-ready Next.js 14 website for SoilWatch, built with a carbon credit marketplace shopping experience.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Playfair Display + DM Sans + DM Mono (Google Fonts)
- **Icons**: Lucide React
- **Language**: TypeScript (strict)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Marketplace, Services, How It Works, Footer |
| `/marketplace` | Full carbon credit shopping page with filters & cart |
| `/services` | 5-phase MRV service catalogue |
| `/about` | Team, mission, values |
| `/impact` | Animated metrics, SDG alignment, active project portfolio |
| `/cart` | Shopping cart with checkout flow |
| `/contact` | Project enquiry form |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
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
- `Navbar` — Sticky nav with blur, mobile menu, cart badge
- `Hero` — Dark full-screen hero with live stats card
- `Marketplace` — Shopping grid with 6 carbon credit listings
- `Services` — 5-phase service cards
- `HowItWorks` — 4-step pipeline + partners + footer
- `CartContext` — Global cart state provider

## Carbon Credit Listings

Six active projects across Africa:
1. Sudan Rangeland Restoration (Verra VM0042)
2. Kenya Agroforestry Initiative (Gold Standard)
3. Ethiopia Regenerative Agriculture (Verra VM0042)
4. Morocco Olive Grove Restoration (Plan Vivo)
5. Tanzania Forest Protection (Verra REDD+)
6. Senegal Mangrove Carbon (Verra VM0033)

## Features
- Animated scroll reveals on all sections
- Organic blob animations in hero
- Carbon credit filters by type
- Add to cart with quantity selector and toast notification
- Full checkout flow with order success state
- Animated count-up metrics on Impact page
- Custom 404 page
- Responsive across all screen sizes
