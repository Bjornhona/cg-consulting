import HeroPrimary from '@/components/sections/hero/HeroPrimaryFullImage'
import HeroSecondary from '@/components/sections/hero/HeroSecondary'
import { SectionHero } from '@/types/sections'

const Hero = (props: SectionHero) => {  
  if (props.variant === 'primary') {
    return <HeroPrimary {...props} />
  }

  return <HeroSecondary {...props} />
}

export default Hero
