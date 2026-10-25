import React from 'react'

interface BrandSealProps {
  text?: string
  subtext?: string
  className?: string
}

export const BrandSeal: React.FC<BrandSealProps> = ({
  text = 'ARO ASSURED • FRESH FROM KITCHEN •',
  subtext = '100% CULINARY',
  className = '',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-28 h-28 rounded-full border-[1.5px] border-dashed border-[var(--dp-color-accent)] text-[var(--dp-color-ink)] p-2 select-none ${className}`}
      style={{ transform: 'rotate(-4deg)' }}
    >
      <svg className="w-full h-full animate-[spin_35s_linear_infinite]" viewBox="0 0 100 100">
        <path
          id="sealPath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[8.5px] uppercase font-['Outfit',sans-serif] font-bold tracking-[0.2em] fill-[var(--dp-color-accent)]">
          <textPath href="#sealPath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
        <span className="text-[10px] font-extrabold uppercase font-['Outfit',sans-serif] text-[var(--dp-color-ink)] tracking-wider leading-none">
          {subtext}
        </span>
        <span className="text-[8px] font-['Outfit',sans-serif] font-medium text-[var(--dp-color-ink-muted)] tracking-wider pt-0.5">
          EST. 2026
        </span>
      </div>
    </div>
  )
}

export default BrandSeal
