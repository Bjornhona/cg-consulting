import FooterNav from "./FooterNav"
import { FooterProps } from "../types"
import Logo from "../Logo"

const Footer = ({ navigation, logo, siteTitle }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-dark" data-theme="dark">
      <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo logo={logo} alt={siteTitle} />
        <FooterNav navigation={navigation} />
      </div>
      <div className="flex flex-wrap justify-center items-center bg-gray-black py-2">
          <p className="ml-4">&copy; {currentYear} <a href="https://graphicsbyasa.com/" className="btn-primary hover:btn-primary-hover" target="_blank">Graphics by Åsa</a>. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
