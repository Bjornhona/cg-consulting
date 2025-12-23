import { getBlogPosts } from "@/sanity/queries"
import BlogSection from "@/components/sections/blog/Blog"
// import Hero from "@/components/sections/hero/Hero"

const BlogPage = async () => {
  const title = 'Blog'
  const description = 'Descubre nuestras últimas noticias y artículos'
  const limit = 12
  const blogPosts = await getBlogPosts(limit)
  // const heroData = {
  //   headline: 'Blog Post',
  //   subheadline: 'Descubre nuestras últimas noticias y artículos',
  //   // image: '/images/blog/hero.jpg',
  // }

  return (
    <>
      {/* <Hero {...heroData} /> */}
      <BlogSection
        _type="sectionBlogPosts"
        title={title}
        description={description}
        blogPosts={blogPosts}
      />
    </>
  )
}

export default BlogPage
