import React from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'brutal' | 'brutal-secondary' | 'brutal-yellow'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-[var(--dp-radius-control)] transition-all duration-100 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[var(--dp-color-annotation)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer'

    const variantStyles = {
      primary:
        'bg-[var(--dp-color-accent)] text-white border-[1.5px] border-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-ink)] hover:bg-[#852f25] hover:rotate-[-0.5deg] hover:shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[0px_0px_0px_transparent] active:rotate-0',
      secondary:
        'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-line)] hover:bg-[var(--dp-color-ground)] hover:rotate-[-0.5deg] hover:shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[0px_0px_0px_transparent] active:rotate-0',
      outline:
        'border-[1.5px] border-[var(--dp-color-line)] bg-transparent text-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] hover:bg-[var(--dp-color-scrap)] hover:shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0px_0px_0px_transparent]',
      ghost:
        'text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-line)]/20 active:scale-[0.98]',
      glass:
        'bg-[var(--dp-color-scrap)]/95 backdrop-blur-sm text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.12)] hover:border-[var(--dp-color-ink)]',
      brutal:
        'bg-[var(--dp-color-accent)] text-white border-[1.5px] border-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-ink)] hover:bg-[#852f25] hover:rotate-[-0.5deg] hover:shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[0px_0px_0px_transparent] active:rotate-0',
      'brutal-secondary':
        'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-line)] hover:bg-[var(--dp-color-ground)] hover:rotate-[-0.5deg] hover:shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[0px_0px_0px_transparent] active:rotate-0',
      'brutal-yellow':
        'bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)] hover:bg-[#ebd995] hover:rotate-[-0.5deg] hover:shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[0px_0px_0px_transparent] active:rotate-0',
    }

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-medium',
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export default Button
