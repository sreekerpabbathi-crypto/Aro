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
      surface: 'bg-white border-2 sm:border-[2.5px] border-[#121212] shadow-[4px_4px_0px_#121212] text-[#121212]',
      brutal: 'bg-white border-2 sm:border-[2.5px] border-[#121212] shadow-[4px_4px_0px_#121212] text-[#121212]',
      paper: 'bg-[#FAF6EE] border-2 sm:border-[2.5px] border-[#121212] shadow-[4px_4px_0px_#121212] text-[#121212]',
      glass: 'bg-white/95 backdrop-blur-md border-2 border-[#121212] shadow-[4px_4px_0px_#121212] text-[#121212]',
      glow: 'bg-[#FFF4C2] border-2 sm:border-[2.5px] border-[#121212] shadow-[4px_4px_0px_#121212] text-[#121212]',
    }

    return (
      <motion.div
        ref={ref}
        whileHover={interactive ? { x: -2, y: -2, transition: { duration: 0.1 } } : undefined}
        whileTap={interactive ? { x: 1, y: 1, transition: { duration: 0.05 } } : undefined}
        className={cn(
          'rounded-2xl p-6 transition-all',
          interactive && 'hover:shadow-[6px_6px_0px_#121212] active:shadow-[1px_1px_0px_#121212] cursor-pointer',
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
