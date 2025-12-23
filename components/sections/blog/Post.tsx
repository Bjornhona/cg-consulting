'use client'
import { motion } from "framer-motion"
import { PortableText } from "next-sanity"
import { BlogPostProps } from "./types"
import Link from "next/link"

const BlogPost = ({
  title,
  excerpt,
  publishedAt,
  content
}: BlogPostProps) => {
  const backToBlogLink = (
    <Link
      href="/blog"
      className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors"
    >
      ← Volver al blog
    </Link>
  )

  return (
    <article className="bg-soft">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6 py-20"
      >
        <div className="mb-6">
          {backToBlogLink}
        </div>

        <span className="text-sm text-gray-medium">
          {new Date(publishedAt).toLocaleDateString()}
        </span>

        <h1 className="mt-3 mb-6 text-4xl font-semibold">
          {title}
        </h1>

        {excerpt && (
          <p className="mb-10 text-lg text-gray-medium leading-relaxed">
            {excerpt}
          </p>
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={content} />
        </div>

        <div className="mt-10">
          {backToBlogLink}
        </div>
      </motion.div>
    </article>
  )
}

export default BlogPost
