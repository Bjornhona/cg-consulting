import Link from "next/link"
import { BlogItemProps } from "./types"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

const BlogItem = ({ title, slug, excerpt, publishedAt, coverImage }: BlogItemProps) => {
  console.log(slug)
  console.log(title)
  console.log(excerpt)
  console.log(publishedAt)
  return (
    <div>
      {coverImage && <Image src={urlFor(coverImage).width(100).height(100).url()} alt={title} width={100} height={100} />}
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <p>Published on {new Date(publishedAt).toLocaleDateString()}</p>
      <Link href={`/blog/${slug.current}`}>
        <p>Read post</p>
      </Link>
    </div>
  )
}

export default BlogItem
