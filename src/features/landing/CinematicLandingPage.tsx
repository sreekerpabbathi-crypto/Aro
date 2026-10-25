import React from 'react'
import { LandingNavbar } from './LandingNavbar'
import { LandingHero } from './LandingHero'
import { LandingCategories } from './LandingCategories'
import { LandingFeaturedRestaurants } from './LandingFeaturedRestaurants'
import { LandingHowItWorks } from './LandingHowItWorks'
import { LandingFinalCTA } from './LandingFinalCTA'
import { LandingFooter } from './LandingFooter'

/**
 * ARO — Premium Sketch Working Sheet
 *
 * Restrained warm paper ground, handwritten reading text, heavy marker headings,
 * pencil-like fine strokes, blue notes, red key emphasis, and rare pale yellow highlights.
 */
export const CinematicLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] flex flex-col justify-between overflow-x-hidden selection:bg-[var(--dp-color-highlight)] selection:text-[var(--dp-color-ink)] paper-grid">
      {/* 1. Refined Working Sheet Navigation */}
      <LandingNavbar />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section: Open working sheet, large statement heading, taped reference */}
        <LandingHero />

        {/* 3. Food Discovery & Categories */}
        <LandingCategories />

        {/* 4. Featured Culinary Heavyweights & Masterpiece Dishes */}
        <LandingFeaturedRestaurants />

        {/* 5. How ARO Works: 3-Step Process on paper strip */}
        <LandingHowItWorks />

        {/* 6. Restrained Red Accent Call To Action */}
        <LandingFinalCTA />
      </main>

      {/* 7. Lightly Divided Working Sheet Footer */}
      <LandingFooter />
    </div>
  )
}

export default CinematicLandingPage
