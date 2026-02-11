import Image from "next/image";
import image from "@/public/cg-consulting-background.webp";

const Background = () => {
  return (
    // <div className="bg-gradient-to-b from-primary to-secondary">
    <div>
      {/* <Image src={urlFor(image).width(2000).quality(85).url()} alt="Background" width={1000} height={1000} /> */}
      {/* <div className="absolute inset-0 z-[-50] left-50% right-50% translate-x-[-50%] translate-y-[-50%] w-full h-full"> */}
      <Image src={image} alt="Background" fill className="blur-lg absolute -z-50 -translate-x-1/2 inset-x-1/2 -inset-y-full w-[2353px] h-[1969px] object-cover max-w-[unset]" />
    </div>
  )
}

export default Background;
