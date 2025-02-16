import { Alex_Brush } from "next/font/google"
import { breeSerif } from "../page"

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Turnos() {
  return (
    <div className="relative w-full h-[calc(100svh-4rem)]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center p-6  max-h-[90%]">
        <h1
          className={`${alexBrush.className} text-2xl sm:text-3xl md:text-6xl mb-6`}
        >
          Reserva de Turnos
        </h1>
        <p
          className={`${breeSerif.className} text-sm sm:text-base md:text-lg mb-4`}
        >
          ¡Bienvenid@ a mi espacio espiritual! Si deseas reservar un turno,
          simplemente envíame un mensaje por WhatsApp al
          <a
            href="https://wa.me/1234567890"
            className={`${breeSerif.className} text-gray-500 hover:underline duration-300 ease-in-out`}
          >
            {" "}
            +54 9 341 346-1636
          </a>
          .
        </p>
        <p
          className={`${breeSerif.className} hidden sm:block text-sm sm:text-base md:text-lg mb-4`}
        >
          Al contactarme, por favor incluye tu nombre, el servicio que deseas y
          tu disponibilidad. Esto me ayudará a programar tu cita de manera
          armoniosa.
        </p>
        <p
          className={`${breeSerif.className} text-sm sm:text-base md:text-lg mt-4`}
        >
          Estoy aquí para guiarte en tu camino espiritual y ofrecerte una
          experiencia transformadora. ¡Espero poder ayudarte pronto!
        </p>
      </div>
    </div>
  )
}
