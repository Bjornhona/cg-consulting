import { FiPhone, FiMail, FiMapPin, FiUser } from 'react-icons/fi'
import { ContactInfoProps } from './types'

export default function ContactInfo({
  companyName,
  contactPerson,
  phone,
  email,
  location,
}: ContactInfoProps) {
  return (
    <div className="space-y-4">
      <h3>{companyName}</h3>

      <div className="flex items-center gap-3">
        <FiUser />
        <span>{contactPerson}</span>
      </div>

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
