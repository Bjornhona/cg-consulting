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
        'text-sm font-medium transition-colors',
        isActive && 'text-black',
        !isActive && 'text-neutral-500 hover:text-black',
        item.isPrimary && 'btn-primary'
      )}
    >
      {item.label}
    </Link>
  )
}
