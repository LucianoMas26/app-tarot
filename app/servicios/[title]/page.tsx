import { getServiceByTitle } from "@/app/libs/getServiceByTitle"
import { CardProps } from "@/components/Card/Card"
import { Alex_Brush } from "next/font/google"

export const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"]
})

type Params = CardProps

export default async function ServiceDetail({ params }: { params: Params }) {
  const { title } = params

  const decodedTitle = decodeURIComponent(title)

  const service = await getServiceByTitle(decodedTitle)

  if (!service) {
    return (
      <div>
        <p>No se pudo cargar el servicio</p>
      </div>
    )
  }

  return (
    <div className="w-full h-[calc(100svh-4rem)] relative flex items-center justify-center text-[#dc88d1]">
      <div className="absolute inset-0" />

      <div className="absolute text-center  space-y-8 mx-4 sm:mx-12 lg:mx-20 p-6 rounded-xl max-h-[90%] max-[246px]:h-full">
        <h1
          className={`${alexBrush.className} text-3xl sm:text-4xl md:text-6xl`}
        >
          {service.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg">{service.description}</p>
        <p className={`${alexBrush.className} text-2xl md:text-4xl `}>
          {`Valor: $${service.price}`}
        </p>
      </div>
    </div>
  )
}
