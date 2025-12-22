import { SectionCards } from "@/types/sections"
import Card from "@/components/ui/Card"

const Cards = ({ title, description, cards }: SectionCards) => {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            {title}
          </h2>

          {description && (
            <p className="text-gray-medium">
              {description}
            </p>
          )}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
