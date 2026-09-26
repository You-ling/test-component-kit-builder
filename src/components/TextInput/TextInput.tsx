import { type InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Shows a red border to signal invalid input. */
  error?: boolean
}

export function TextInput({
  error = false,
  disabled = false,
  type = 'text',
  className = '',
  ...props
}: TextInputProps) {
  // Hover/focus thicken the 1px border with an inset shadow so the layout doesn't shift.
  const base =
    'h-10 w-full rounded-full border bg-transparent px-md font-body font-light text-sm text-text-default placeholder:text-text-muted outline-none transition-shadow disabled:cursor-not-allowed disabled:bg-surface-disabled disabled:text-text-muted'

  const borders = error
    ? 'border-feedback-error enabled:hover:shadow-[inset_0_0_0_1px_var(--color-feedback-error)] focus:shadow-[inset_0_0_0_1px_var(--color-feedback-error)]'
    : 'border-border-default enabled:hover:border-brand-primary enabled:hover:shadow-[inset_0_0_0_1px_var(--color-brand-primary)] focus:border-brand-primary focus:shadow-[inset_0_0_0_1px_var(--color-brand-primary)]'

  return (
    <input
      type={type}
      disabled={disabled}
      aria-invalid={error || undefined}
      className={`${base} ${borders} ${className}`}
      {...props}
    />
  )
}
