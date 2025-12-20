import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { ContactInfoProps } from './types'

export default function ContactInfo({
  name,
  phone,
  email,
  location,
}: ContactInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{name}</h3>

      <div className="flex items-center gap-3">
        <FiPhone />
        <span>{phone}</span>
      </div>

      <div className="flex items-center gap-3">
        <FiMail />
        <span>{email}</span>
      </div>

      <div className="flex items-center gap-3">
        <FiMapPin />
        <span>{location}</span>
      </div>
    </div>
  )
}
