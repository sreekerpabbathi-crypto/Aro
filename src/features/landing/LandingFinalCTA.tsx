import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, UtensilsCrossed, Sparkles } from 'lucide-react'
import {
  ChilliDoodle,
  BiryaniPotDoodle,
  ForkSpoonDoodle,
  StarSparkleDoodle,
  WashiTape,
} from '@/components/sketch/SketchDoodles'

export const LandingFinalCTA: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="py-16 sm:py-24 bg-[var(--dp-color-ground)] border-t-[1.5px] border-[var(--dp-color-line)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Working Sheet Call To Action Sheet */}
        <div className="relative bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-8 sm:p-12 lg:p-16 shadow-[3px_3px_0px_var(--dp-color-ink)] overflow-hidden">
          {/* Taped reference strip */}
          <div className="absolute top-4 left-6 z-20">
            <WashiTape text="★ HYDERABAD FEAST PASS" angle="-2deg" className="bg-[var(--dp-color-highlight)]/80" />
          </div>

          {/* Background decorative doodles */}
          <div className="absolute -bottom-6 -right-6 opacity-15 pointer-events-none hidden sm:block rotate-12">
            <BiryaniPotDoodle className="w-40 h-40 text-[var(--dp-color-accent)]" />
          </div>
          <div className="absolute top-6 right-10 opacity-20 pointer-events-none hidden md:block">
            <StarSparkleDoodle className="w-14 h-14 text-[var(--dp-color-highlight)]" />
          </div>
          <div className="absolute bottom-6 left-1/3 opacity-15 pointer-events-none hidden lg:block -rotate-45">
            <ChilliDoodle className="w-12 h-12 text-[var(--dp-color-accent)]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--dp-color-ground)] text-[var(--dp-color-annotation)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider rounded-[var(--dp-radius-control)] border-[1.5px] border-[var(--dp-color-line)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
              <span>Dinner Is Solved</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] leading-[1.08] tracking-tight">
              STOP SCROLLING.{' '}
              <br />
              <span className="text-[var(--dp-color-accent)]">YOUR TABLE IS WAITING.</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--dp-color-ink-muted)] max-w-xl font-normal leading-relaxed font-['Outfit',sans-serif]">
              Order from Hyderabad&apos;s leading culinary ateliers right now. Piping hot biryanis, crispy dosas, charcoal robata, and wood-fired pizzas delivered straight to you.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/restaurants')}
                className="px-8 py-4 bg-[var(--dp-color-accent)] text-white font-medium text-base rounded-[var(--dp-radius-control)] border-[1.5px] border-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-ink)] hover:bg-[#852f25] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2.5px_2.5px_0px_var(--dp-color-ink)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span className="font-['Outfit',sans-serif] font-bold">Explore All Restaurants</span>
                <ArrowRight className="w-4 h-4 text-[var(--dp-color-highlight)] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/home')}
                className="px-7 py-4 bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] font-medium text-base rounded-[var(--dp-radius-control)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_var(--dp-color-ink)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-[var(--dp-color-annotation)]" />
                <span className="font-['Outfit',sans-serif] font-bold">Open Storefront</span>
              </button>
            </div>

            {/* Sketch footnote */}
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-[var(--dp-color-ink-muted)]">
              <ForkSpoonDoodle className="w-4 h-4 text-[var(--dp-color-ink)]" />
              <span className="font-['Caveat',cursive] text-lg text-[var(--dp-color-annotation)] font-bold">
                Average courier dispatch within 8 minutes of chef completion.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingFinalCTA
