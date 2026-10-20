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
    <div className="relative w-full h-full min-h-[460px] rounded-3xl overflow-hidden glass-panel flex flex-col items-center justify-center p-8 text-center border border-white/10">
      {/* Culinary ambient glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#ff5733]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Styled Ceramic Plate Visual */}
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#1a1d24] via-[#262a34] to-[#121418] p-1 shadow-2xl shadow-black/80 border border-white/10 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#121418] border border-[#ff5733]/30 flex items-center justify-center relative overflow-hidden">
            {/* Saucier swirl suggestion */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5733]/20 via-transparent to-amber-500/20" />
            <Utensils className="w-8 h-8 text-[#ff5733]" />
          </div>
        </div>
        <div className="absolute -inset-2 rounded-full border border-dashed border-[#ff5733]/20 animate-[spin_30s_linear_infinite]" />
      </div>

      <h3 className="text-xl font-semibold text-white tracking-tight mb-2 font-['Outfit']">
        {title}
      </h3>
      <p className="text-sm text-[#8e95a5] max-w-sm leading-relaxed">
        {subtitle}
      </p>
    </div>
  )
}
