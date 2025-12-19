"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineUserGroup, HiOutlineAcademicCap } from "react-icons/hi2";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { IconType } from "react-icons";
import { Service } from "@/types/sanity";

const iconMap = {
  selection: HiOutlineUserGroup,
  evaluation: HiOutlineClipboardCheck,
  workshops: HiOutlineAcademicCap,
};

const ServiceCard = ({ service, index }: { service: Service, index: number }) => {
  const Icon: IconType = iconMap[service.icon] || HiOutlineClipboardCheck;

  return (
    <motion.div
      key={index}
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
      >
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
          <Icon size={24} />
        </div>

        <h3 className="mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        <p className="mb-6">{service.description}</p>

        <span className="inline-flex items-center text-sm font-medium text-primary">
          Ver servicio →
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
