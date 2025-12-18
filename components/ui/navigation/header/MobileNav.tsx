'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavLink from '../NavLink'
import type { NavItem } from '../types'

export default function MobileNav({ navigation }: { navigation: NavItem[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>Menu</button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full w-full bg-white"
          >
            <ul className="flex flex-col gap-6 p-6">
              {navigation.map((item, index) => (
                <NavLink
                  key={index}
                  item={item}
                  onClick={() => setOpen(false)}
                />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
