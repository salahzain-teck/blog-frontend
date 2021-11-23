import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image,width, style }) => {
  const { url, alternativeText } = image

  const loader = () => {
 
    return getStrapiMedia(image)
    // return `http://localhost:1337/articles/image `

}

  return (
    <NextImage
      loader={loader}
  
      layout="responsive"
      width={image.width}
      height={image.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
