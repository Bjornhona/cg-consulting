'use client'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import clsx from 'clsx'
import { ButtonProps, ButtonVariant, ButtonSize } from './types'

const baseStyles =
  'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:bg-[var(--btn-primary-hover)] shadow-md',
  secondary:
    'bg-white text-[var(--btn-primary-bg)] border border-[var(--btn-primary-bg)] hover:text-[var(--btn-primary-hover)] hover:border-[var(--btn-primary-hover)] shadow-sm',
  ghost:
    'bg-transparent text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={!disabled ? { y: -1 } : undefined}
        whileTap={!disabled ? { scale: 0.97 } : undefined}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export default Button
