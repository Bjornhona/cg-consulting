import FooterNav from "./FooterNav"
import { FooterProps } from "../types"

const Footer = ({ navigation }: FooterProps) => {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <FooterNav navigation={navigation} />
      </div>
    </footer>
  )
}

export default Footer
