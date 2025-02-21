import { Alex_Brush, Bree_Serif } from "next/font/google"
const { WHATSAPPNUMBER, MESSAGE, BASEURL } = process.env

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"]
})

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Turnos() {
  if (!WHATSAPPNUMBER || !BASEURL || !MESSAGE) {
    return null
  }
  const encodedMessage = encodeURIComponent(MESSAGE)
  const whatsappLink = `${BASEURL}?phone=${WHATSAPPNUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`

  return (
    <div className="relative w-full h-[calc(100svh-4rem)]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center p-6  max-h-[90%]">
        <h1
          className={`${alexBrush.className} text-4xl sm:text-5xl md:text-6xl mb-6`}
        >
          Reserva de Turnos
        </h1>
        <p
          className={`${breeSerif.className} text-sm sm:text-base md:text-lg mb-4`}
        >
          Estoy aquí para guiarte en tu camino espiritual y ofrecerte un
          ambiente seguro de respeto y amor.
          <br />
          Para reservar un turno, escribime a mi WhatsApp
          <a
            href={whatsappLink}
            className="text-gray-500 hover:underline duration-300 ease-in-out"
          >
            {" "}
            +54 9 341 346-1636
          </a>
          .
        </p>
        <p
          className={`${breeSerif.className} text-sm sm:text-base md:text-lg mb-4`}
        >
          Al contactarme, por favor incluye tu nombre, el servicio que deseas y
          tu disponibilidad.
        </p>
      </div>
    </div>
  )
}
