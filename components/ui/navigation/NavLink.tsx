'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from '@/types/sanity'
import clsx from 'clsx'

export default function NavLink({
  item,
  onClick,
  variant,
}: {
  item: NavItem
  onClick?: () => void
  variant?: 'footer'
}) {
  const pathname = usePathname()
  const isActive = pathname === item.href
  const linkStyles = clsx(
    'transition-colors w-auto',
    item.isPrimary
      ? 'action-primary'
      : 'text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]',
    isActive && !item.isPrimary && 'text-[color:var(--nav-text-hover)]',
    variant === 'footer' && 'text-gray-medium hover:text-white',
    (variant === 'footer' && item.isPrimary) && 'hidden'
  )

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={linkStyles}
    >
      {item.label}
    </Link>
  )
}
