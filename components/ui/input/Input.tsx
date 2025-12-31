'use client'
import clsx from 'clsx'
import { InputProps } from './types'

const Input = ({
  value,
  onChange,
  label,
  name,
  type = 'text',
  required,
  placeholder,
  error,
  tabIndex,
  autoComplete,
  className,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          'rounded-md border border-gray-light px-4 py-2',
          'focus:outline-none focus:ring-2 focus:ring-primary',
          className
        )}
        tabIndex={tabIndex}
        autoComplete={autoComplete}
      />
      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  )
}

export default Input;
