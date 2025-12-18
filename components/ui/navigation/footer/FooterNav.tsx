import { NavItem } from '../types'
import NavLink from '../NavLink'

export default function FooterNav({ navigation }: { navigation: NavItem[] }) {
  return (
    <nav className="flex flex-wrap gap-6">
      {navigation.map(item => (
        <NavLink key={item.href} item={item} />
      ))}
    </nav>
  )
}
