import { type ButtonHTMLAttributes, type ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  /** Icon shown before the label, e.g. `<HomeIcon className="w-4 h-4" />` — size it yourself via className. */
  leftIcon?: ReactNode
  /** Icon shown after the label, e.g. `<HomeIcon className="w-4 h-4" />` — size it yourself via className. */
  rightIcon?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border font-body font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    primary: 'border-brand-primary bg-brand-primary text-text-inverse hover:border-brand-hover hover:bg-brand-hover',
    secondary: 'border-brand-primary bg-transparent text-brand-primary hover:bg-brand-subtle',
    ghost: 'border-transparent bg-transparent text-brand-primary hover:bg-brand-subtle',
  }

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}
