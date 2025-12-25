import NavLink from '../NavLink'
import type { NavItem } from '@/types/sanity'
import NavDropdown from '@/components/ui/navigation/NavDropdown'

const DesktopNav = ({ navigation }: { navigation: NavItem[] }) => {
  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
      {navigation.map((item, index) => (
        item.children?.length ? (
          <NavDropdown key={index} item={item} />
        ) : (
          <NavLink key={index} item={item} />
        )
      ))}
    </nav>
  )
}

export default DesktopNav
