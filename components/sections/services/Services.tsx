import { SectionServices } from '@/types/sections'
import ServiceCard from './ServiceCard'

const Services = ({ title, description, services }: SectionServices) => {
  return (
    <section className="py-20 bg-soft">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="mb-4">{title}</h2>
        <p className="max-w-2xl mx-auto mb-12">
          {description}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            return <ServiceCard key={service.slug} service={service} index={index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
