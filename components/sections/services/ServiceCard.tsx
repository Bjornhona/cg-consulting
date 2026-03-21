"use client";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Users, ClipboardCheck, GraduationCap, LucideIcon } from 'lucide-react'
import { Service } from "@/types/sanity";
import { EVENTS, trackEvent } from "@/lib/tracking";
import { useTranslations } from 'next-intl';

const iconMap = {
  selection: Users,
  evaluation: ClipboardCheck,
  workshops: GraduationCap,
};

const ServiceCard = ({ service, index }: { service: Service, index: number }) => {
  const t = useTranslations('common');
  const Icon: LucideIcon = iconMap[service.icon] || ClipboardCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link
        href={`/services/${service.slug}`}
        className="block h-full rounded-xl border border-gray-light bg-white p-8 text-left transition-shadow hover:shadow-lg"
        onClick={() => {
          trackEvent(EVENTS.CTA_CLICK, {
            location: "service_card",
            label: service.title,
          });
        }}
      >
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
          <Icon size={24} />
        </div>

        <h3 className="mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        <p className="mb-6">{service.description}</p>

        <span className="inline-flex items-center text-sm font-medium text-primary">
          {t("seeService")} →
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
