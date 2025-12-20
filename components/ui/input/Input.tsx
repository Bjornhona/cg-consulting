'use client'
import clsx from 'clsx'
import { InputProps } from './types'

export function Input({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={clsx(
          'rounded-md border border-gray-light px-4 py-2',
          'focus:outline-none focus:ring-2 focus:ring-primary'
        )}
      />
    </div>
  )
}
