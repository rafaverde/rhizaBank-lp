import Image, { ImageProps } from "next/image"

interface ContentBoxIcon extends ImageProps {
  title: string
}

export function ContentBoxIcon({ src, alt, title }: ContentBoxIcon) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={src} alt={alt} />
      <h3 className="mt-1 text-center text-sm text-wrap md:text-xs lg:text-lg leading-4">
        {title}
      </h3>
    </div>
  )
}
