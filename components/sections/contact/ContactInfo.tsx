'use client'
import { Phone, Mail, MapPin, User } from 'lucide-react'
import { useSettings } from '@/lib/SettingsProvider'

export default function ContactInfo() {
  const settings = useSettings()
  const contactInfoList = [{
    text: settings.contactPerson,
    icon: User,
  }, {
    text: settings.phone,
    icon: Phone,
  }, {
    text: settings.email,
    icon: Mail,
  }, {
    text: settings.location,
    icon: MapPin,
  }]

  return (
    <div className="space-y-4 text-[color:var(--nav-text)]">
      <h3>{settings?.companyName}</h3>

      {contactInfoList.map((item, index) => (
        item.text && <div key={index} className="flex items-center gap-3">
          <item.icon className="h-4 w-4 mt-0.5 opacity-80" />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  )
}
