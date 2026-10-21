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
    <section className="py-16 sm:py-24 bg-[#FAF6EE] border-t-[2.5px] border-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Bold Color-Blocked Box */}
        <div className="relative bg-[#FFD13B] border-[3px] border-[#121212] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[8px_8px_0px_#121212] overflow-hidden">
          {/* Washi tape sticker */}
          <div className="absolute top-4 left-6 z-20">
            <WashiTape text="★ HYDERABAD FEAST PASS" angle="-3deg" className="bg-white border-2 border-[#121212]" />
          </div>

          {/* Background decorative doodles */}
          <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none hidden sm:block rotate-12">
            <BiryaniPotDoodle className="w-40 h-40 text-[#121212]" />
          </div>
          <div className="absolute top-6 right-10 opacity-25 pointer-events-none hidden md:block">
            <StarSparkleDoodle className="w-16 h-16 text-[#FF650D]" />
          </div>
          <div className="absolute bottom-6 left-1/3 opacity-20 pointer-events-none hidden lg:block -rotate-45">
            <ChilliDoodle className="w-14 h-14 text-[#EF4444]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] text-[#FFD13B] text-xs font-black uppercase font-['Oswald'] tracking-wider rounded-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dinner Is Solved</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] text-[#121212] leading-[1.05] tracking-tight">
              STOP SCROLLING.{' '}
              <br />
              <span className="text-[#FF650D]">YOUR TABLE IS WAITING.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#121212]/90 max-w-xl font-medium leading-relaxed">
              Order from Hyderabad&apos;s leading culinary ateliers right now. Piping hot biryanis, crispy dosas, charcoal robata, and wood-fired pizzas delivered straight to you.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/restaurants')}
                className="px-8 py-4 bg-[#FF650D] text-white font-black text-base uppercase tracking-wider font-['Oswald'] rounded-xl border-2 border-[#121212] shadow-[5px_5px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_#121212] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span>Explore All Restaurants</span>
                <ArrowRight className="w-5 h-5 text-[#FFD13B] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/home')}
                className="px-7 py-4 bg-white text-[#121212] font-black text-base uppercase tracking-wider font-['Oswald'] rounded-xl border-2 border-[#121212] shadow-[4px_4px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#121212] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#FF650D]" />
                <span>Open Storefront</span>
              </button>
            </div>

            {/* Sketch footnote */}
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#121212]">
              <ForkSpoonDoodle className="w-4 h-4 text-[#121212]" />
              <span className="font-['Caveat'] text-lg text-[#121212]">
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
