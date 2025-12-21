import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default function ContactSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  )
}
