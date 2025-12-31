export type InputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  error?: string;
  tabIndex?: number
  autoComplete?: string
  className?: string
}

export type TextareaProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  label: string
  name: string
  required?: boolean
  placeholder?: string
  rows?: number
}

export interface RadioButtonsProps {
  purpose: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
