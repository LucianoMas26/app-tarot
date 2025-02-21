import { Alex_Brush, Bree_Serif } from "next/font/google"

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"]
})

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"]
})

export default function About() {
  return (
    <div className="relative w-full h-[calc(100vh-4rem)] flex justify-center items-center">
      <div className="text-center p-6 max-h-[90%]">
        <h1
          className={`${alexBrush.className} text-4xl sm:text-5xl md:text-6xl mb-6`}
        >
          ¿Quién soy?
        </h1>
        <p
          className={`${breeSerif.className} text-sm sm:text-md md:text-lg mb-4`}
        >
          Soy Luzem, medium de nacimiento, y desde temprana edad he mantenido
          una conexión profunda con el mundo espiritual, desarrollando esta
          habilidad para ponerla al servicio de quienes lo necesiten. Mi
          herramienta principal es el tarot, con el cual realizo lecturas
          especiales que van más allá de lo predictivo, incluyendo lecturas de
          vidas pasadas a través del registro akáshico. Mi especialidad son las
          canalizaciones de seres queridos, así como las conexiones con maestros
          espirituales y seres de luz. Esta relación con los seres ascendidos me
          permite realizar limpiezas energéticas potentes y otros rituales que
          se especifican en la sección de &quot;Rituales&quot;. Como profesora
          titulada en materias pedagógicas, también imparto clases de tarot y
          mediumnidad, que podrás encontrar en la sección de &quot;Cursos&quot;.
          Mi misión es acompañarte en tu camino espiritual, actuando como el
          medio entre los mensajes que el universo tiene para ti y tus
          necesidades espirituales.
        </p>
      </div>
    </div>
  )
}
