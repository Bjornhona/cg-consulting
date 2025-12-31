"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { SectionHero } from "@/types/sections";

export default function HeroSecondary({
  headline,
  subheadline,
  image,
  staticImageSrc,
}: SectionHero) {
  const hasImage = Boolean(image || staticImageSrc);

  return (
    <section
      className={`relative overflow-hidden border-b border-gray-light min-h-[40vh] flex items-center justify-center`}
      data-theme={hasImage ? "dark" : undefined}
    >
      {/* Background image */}
      {(image || staticImageSrc) && (
        <div className="absolute inset-0">
          {image && (
            <Image
              src={urlFor(image!).quality(85).url()}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              className="object-cover"
            />
          )}
          {!image && staticImageSrc && (
            <Image
              src={staticImageSrc}
              alt=""
              fill
              priority={false}
              className="object-cover"
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/10" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-4"
        >
          {headline}
        </motion.h1>

        {subheadline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className={"max-w-2xl mx-auto"}
          >
            <PortableText value={subheadline} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
