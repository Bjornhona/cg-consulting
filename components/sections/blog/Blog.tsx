import { SectionBlogPosts } from "@/types/sections"
import BlogItem from "./BlogItem"

const Blog = ({ title, description, blogPosts }: SectionBlogPosts) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((blogPost) => (
          <BlogItem key={blogPost.slug.current} {...blogPost} />
        ))}
      </div>
    </section>
  )
}

export default Blog
