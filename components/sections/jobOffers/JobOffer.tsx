import { JobOfferType } from "@/types/sanity"
import { PortableText } from "next-sanity"

const JobOffer = ({ title, location, contractType, publishedAt, content }: JobOfferType) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{location}</p>
      <p>{contractType}</p>
      <p>{publishedAt}</p>
      <PortableText value={content} />
    </div>
  )
}

export default JobOffer
