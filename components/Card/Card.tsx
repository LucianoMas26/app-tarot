"use client"

import { StaticImageData } from "next/image"
import { FC } from "react"
import Link from "next/link"
import { Bree_Serif } from "next/font/google"

const breeSerif = Bree_Serif({
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
  type: "reading" | "ritual"
}

const Card: FC<CardProps> = ({ title, color, type }) => {
  return (
    <Link
      href={`/${type}/${encodeURIComponent(title)}`}
      className="w-full h-56 px-4 py-8 m-2 flex flex-col justify-center items-center rounded-lg overflow-hidden drop-shadow-lg "
    >
      <div
        style={{ backgroundColor: color }}
        className="w-full h-full flex items-center justify-center rounded-lg p-4 transition duration-200 ease-in hover:brightness-90"
      >
        <div
          className={`text-white text-base lg:text-xl break-words text-center ${breeSerif.className}`}
        >
          <span className=" text-large lg:text-3xl">{title.charAt(0)}</span>
          {title.slice(1)}
        </div>
      </div>
    </Link>
  )
}

export default Card
