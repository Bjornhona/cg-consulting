import { NavItem } from '@/types/sanity'
import NavLink from '../NavLink'

const FooterNav = ({ navigation }: { navigation: NavItem[] }) => {
  
  return (
    <nav className="flex flex-col gap-3">
      {navigation.map(item => (
        <NavLink key={item.href} item={item} variant="footer" />
      ))}
    </nav>
  )
}

export default FooterNav
