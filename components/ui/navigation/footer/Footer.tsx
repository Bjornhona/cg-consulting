import FooterNav from "./FooterNav"
import { FooterProps } from "../types"
import Logo from "../Logo"

const Footer = ({ navigation, logo, siteTitle }: FooterProps) => {
  return (
    <footer className="bg-gray-dark text-white" data-theme="dark">
      <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo logo={logo} alt={siteTitle} />
        <FooterNav navigation={navigation} />
      </div>
    </footer>
  )
}

export default Footer
