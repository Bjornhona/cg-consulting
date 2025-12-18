import { NavItem } from '../types'
import NavLink from '../NavLink'

export default function FooterNav({ navigation }: { navigation: NavItem[] }) {
  return (
    <nav className="flex flex-wrap gap-4 sm:justify-end h-16 items-center">
      {navigation.map(item => (
        <NavLink key={item.href} item={item} />
      ))}
    </nav>
  )
}
