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

export default function Courses() {
  if (!WHATSAPPNUMBER || !BASEURL || !MESSAGE) {
    return null
  }
  const encodedMessage = encodeURIComponent(MESSAGE)
  const whatsappLink = `${BASEURL}?phone=${WHATSAPPNUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`
  return (
    <div className="relative w-full h-[calc(100svh-4rem)] flex justify-center items-center">
      <div className="text-center p-6 max-h-[90%]">
        <h1
          className={`${alexBrush.className} text-4xl sm:text-5xl md:text-6xl mb-6`}
        >
          Cursos Activos
        </h1>
        <p
          className={`${breeSerif.className} text-sm sm:text-base md:text-lg mb-4`}
        >
          <strong>Curso Completo de Tarot de Arcanos Mayores</strong>
          <br />
          Este curso te guiará a través del fascinante mundo de los arcanos
          mayores del tarot. Aprenderás su simbología profunda, ejercicios de
          intuición, y cómo realizar la limpieza, carga y consagración de tu
          mazo. Además, te enseñare cómo proteger y limpiar tu energía como
          practicante y te brindare tareas prácticas para afianzar tu
          aprendizaje.
          <br />
          <br />
          El curso está dividido en dos modalidades:
        </p>
        <ul className="text-sm sm:text-base md:text-lg list-disc list-inside mb-4">
          <li>
            <strong>Modalidad Inicial</strong>: Para aquellos que recién
            comienzan su camino en el tarot.
          </li>
          <li>
            <strong>Modalidad Media</strong>: Para quienes desean profundizar en
            su conocimiento y habilidades.
          </li>
        </ul>
        <p
          className={`${breeSerif.className} text-sm sm:text-base md:text-lg mb-4`}
        >
          El formato del curso es en PDF, tendrás acceso a mi asesoramiento
          mensual y acompañamiento en tu progreso. Para adquirirlo, envíame un
          mensaje a mi Whatsapp:{" "}
          <strong>
            {" "}
            <a
              href={whatsappLink}
              className={`${breeSerif.className} text-gray-500 hover:underline duration-300 ease-in-out`}
            >
              {" "}
              +54 9 341 346-1636
            </a>
          </strong>
          .
        </p>
      </div>
    </div>
  )
}
