"use client";
import Link from "next/link";
import Image from "next/image";
import { BlogItemProps } from "./types";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import cloudImage from "@/components/sections/blog/cabecera_1.jpg";

const BlogItem = ({
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage,
  index,
}: BlogItemProps) => {
  const imageSrc = coverImage
    ? urlFor(coverImage).width(800).height(500).quality(85).url()
    : cloudImage.src;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="
        group relative h-full
        rounded-xl border border-gray-light
        bg-white overflow-hidden
        shadow-sm transition
        hover:-translate-y-1 hover:shadow-md"
    >
      {/* Click overlay */}
      <Link href={`/blog/${slug.current}`} className="absolute inset-0 z-10" />

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <time className="text-xs text-gray-medium">
          {new Date(publishedAt).toLocaleDateString("es-ES")}
        </time>

        <h3 className="text-lg font-semibold leading-snug">{title}</h3>

        <p className="text-sm text-gray-medium line-clamp-3">{excerpt}</p>

        <span className="mt-auto text-sm font-semibold text-primary">
          Leer artículo →
        </span>
      </div>
    </motion.article>
  );
};

export default BlogItem;
