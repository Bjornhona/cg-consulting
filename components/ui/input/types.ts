export type InputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
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
