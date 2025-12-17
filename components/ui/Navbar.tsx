'use client'
import Link from 'next/link'
// import { motion } from 'framer-motion'
import { NavItem } from '@/types/sanity'
import { usePathname } from 'next/navigation'

export default function Navbar({ items }: { items: NavItem[] }) {
  const pathname = usePathname()
  const linkClassName = (item: NavItem) => `${item.isPrimary ? 'btn-primary' : 'nav-link'} ${(!item.isPrimary && pathname === '/' + item.href) ? 'active' : ''}`

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={linkClassName(item)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}