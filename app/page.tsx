import Image from "next/image"
import cartas from "@/public/images/file.png"
import { Alex_Brush, Bree_Serif } from "next/font/google"
import Head from "next/head"
import Footer from "@/components/Footer/Footer"

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"]
})

export const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Luzem | Home Page</title>
        <meta name="description" content="Luzem" />
      </Head>
      <div className="relative w-full h-[calc(100svh-4rem)]">
        <div className="relative z-10 flex flex-col-reverse sm:flex-row sm:justify-around items-center h-[80%]  sm:h-full w-full gap-6 md:gap-0">
          <div className="text-center flex flex-col gap-6 sm:items-start">
            <div
              className={`${alexBrush.className} text-5xl sm:text-5xl lg:text-8xl `}
            >
              Luzem
            </div>
            <div
              className={`${breeSerif.className} text-md sm:text-lg lg:text-xl`}
            >
              Tarot y Magia
            </div>
          </div>
          <div className="levitate">
            <Image
              className="relative w-[12rem] sm:w-[16rem] lg:w-[18rem]"
              src={cartas}
              alt="cartas"
              priority
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
