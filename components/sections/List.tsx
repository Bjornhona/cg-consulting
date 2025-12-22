'use client'

import { SectionList } from "@/types/sections"
import { ListItem } from "@/types/sanity"
import { motion } from "framer-motion"

const List = ({ title, description, listItems }: SectionList) => {
  return (
    <section style={{ background: 'var(--bg-gradient-soft)' }}>
      <div className="mx-auto max-w-5xl px-6 py-20">

        {/* Header */}
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-gray-medium max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* List */}
        <ul className="space-y-6">
          {listItems?.map((item: ListItem, index: number) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="
                flex gap-4
                rounded-xl
                border border-gray-light
                bg-white
                p-6
                shadow-sm
              "
            >
              {/* Accent */}
              <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />

              {/* Content */}
              <div>
                {item.title && (
                  <h3 className="font-semibold mb-1">
                    {item.title}
                  </h3>
                )}
                {item.text && (
                  <p className="text-gray-medium leading-relaxed">
                    {item.text}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default List
