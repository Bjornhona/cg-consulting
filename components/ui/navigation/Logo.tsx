"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { LogoProps } from "./types";

export default function Logo({
  logo,
  alt = "Home",
  textFallback = "Tech Beach Studio",
}: LogoProps) {
  return (
    <Link href="/home" aria-label={alt} className="block w-auto max-w-xs">
      <motion.div
        whileHover={{ opacity: 0.85 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex items-center flex-shrink-0"
      >
        {logo ? (
          <Image
            src={urlFor(logo).width(320).quality(90).url()}
            alt={alt}
            width={320}
            height={96}
            className="h-12 w-auto object-contain"
            priority
          />
        ) : (
          <h3>{textFallback}</h3>
        )}
      </motion.div>
    </Link>
  );
}
