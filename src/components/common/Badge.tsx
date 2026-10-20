import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'veg' | 'nonveg' | 'accent' | 'rating'
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-[#1a1d24] text-[#8e95a5] border-white/5',
    veg: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20',
    nonveg: 'bg-rose-950/40 text-rose-400 border-rose-500/20',
    accent: 'bg-[#ff5733]/10 text-[#ff7854] border-[#ff5733]/20',
    rating: 'bg-amber-950/40 text-amber-400 border-amber-500/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
