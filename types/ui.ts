import { ImageProps } from "next/image"

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

export type CardProps = {
  title: string
  description?: string
  image?: ImageProps
  index: number
}
