import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import { ContactInfoProps } from './types'

export default function ContactSection({ contactInfo }: { contactInfo: ContactInfoProps }) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ContactForm />
        <ContactInfo {...contactInfo} />
      </div>
    </section>
  )
}
