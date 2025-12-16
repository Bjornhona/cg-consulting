import { HeadingProps } from '@/types/ui'

export function Heading({ level = 2, children }: HeadingProps) {
  const Tag = `h${level}` as const
  return <Tag>{children}</Tag>
}
