'use client'
import { Phone, Mail, MapPin, User } from 'lucide-react'
import { useSettings } from '@/lib/SettingsProvider'

export default function ContactInfo() {
  const settings = useSettings()

  return (
    <div className="space-y-4 text-[color:var(--nav-text)]">
      <h3>{settings?.companyName}</h3>

      {settings.contactPerson && <div className="flex items-center gap-3">
        <User />
        <span>{settings.contactPerson}</span>
      </div>}

      {settings.phone && <div className="flex items-center gap-3">
        <Phone />
        <span>{settings.phone}</span>
      </div>}

      {settings.email && <div className="flex items-center gap-3">
        <Mail />
        <span>{settings.email}</span>
      </div>}

      {settings.location && <div className="flex items-center gap-3">
        <MapPin />
        <span>{settings.location}</span>
      </div>}
    </div>
  )
}
