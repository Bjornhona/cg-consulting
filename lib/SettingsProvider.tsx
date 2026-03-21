'use client'
import { createContext, useContext } from 'react'
import type { Settings } from '@/types/sanity'

const SettingsContext = createContext<Settings | null>(null)

export function SettingsProvider({
  settings,
  children,
}: {
  settings: Settings | null
  children: React.ReactNode
}) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  return context
}
