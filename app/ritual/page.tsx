import Card from "@/components/Card/Card"
import { Alex_Brush } from "next/font/google"
import { CardProps } from "@/components/Card/Card"
import getServices from "../libs/services"
import loadingImage from "@/public/images/tarot-loading-unscreen.gif"
import Image from "next/image"
import { colors } from "@/utils/colors"

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"]
})

export default async function Servicios() {
  const services = await getServices()
  const rituals = services.filter(
    (reading: CardProps) => reading.type === "ritual"
  )

  if (!services || services.length === 0) {
    return (
      <div className="flex justify-center items-center w-full">
        <Image src={loadingImage} alt="Cargando..." />
      </div>
    )
  }

  return (
    <div className="p-[1rem] w-full">
      <h2 className={`text-5xl mt-[1rem] ${alexBrush.className}`}>Rituales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mt-[1rem]">
        {rituals.map((ritual: CardProps, index: number) => {
          const colorClass: string = colors[index % colors.length]
          return (
            <Card
              key={ritual.id}
              id={ritual.id}
              title={ritual.title}
              shortDescription={ritual.shortDescription}
              description={ritual.description}
              price={ritual.price}
              image={ritual?.image}
              type={ritual.type}
              color={colorClass}
            />
          )
        })}
      </div>
    </div>
  )
}
