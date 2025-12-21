export type NavItem = {
  _key: string
  label: string
  href: string
  isPrimary?: boolean
}

export type HeaderProps = {
  navigation: NavItem[]
}

export type FooterProps = {
  navigation: NavItem[]
}

export type LogoProps = {
  type: "header" | "footer"
}

