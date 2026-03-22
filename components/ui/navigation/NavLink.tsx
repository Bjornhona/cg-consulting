'use client'
import { usePathname, Link } from "@/i18n/navigation";
import { EVENTS, trackEvent } from "@/lib/tracking";
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
    'inline-flex w-max min-w-0 items-center whitespace-normal transition-colors',
    item.isPrimary && variant !== 'footer'
      ? 'action-primary'
      : 'text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]',
    isActive && !item.isPrimary && 'text-[color:var(--nav-text-hover)]',
    variant === 'footer' && 'text-gray-medium hover:text-white',
    (variant === 'footer' && item.isPrimary) && 'hidden'
  )

  const handleLinkClick = () => {
    if (onClick) {
      onClick();
    }
    trackEvent(EVENTS.NAVIGATION_CLICK, {
      location: variant === 'footer' ? "footer_navigation" : "header_navigation",
      label: item.label,
    });
  }

  return (
    <Link
      href={item.href}
      onClick={handleLinkClick}
      className={linkStyles}
    >
      {item.label}
    </Link>
  )
}
