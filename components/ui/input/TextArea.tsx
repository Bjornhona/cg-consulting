'use client'
import { TextareaProps } from './types'

const Textarea = ({
  value,
  onChange,
  label,
  name,
  required,
  placeholder,
  rows = 4,
}: TextareaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-md border border-gray-light px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  )
}

export default Textarea;
