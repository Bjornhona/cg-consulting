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
  variant?: 'footer' | 'mobile'
}) {
  const pathname = usePathname()
  const isActive = pathname === item.href
  const linkStyles = clsx(
    'inline-flex w-max min-w-0 items-center whitespace-normal transition-colors',
    item.isPrimary && variant !== 'footer' && variant !== 'mobile'
      ? 'action-primary'
      : 'text-nav-text hover:text-nav-text-hover',
    isActive && !item.isPrimary && variant !== 'footer' && 'text-nav-text-hover',
    (variant === 'footer' && item.isPrimary) && 'hidden'
  )

  const handleLinkClick = () => {
    trackEvent(EVENTS.NAVIGATION_CLICK, {
      location: variant === 'footer' ? "footer_navigation" : "header_navigation",
      label: item.label,
    });
    if (onClick) onClick();  
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
