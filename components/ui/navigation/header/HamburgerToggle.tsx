'use client'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

type HamburgerToggleProps = {
  isOpen: boolean
  toggle: () => void
}

const HamburgerToggle = forwardRef<HTMLButtonElement | null, HamburgerToggleProps>(({ isOpen, toggle }, ref) => {
  return (
    <button
      ref={ref}
      onClick={toggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className="flex flex-col justify-center items-center w-10 h-10 relative"
    >
      {/* Top line */}
      <motion.span
        className="block absolute h-0.5 w-6 bg-black rounded"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -6 }}
        transition={{ duration: 0.3 }}
      />
      {/* Middle line */}
      <motion.span
        className="block absolute h-0.5 w-6 bg-black rounded"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      {/* Bottom line */}
      <motion.span
        className="block absolute h-0.5 w-6 bg-black rounded"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 6 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  )
})

HamburgerToggle.displayName = 'HamburgerToggle'
export default HamburgerToggle
