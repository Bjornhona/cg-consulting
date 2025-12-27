'use client'
import { motion } from 'framer-motion'
import Logo from '../Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { NavItem } from '@/types/sanity'

const Header = ({ navigation }: { navigation: NavItem[] }) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="sticky top-0 z-150 bg-background/80 backdrop-blur border-b-gray-light shadow-md"
    >
      <div className="mx-auto max-w-7xl px-4 h-20 sm:h-16 flex items-center justify-between gap-4">
        <Logo type="header" />
        <DesktopNav navigation={navigation} />
        <MobileNav navigation={navigation} />
      </div>
    </motion.header>
  )
}

export default Header
