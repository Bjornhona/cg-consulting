import { NavItem } from '../types'
import NavLink from '../NavLink'

export default function FooterNav({ navigation }: { navigation: NavItem[] }) {
  
  return (
    <nav className="flex flex-col gap-3">
      {navigation.map(item => (
        <NavLink key={item.href} item={item} variant="footer" />
      ))}
    </nav>
  )
}
