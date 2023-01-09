
interface ImageSrc {
   variant?:'bg'|'md'|'sm'
  image: string | undefined
  alt: string | undefined
}
export const Image = ({ variant, image, alt }: ImageSrc) => {
    return (
        <>
            <img className={variant} src={image} alt={alt} />
        </>
    )
}
