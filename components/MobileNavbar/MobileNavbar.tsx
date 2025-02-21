import Link from "next/link"
import { Bree_Serif } from "next/font/google"

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"]
})

const MobileNavbar = ({ closeMobileNav }: { closeMobileNav: () => void }) => {
  return (
    <div
      className="fixed z-20 items-center justify-between w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul
        className={`${breeSerif.className} flex flex-col p-4 md:p-0 mt-1 rounded-lg bg-[#f9f9f9] text-[#dc88d1] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white shadow-xl`}
      >
        <li>
          <Link
            href="/"
            className="block py-2 px-3 duration-300 ease-in-out hover:bg-[#dc88d1] hover:text-white rounded"
            onClick={closeMobileNav}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 px-3 duration-300 ease-in-out hover:bg-[#dc88d1] hover:text-white rounded"
            onClick={closeMobileNav}
          >
            Sobre mi
          </Link>
        </li>
        <li>
          <Link
            href="/reading"
            className="block py-2 px-3 duration-300 ease-in-out hover:bg-[#dc88d1] hover:text-white rounded"
            onClick={closeMobileNav}
          >
            Lecturas
          </Link>
        </li>
        <li>
          <Link
            href="/ritual"
            className="block py-2 px-3 duration-300 ease-in-out hover:bg-[#dc88d1] hover:text-white rounded"
            onClick={closeMobileNav}
          >
            Rituales
          </Link>
        </li>
        <li>
          <Link
            href="/courses"
            className="block py-2 px-3 duration-300 ease-in-out hover:bg-[#dc88d1] hover:text-white rounded"
            onClick={closeMobileNav}
          >
            Cursos
          </Link>
        </li>
        <li>
          <Link
            href="/turnos"
            className="block py-2 px-3 duration-300 ease-in-out hover:bg-[#dc88d1] hover:text-white rounded"
            onClick={closeMobileNav}
          >
            Turnos
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNavbar
