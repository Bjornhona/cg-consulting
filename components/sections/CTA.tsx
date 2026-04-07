'use client'
import { motion } from 'framer-motion'
import { SectionCTA } from '@/types/sections'
import Button from '@/components/ui/button/Button'
import { PortableText } from 'next-sanity'
import { EVENTS, trackEvent } from '@/lib/tracking'
import { useRouter } from '@/i18n/navigation'

export default function CTA({
  headline,
  text,
  primaryCta,
  secondaryCta,
  darkBackground,
}: SectionCTA) {
  const router = useRouter()
  const onPrimaryCtaClick = () => {
    if (primaryCta) {
      trackEvent(EVENTS.CTA_CLICK, {
        location: "cta_section",
        label: primaryCta.label,
      });
      router.push(primaryCta.href);
    }
  }
  const onSecondaryCtaClick = () => {
    if (secondaryCta) {
      trackEvent(EVENTS.CTA_CLICK, {
        location: "cta_section",
        label: secondaryCta.label,
      });
      router.push(secondaryCta.href);
    }
  }

  return (
    <section className={`relative overflow-hidden ${darkBackground ? 'bg-soft' : ''}`}>
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-4"
        >
          {headline}
        </motion.h2>

        {text && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <PortableText value={text} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {primaryCta && (
            <Button
              variant="primary"
              size="lg"
              onClick={onPrimaryCtaClick}
            >
              {primaryCta.label}
            </Button>
          )}

          {secondaryCta && (
            <Button
              variant="secondary"
              size="lg"
              onClick={onSecondaryCtaClick}
            >
              {secondaryCta.label}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
