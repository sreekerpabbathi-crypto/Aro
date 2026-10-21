import React from 'react'
import { Search, Sliders, ShieldCheck } from 'lucide-react'
import {
  StepConnectorArrow,
  ScribbleUnderline,
  ChilliDoodle,
  BiryaniPotDoodle,
  ForkSpoonDoodle,
} from '@/components/sketch/SketchDoodles'

interface StepItem {
  number: string
  title: string
  description: string
  badgeText: string
  badgeColor: string
  icon: React.ReactNode
  sketchNote: string
  illustration: React.ReactNode
}

const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Discover & Crave',
    description:
      'Filter authentic Hyderabad kitchens by culinary technique, dietary preference, and real dish ingredients. No generic fast-food clones.',
    badgeText: 'CURATED KITCHENS',
    badgeColor: '#FFD13B',
    icon: <Search className="w-6 h-6 text-[#121212]" />,
    sketchNote: 'Biryani, dosas, robata & more!',
    illustration: <BiryaniPotDoodle className="w-12 h-12 text-[#FF650D]" />,
  },
  {
    number: '02',
    title: 'Customize Your Dish',
    description:
      'Tailor spice intensity, accompaniments, bread pairings, and dietary requests with our item customization pass.',
    badgeText: 'CHEF CUSTOMIZATION',
    badgeColor: '#FF650D',
    icon: <Sliders className="w-6 h-6 text-[#121212]" />,
    sketchNote: 'Adjust spice from mild to Guntur Teja!',
    illustration: <ChilliDoodle className="w-10 h-10 text-[#EF4444]" />,
  },
  {
    number: '03',
    title: 'Checkout & Track',
    description:
      'Place your order and follow courier progress via live GPS telematics. Packed in temperature-regulated thermal pods to arrive piping hot.',
    badgeText: 'THERMAL TRANSIT',
    badgeColor: '#10B981',
    icon: <ShieldCheck className="w-6 h-6 text-[#121212]" />,
    sketchNote: 'Hot food stays steaming hot!',
    illustration: <ForkSpoonDoodle className="w-10 h-10 text-[#121212]" />,
  },
]

export const LandingHowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#FAF6EE] border-t-[2.5px] border-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-[#121212] rounded-md shadow-[2px_2px_0px_#121212] -rotate-1">
            <span className="font-['Oswald'] text-xs font-black uppercase tracking-wider text-[#FF650D]">
              Three Dead-Simple Steps
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-[#121212] tracking-tight">
            HOW ARO DISPATCHES{' '}
            <span className="relative inline-block text-[#FF650D]">
              YOUR FEAST
              <span className="absolute -bottom-2 left-0 w-full block">
                <ScribbleUnderline className="w-full h-3.5 text-[#FFD13B]" />
              </span>
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E5854] pt-2 font-normal">
            From the moment your craving hits to the first steaming bite at your table.
          </p>
        </div>

        {/* 3 Step Cards Grid with connector arrows */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Desktop curved connector arrow between 1-2 and 2-3 */}
              {idx < STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-12 z-20 pointer-events-none transform translate-x-1/2">
                  <StepConnectorArrow className="w-16 lg:w-20 h-10 text-[#121212]" />
                </div>
              )}

              {/* Step Card */}
              <div className="h-full bg-white border-[2.5px] border-[#121212] rounded-2xl p-6 sm:p-7 shadow-[5px_5px_0px_#121212] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all">
                <div>
                  {/* Top Header: Step Number & Illustration */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Big Bold Step Number */}
                    <div
                      className="w-14 h-14 rounded-xl border-2 border-[#121212] flex items-center justify-center font-['Oswald'] font-black text-2xl shadow-[3px_3px_0px_#121212]"
                      style={{
                        backgroundColor: step.badgeColor,
                        color: step.badgeColor === '#FF650D' ? '#FFFFFF' : '#121212',
                      }}
                    >
                      {step.number}
                    </div>

                    <div className="p-2 bg-[#FAF6EE] rounded-lg border border-[#121212]/30">
                      {step.illustration}
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-black uppercase font-['Oswald'] tracking-wider rounded border border-[#121212] bg-[#FAF6EE] text-[#121212] mb-2.5">
                    {step.badgeText}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-[#121212] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5854] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Hand-Drawn Sketch Note */}
                <div className="pt-6 mt-4 border-t border-[#121212]/10 flex items-center gap-2">
                  <span className="font-['Caveat'] text-base font-bold text-[#FF650D]">
                    ✍️ {step.sketchNote}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LandingHowItWorks
