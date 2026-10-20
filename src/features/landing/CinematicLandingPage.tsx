import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Compass, Sparkles, MapPin } from 'lucide-react'
import { HeroCulinaryShowcase } from './HeroCulinaryShowcase'
import { Button } from '@/components/common/Button'

export const CinematicLandingPage: React.FC = () => {
  const navigate = useNavigate()

  const handleEnterStore = () => {
    navigate('/home')
  }

  const handleBrowseRestaurants = () => {
    navigate('/restaurants')
  }

  return (
    <div className="relative min-h-screen w-full bg-[#211A19] text-[#FFF0D5] flex flex-col justify-between overflow-hidden selection:bg-[#FF650D]/30 selection:text-white">
      {/* Background Editorial Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#641820]/40 via-[#FF650D]/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#E9432E]/10 blur-[130px] pointer-events-none -z-10" />

      {/* =================================================================== */}
      {/* 1. TOP EDITORIAL BRAND HEADER                                       */}
      {/* =================================================================== */}
      <header className="w-full z-20 px-6 sm:px-10 lg:px-16 pt-8 pb-4 flex items-center justify-between border-b border-[#4D3F3C]/40">
        <div
          className="flex items-center gap-3.5 group cursor-pointer"
          onClick={handleEnterStore}
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF650D] via-[#E9432E] to-[#641820] p-0.5 shadow-xl shadow-[#FF650D]/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#211A19] rounded-[10px] flex items-center justify-center">
              <span className="text-[#FF650D] font-black text-xl font-['Oswald'] tracking-wider">
                A
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#FFF0D5] font-['Outfit'] group-hover:text-[#FF650D] transition-colors leading-none">
              ARO
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#A89A97] font-medium font-['Oswald'] pt-1">
              Hyderabad Gastronomy
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E2423] border border-[#4D3F3C] text-xs text-[#A89A97]">
            <MapPin className="w-3.5 h-3.5 text-[#FF650D]" />
            <span className="text-white font-medium">Hyderabad</span>
            <span className="text-[#4D3F3C]">•</span>
            <span className="text-emerald-400 font-semibold">Fine Dining Delivery</span>
          </div>

          <button
            type="button"
            onClick={handleEnterStore}
            className="flex items-center gap-2 text-xs font-bold text-white px-4 py-2 rounded-xl bg-[#641820] hover:bg-[#7D1E28] border border-[#FF650D]/40 transition-all cursor-pointer shadow-md"
          >
            <span>Enter Storefront</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF650D]" />
          </button>
        </div>
      </header>

      {/* =================================================================== */}
      {/* 2. CINEMATIC HERO & 3D FOCAL OBJECT                                 */}
      {/* =================================================================== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 flex items-center py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          {/* Brand copy column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-7"
          >
            {/* Tagline Pill & Brand Seal in tandem */}
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E2423] border border-[#FF650D]/30 text-xs text-[#FFF0D5]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF650D]" />
                <span className="font-bold tracking-wide uppercase font-['Oswald'] text-[11px] text-[#FF650D]">
                  Curated Haute Gastronomy
                </span>
              </div>
            </div>

            {/* Headline with Fraunces serif typeface */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white font-['Fraunces'] leading-[1.05]">
                Good food.{' '}
                <span className="text-[#FF650D] italic">
                  Beautifully found.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#A89A97] max-w-lg leading-relaxed pt-2 font-normal">
                An intentional curation of exceptional kitchens, artisanal culinary craft, and seasonal degustations — delivered with dining-room thermal precision to your table.
              </p>
            </div>

            {/* Culinary Values */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#FFF0D5]/90 pt-1 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF650D]" />
                Direct Chef Partnerships
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF650D]" />
                Thermal Pod Logistics
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF650D]" />
                Seasonal Menus
              </span>
            </div>

            {/* Primary Calls to Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={handleEnterStore}
                className="px-8 py-4 text-base font-bold shadow-2xl shadow-[#FF650D]/30 hover:shadow-[#FF650D]/50 cursor-pointer"
              >
                Start Your Order →
              </Button>

              <Button
                size="lg"
                variant="secondary"
                leftIcon={<Compass className="w-4 h-4 text-[#FF650D]" />}
                onClick={handleBrowseRestaurants}
                className="px-7 py-4 text-base font-semibold cursor-pointer border-[#4D3F3C] hover:border-[#FF650D]"
              >
                Explore Ateliers
              </Button>
            </div>
          </motion.div>

          {/* Focal Luxury Culinary Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full flex items-center justify-center"
          >
            <HeroCulinaryShowcase onExplore={handleBrowseRestaurants} />
          </motion.div>
        </div>
      </main>

      {/* =================================================================== */}
      {/* 3. SUBTLE BOTTOM EDITORIAL FOOTER                                   */}
      {/* =================================================================== */}
      <footer className="w-full z-20 px-6 sm:px-10 lg:px-16 py-6 border-t border-[#4D3F3C]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A89A97]">
        <div className="flex items-center gap-4">
          <span className="text-white font-medium">ARO Fine Dining</span>
          <span className="text-[#4D3F3C]">•</span>
          <span>Jubilee Hills • Banjara Hills • HITEC City • Gachibowli</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#A89A97]">
          <span>Curated Culinary Ateliers • Temperature-Controlled Transport</span>
        </div>
      </footer>
    </div>
  )
}

export default CinematicLandingPage
