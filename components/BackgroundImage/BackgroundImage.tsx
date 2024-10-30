import Image from "next/image"
import background from "@/public/images/universo.jpg"

export const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 ">
      <Image
        src={background}
        className="brightness-50 object-cover"
        alt="Background"
        fill
        quality={100}
        priority
      />
    </div>
  )
}
