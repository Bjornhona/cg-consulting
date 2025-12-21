import FooterNav from "./FooterNav"
import { FooterProps } from "../types"
import Logo from "../Logo"
import NavLink from "../NavLink"
import { NavItem } from "../types"

const Footer = ({ navigation }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const legalNavigation: NavItem[] = [
    { _key: "legal-notice", href: "/legal-notice", label: "Aviso Legal" },
    { _key: "politica-de-privacidad", href: "/privacy-policy", label: "Política de Privacidad" },
    { _key: "politica-de-cookies", href: "/cookies-policy", label: "Política de Cookies" },
  ]

  return (
    <footer className="bg-gray-dark" data-theme="dark">
      <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo type="footer" />
        <FooterNav navigation={navigation} />
        <nav className="flex gap-4 items-center">
          {legalNavigation.map(item => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>
      </div>
      <div className="flex flex-wrap justify-center items-center bg-gray-black py-2">
          <p className="ml-4">&copy; {currentYear} <a href="https://graphicsbyasa.com/" className="btn-primary hover:btn-primary-hover" target="_blank">Graphics by Åsa</a>. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
