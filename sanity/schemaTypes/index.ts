import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { page } from './page'
import { sectionHero } from './sectionHero'
import { sectionServices } from './sectionServices'
import { sectionTestimonials } from './sectionTestimonials'
import { sectionCTA } from './sectionCTA'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, page, sectionHero, sectionServices, sectionTestimonials, sectionCTA],
}
