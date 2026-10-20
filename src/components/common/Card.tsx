import React from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'surface' | 'glass' | 'glow'
  interactive?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'surface', interactive = false, children, ...props }, ref) => {
    const variantStyles = {
      surface: 'bg-[#121418] border border-[#262a34]',
      glass: 'glass-panel',
      glow: 'glass-panel-glow',
    }

    return (
      <motion.div
        ref={ref}
        whileHover={interactive ? { y: -3, transition: { duration: 0.2 } } : undefined}
        className={cn(
          'rounded-2xl p-6 transition-shadow',
          interactive && 'hover:border-[#ff5733]/40 cursor-pointer shadow-xl hover:shadow-[#ff5733]/5',
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
