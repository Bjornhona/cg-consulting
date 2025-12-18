'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from './types'
import clsx from 'clsx'

export default function NavLink({
  item,
  onClick,
}: {
  item: NavItem
  onClick?: () => void
}) {
  const pathname = usePathname()
  const isActive = pathname === item.href

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={clsx(
        'transition-colors',
        item.isPrimary
          ? 'btn-primary'
          : 'text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]',
        isActive && !item.isPrimary && 'text-[color:var(--nav-text-hover)]'
      )}
    >
      {item.label}
    </Link>
  )
}
