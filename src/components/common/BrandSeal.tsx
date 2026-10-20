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
      className={`relative inline-flex items-center justify-center w-28 h-28 rounded-full border-2 border-dashed border-[#FF650D] text-[#FFF0D5] p-2 select-none ${className}`}
      style={{ transform: 'rotate(-6deg)' }}
    >
      <svg className="w-full h-full animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100">
        <path
          id="sealPath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[8.5px] uppercase font-['Oswald'] tracking-[0.22em] fill-[#FF650D] font-bold">
          <textPath href="#sealPath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
        <span className="text-[10px] font-black uppercase font-['Oswald'] text-[#FFF0D5] tracking-widest leading-none">
          {subtext}
        </span>
        <span className="text-[7px] text-[#A89A97] tracking-wider pt-0.5">
          EST. 2026
        </span>
      </div>
    </div>
  )
}

export default BrandSeal
