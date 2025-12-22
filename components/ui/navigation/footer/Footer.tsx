'use client'
import FooterNav from "./FooterNav"
import { FooterProps } from "../types"
import Logo from "../Logo"
import NavLink from "../NavLink"
import { NavItem } from "../types"
import ContactInfo from "@/components/sections/contact/ContactInfo"
import { useSettings } from "@/lib/SettingsProvider"
import SocialMediaNav from "../SocialMediaNav"

const Footer = ({ navigation }: FooterProps) => {
  const settings = useSettings()
  const currentYear = new Date().getFullYear();

  const legalNavigation: NavItem[] = [
    { _key: "legal-notice", href: "/legal-notice", label: "Aviso Legal" },
    { _key: "politica-de-privacidad", href: "/privacy-policy", label: "Política de Privacidad" },
    { _key: "politica-de-cookies", href: "/cookies-policy", label: "Política de Cookies" },
  ]

  return (
    <footer className="bg-gray-dark" data-theme="dark">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        
        <div className="space-y-4">
          <Logo type="footer" />
          <p className="text-sm text-gray-medium max-w-xs">
            {settings.siteDescription}
          </p>
          <SocialMediaNav />
        </div>

        <div>
          <FooterNav navigation={navigation} />
        </div>

        <div>
          <nav className="flex flex-col gap-3">
            {legalNavigation.map(item => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>
        </div>

        <div>
          <ContactInfo />
        </div>
      </div>

      <div className="border-t border-gray-light/10 py-3 text-center text-xs text-gray-medium">
        © {currentYear} {settings.siteTitle} |{" Created by "}
        <a
          href="https://graphicsbyasa.com/"
          target="_blank"
          className="hover:text-white transition-colors"
        >
          Graphics by Åsa
        </a>
      </div>
    </footer>
  )
}

export default Footer
