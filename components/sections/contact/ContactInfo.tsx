'use client'
import { Phone, Mail, MapPin, User } from 'lucide-react'
import { useSettings } from '@/lib/SettingsProvider'

const DEFAULT_VISIBLE_CONTACT_INFO = ['contactPerson', 'phone', 'email', 'location']

const CONTACT_INFO_CONFIG = {
  contactPerson: { key: 'contactPerson' as const, icon: User },
  phone: { key: 'phone' as const, icon: Phone },
  email: { key: 'email' as const, icon: Mail },
  location: { key: 'location' as const, icon: MapPin },
}

type Props = {
  visibleContactInfo?: string[]
}

export default function ContactInfo({ visibleContactInfo = DEFAULT_VISIBLE_CONTACT_INFO }: Props) {
  const settings = useSettings()
  const fields = new Set(visibleContactInfo)

  const contactInfoList = (DEFAULT_VISIBLE_CONTACT_INFO as (keyof typeof CONTACT_INFO_CONFIG)[])
    .filter((key) => fields.has(key))
    .map((key) => ({
      text: settings?.[CONTACT_INFO_CONFIG[key].key],
      icon: CONTACT_INFO_CONFIG[key].icon,
    }))

  return (
    <div className="space-y-4 text-[color:var(--nav-text)]">
      <h3>{settings?.companyName}</h3>

      {contactInfoList.map((item, index) => (
        item.text && (
          <div key={index} className="flex items-center gap-3">
            <item.icon className="h-4 w-4 mt-0.5 opacity-80" />
            <p>{item.text}</p>
          </div>
        )
      ))}
    </div>
  )
}
