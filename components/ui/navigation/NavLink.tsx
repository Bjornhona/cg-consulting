// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import type { NavItem } from './types'

// export default function NavLink({ item }: { item: NavItem }) {
//   return (
//     <Link href={item.href} className="relative text-sm font-medium">
//       <span className="relative z-10">{item.label}</span>

//       <motion.span
//         layoutId="nav-underline"
//         className="absolute left-0 -bottom-1 h-[2px] w-full bg-black origin-left"
//         initial={{ scaleX: 0 }}
//         whileHover={{ scaleX: 1 }}
//         transition={{ duration: 0.25, ease: 'easeOut' }}
//       />
//     </Link>
//   )
// }

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from '../types'
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
