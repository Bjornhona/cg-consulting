'use client'
import { motion } from 'framer-motion'
import Logo from '../Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import type { HeaderProps } from '../types'

const Header = ({ navigation, logo, siteTitle }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b-light-gray shadow-md"
    >
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Logo logo={logo} alt={siteTitle} />
        <DesktopNav navigation={navigation} />
        <MobileNav navigation={navigation} />
      </div>
    </motion.header>
  )
}

export default Header
