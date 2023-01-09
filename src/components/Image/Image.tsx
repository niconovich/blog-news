
interface ImageSrc {
  image: string | undefined
  alt: string | undefined
}
export const Image = ({ image, alt }: ImageSrc) => {
    return (
        <>
            <img src={image} alt={alt} />
        </>
    )
}
