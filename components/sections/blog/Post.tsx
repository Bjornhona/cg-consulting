import { PostItemProps } from "./types"

const Post = ({ title, description, slug, excerpt, publishedAt }: PostItemProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Post
