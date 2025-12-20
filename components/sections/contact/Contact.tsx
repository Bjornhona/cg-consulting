import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default function ContactSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ContactForm />
        <ContactInfo
          name="CG Consulting"
          phone="+34 600 123 456"
          email="info@cg-consulting.es"
          location="28001 Madrid"
        />
      </div>
    </section>
  )
}
