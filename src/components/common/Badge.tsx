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
    default:
      'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)]',
    veg:
      'bg-[var(--dp-color-scrap)] text-[#2d5f3e] border-[1.5px] border-[#2d5f3e]/60 shadow-[1px_1px_0px_rgba(45,95,62,0.2)]',
    nonveg:
      'bg-[var(--dp-color-scrap)] text-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-accent)] shadow-[1px_1px_0px_rgba(158,58,46,0.2)]',
    accent:
      'bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)]',
    rating:
      'bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)]',
    orange:
      'bg-[var(--dp-color-accent)] text-white border-[1.5px] border-[var(--dp-color-accent)] shadow-[1px_1px_0px_var(--dp-color-ink)]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider select-none',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
