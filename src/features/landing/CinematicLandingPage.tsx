import React from 'react'
import { LandingNavbar } from './LandingNavbar'
import { LandingHero } from './LandingHero'
import { LandingCategories } from './LandingCategories'
import { LandingFeaturedRestaurants } from './LandingFeaturedRestaurants'
import { LandingHowItWorks } from './LandingHowItWorks'
import { LandingFinalCTA } from './LandingFinalCTA'
import { LandingFooter } from './LandingFooter'

/**
 * ARO — Neo-Brutalism × Hand-Drawn Sketch × Food Photography
 * Landing Page Redesign
 *
 * Combines:
 * - Structural Neo-Brutalism: Bold display typography, 2-3px black borders, hard offset shadows,
 *   warm cream paper canvas, tactile button physics.
 * - Personality Hand-Drawn Sketch: Organic wavy underlines, hand-drawn curved arrows,
 *   food doodles (chillies, biryani handi, fork/spoon), washi-tape stickers, handwritten annotations.
 * - Appetite Food Photography: High-definition, authentic Hyderabadi Dum Biryani, crisp Ghee Dosas,
 *   Robata & Smash burgers, wood-fired pizza, momos and desserts.
 */
export const CinematicLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#FAF6EE] text-[#121212] flex flex-col justify-between overflow-x-hidden selection:bg-[#FFD13B] selection:text-[#121212] paper-grid">
      {/* 1. Distinctive Neo-Brutalist Navigation */}
      <LandingNavbar />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section: Jaw-dropping food photography & bold typography */}
        <LandingHero />

        {/* 3. Food Discovery & Categories */}
        <LandingCategories />

        {/* 4. Featured Culinary Heavyweights & Masterpiece Dishes */}
        <LandingFeaturedRestaurants />

        {/* 5. How ARO Works: 3-Step Process */}
        <LandingHowItWorks />

        {/* 6. High-Contrast Final Call To Action */}
        <LandingFinalCTA />
      </main>

      {/* 7. Comprehensive Neo-Brutalist Footer */}
      <LandingFooter />
    </div>
  )
}

export default CinematicLandingPage
