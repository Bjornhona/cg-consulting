import NavLink from '../NavLink'
import type { NavItem } from '../types'

export default function DesktopNav({ navigation }: { navigation: NavItem[] }) {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navigation.map((item, index) => (
        <NavLink key={index} item={item} />
      ))}
    </nav>
  )
}
