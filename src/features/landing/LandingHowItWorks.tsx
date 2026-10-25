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
  icon: React.ReactNode
  sketchNote: string
  illustration: React.ReactNode
}

const STEPS: StepItem[] = [
  {
    number: '1',
    title: 'Discover & Crave',
    description:
      'Filter authentic Hyderabad kitchens by culinary technique, dietary preference, and real dish ingredients. No generic fast-food clones.',
    badgeText: 'CURATED KITCHENS',
    icon: <Search className="w-5 h-5 text-[var(--dp-color-ink)]" />,
    sketchNote: 'Biryani, dosas, robata & more!',
    illustration: <BiryaniPotDoodle className="w-10 h-10 text-[var(--dp-color-accent)]" />,
  },
  {
    number: '2',
    title: 'Customize Your Dish',
    description:
      'Tailor spice intensity, accompaniments, bread pairings, and dietary requests with our item customization pass.',
    badgeText: 'CHEF CUSTOMIZATION',
    icon: <Sliders className="w-5 h-5 text-[var(--dp-color-ink)]" />,
    sketchNote: 'Adjust spice from mild to Guntur Teja!',
    illustration: <ChilliDoodle className="w-8 h-8 text-[var(--dp-color-accent)]" />,
  },
  {
    number: '3',
    title: 'Checkout & Track',
    description:
      'Place your order and follow courier progress via live GPS telematics. Packed in temperature-regulated thermal pods to arrive piping hot.',
    badgeText: 'THERMAL TRANSIT',
    icon: <ShieldCheck className="w-5 h-5 text-[var(--dp-color-ink)]" />,
    sketchNote: 'Hot food stays steaming hot!',
    illustration: <ForkSpoonDoodle className="w-8 h-8 text-[var(--dp-color-ink)]" />,
  },
]

export const LandingHowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[var(--dp-color-ground)] border-t-[1.5px] border-[var(--dp-color-line)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-[var(--dp-radius-control)] shadow-[1px_1px_0px_var(--dp-color-line)] -rotate-1">
            <span className="font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-wider text-[var(--dp-color-annotation)]">
              Three Clean Steps
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] tracking-tight">
            HOW ARO DISPATCHES{' '}
            <span className="relative inline-block text-[var(--dp-color-accent)]">
              YOUR FEAST
              <span className="absolute -bottom-2 left-0 w-full block">
                <ScribbleUnderline className="w-full h-3.5 text-[var(--dp-color-accent)]" />
              </span>
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--dp-color-ink-muted)] pt-2 font-normal font-['Outfit',sans-serif]">
            From the moment your craving hits to the first steaming bite at your table.
          </p>
        </div>

        {/* 3 Step Cards Grid with connector arrows */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Desktop curved connector arrow between 1-2 and 2-3 */}
              {idx < STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-10 z-20 pointer-events-none transform translate-x-1/2">
                  <StepConnectorArrow className="w-16 lg:w-20 h-10 text-[var(--dp-color-line)]" />
                </div>
              )}

              {/* Step Card on irregular working sheet mount */}
              <div className="h-full bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 sm:p-7 shadow-[2px_2px_0px_rgba(56,53,47,0.12)] flex flex-col justify-between hover:border-[var(--dp-color-ink)] hover:shadow-[3px_3px_0px_rgba(56,53,47,0.18)] hover:-translate-y-0.5 transition-all">
                <div>
                  {/* Top Header: Circled Step Number & Illustration */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Circled Number */}
                    <div className="w-12 h-12 rounded-full border-[1.5px] border-[var(--dp-color-ink)] flex items-center justify-center font-['Outfit',sans-serif] font-black text-xl bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)]">
                      {step.number}
                    </div>

                    <div className="p-2 bg-[var(--dp-color-ground)] rounded-lg border-[1.5px] border-[var(--dp-color-line)]">
                      {step.illustration}
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase font-['Outfit',sans-serif] tracking-wider rounded border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] mb-2.5">
                    {step.badgeText}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] leading-relaxed font-normal font-['Outfit',sans-serif]">
                    {step.description}
                  </p>
                </div>

                {/* Hand-Drawn Sketch Note */}
                <div className="pt-6 mt-4 border-t-[1.5px] border-[var(--dp-color-line)]/50 flex items-center gap-2">
                  <span className="font-['Caveat',cursive] text-base font-bold text-[var(--dp-color-annotation)]">
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
