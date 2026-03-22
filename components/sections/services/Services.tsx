"use client";

import { motion } from "framer-motion";
import { SectionServices } from "@/types/sections";
import ServiceCard from "./ServiceCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Services = ({ title, description, services }: SectionServices) => {
  return (
    <motion.section
      className="py-20 bg-soft"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 className="mb-4" variants={item}>
          {title}
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-12"
          variants={item}
        >
          {description}
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={container}
        >
          {services.map((service, index) => {
            const key = service._key ?? `${service.slug}-${index}`;
            return (
              <motion.div key={key} variants={item}>
                <ServiceCard service={service}  />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
