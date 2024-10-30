"use client"

import { StaticImageData } from "next/image"
import { FC } from "react"
import { Bona_Nova, Alex_Brush } from "next/font/google"
import Link from "next/link"

const bonanova = Bona_Nova({ subsets: ["latin"], weight: ["400", "700"] })
const lobster = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"]
})
export interface CardProps {
  id: string
  title: string
  shortDescription: string
  description: string
  price: number
  color: string
  image: StaticImageData
  type: string
}

const Card: FC<CardProps> = ({ title, shortDescription, color, image }) => {
  return (
    <Link
      href={`/servicios/${encodeURIComponent(title)}`}
      className="w-full h-56 px-4 py-8 m-2 flex flex-col justify-center items-center rounded-lg overflow-hidden drop-shadow-lg "
    >
      <div
        style={{ backgroundColor: color }}
        className="w-full h-full flex items-center justify-center rounded-lg p-4 transition duration-200 ease-in hover:brightness-90"
      >
        <div
          className={`text-white text-base lg:text-2xl break-words text-center ${bonanova.className}`}
        >
          <span className=" text-large lg:text-3xl">{title.charAt(0)}</span>
          {title.slice(1)}
        </div>
      </div>
    </Link>
  )
}

export default Card
{
  /* <Image
        src={image}
        alt={shortDescription}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        className="rounded-lg object-cover brightness-50"
        loading="lazy"
      />
      <div
        style={{
          background: `linear-gradient(to right, ${color}, transparent)`
        }}
        className="absolute inset-0 rounded-lg"
      ></div>

      <div
        className={`text-white text-4xl z-10 w-full ml-[2rem] uppercase break-words ${bonanova.className}`}
      >
        <span className="text-6xl">{title.charAt(0)}</span>
        {title.slice(1)}
      </div> */
}
