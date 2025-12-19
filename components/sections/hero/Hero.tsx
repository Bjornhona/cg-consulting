import { HeroProps } from './types'
import HeroPrimary from '@/components/sections/hero/HeroPrimary'
import HeroSecondary from '@/components/sections/hero/HeroSecondary'

const Hero = (props: HeroProps) => {  
  if (props.variant === 'primary') {
    return <HeroPrimary {...props} />
  }

  return <HeroSecondary {...props} />
}

export default Hero
