import React from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'surface' | 'glass' | 'glow' | 'brutal' | 'paper'
  interactive?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'surface', interactive = false, children, ...props }, ref) => {
    const variantStyles = {
      surface:
        'bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.12)] text-[var(--dp-color-ink)]',
      brutal:
        'bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)] text-[var(--dp-color-ink)]',
      paper:
        'bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.1)] text-[var(--dp-color-ink)]',
      glass:
        'bg-[var(--dp-color-scrap)]/95 backdrop-blur-sm border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.12)] text-[var(--dp-color-ink)]',
      glow:
        'bg-[var(--dp-color-highlight)]/30 border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.12)] text-[var(--dp-color-ink)]',
    }

    return (
      <motion.div
        ref={ref}
        whileHover={interactive ? { x: -1, y: -1, transition: { duration: 0.1 } } : undefined}
        whileTap={interactive ? { x: 1, y: 1, transition: { duration: 0.05 } } : undefined}
        className={cn(
          'rounded-2xl p-6 transition-all',
          interactive && 'hover:shadow-[3px_3px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] active:shadow-[1px_1px_0px_transparent] cursor-pointer',
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'
export default Card
