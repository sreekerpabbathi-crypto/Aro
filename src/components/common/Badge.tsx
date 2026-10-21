import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'veg' | 'nonveg' | 'accent' | 'rating' | 'orange'
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212]',
    veg: 'bg-[#E8F8F0] text-[#059669] border-2 border-[#121212] shadow-[2px_2px_0px_#121212]',
    nonveg: 'bg-[#FEECEB] text-[#DC2626] border-2 border-[#121212] shadow-[2px_2px_0px_#121212]',
    accent: 'bg-[#FFF4C2] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212]',
    rating: 'bg-[#FFD13B] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212]',
    orange: 'bg-[#FF650D] text-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-black font-[\'Oswald\'] uppercase tracking-wider select-none',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
