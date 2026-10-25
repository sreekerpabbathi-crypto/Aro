import React from 'react'
import { Utensils } from 'lucide-react'

interface ThreeFallbackProps {
  title?: string
  subtitle?: string
}

export const ThreeFallback: React.FC<ThreeFallbackProps> = ({
  title = 'Artisanal Culinary Presentation',
  subtitle = 'Crafted gastronomy, seasonal ingredients, and exquisite plating.',
}) => {
  return (
    <div className="relative w-full h-full min-h-[460px] rounded-2xl overflow-hidden bg-[var(--dp-color-scrap)] flex flex-col items-center justify-center p-8 text-center border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.1)]">
      {/* Culinary paper glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[var(--dp-color-highlight)]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[var(--dp-color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Styled Ceramic Plate Visual */}
      <div className="relative mb-6">
        <div className="w-28 h-28 rounded-full bg-[var(--dp-color-ground)] p-1 shadow-md border-[1.5px] border-[var(--dp-color-line)] flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] flex items-center justify-center relative overflow-hidden">
            <Utensils className="w-7 h-7 text-[var(--dp-color-accent)]" />
          </div>
        </div>
        <div className="absolute -inset-2 rounded-full border border-dashed border-[var(--dp-color-accent)]/40 animate-[spin_40s_linear_infinite]" />
      </div>

      <h3 className="text-xl font-extrabold text-[var(--dp-color-ink)] tracking-tight mb-2 font-['Outfit',sans-serif]">
        {title}
      </h3>
      <p className="text-sm font-['Outfit',sans-serif] text-[var(--dp-color-ink-muted)] max-w-sm leading-relaxed">
        {subtitle}
      </p>
    </div>
  )
}

export default ThreeFallback
