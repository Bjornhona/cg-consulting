"use client";
import { SectionBlogPosts } from "@/types/sections";
import BlogItem from "./BlogItem";
import { motion } from "framer-motion";

const Blog = ({ title, description, blogPosts }: SectionBlogPosts) => {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="mb-4">{title}</h2>
          <p className="text-gray-medium">{description}</p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((blogPost, index) => (
            <BlogItem key={blogPost.slug.current} {...blogPost} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
