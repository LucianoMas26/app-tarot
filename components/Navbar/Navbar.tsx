"use client"
import icon from "@/public/images/tarot-icon-removebg-preview.png"
import Image from "next/image"
import Link from "next/link"
import { alexBrush } from "@/app/page"
import MobileNavbar from "../MobileNavbar/MobileNavbar"
import { useState, useRef, useEffect } from "react"

export default function Navbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible)
  }

  const mobileNavRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileNavRef.current &&
      !mobileNavRef.current.contains(event.target as Node)
    ) {
      setIsMobileNavVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed bg-[#f9f9f9] w-full z-50 top-0 start-0 border-b border-[#dc88d1] drop-shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 ">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={icon} alt="Icon" width={40} height={40} />
          <span
            className={`${alexBrush.className} hidden sm:block self-center text-3xl text-[#dc88d1]  whitespace-nowrap`}
          >
            Luzem
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className=" px-4 "></div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#dc88d1] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-offset-white"
            onClick={toggleMobileNav}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto ">
          <ul className="flex flex-col p-4 md:p-0 mt-4 border text-[#dc88d1] font-thin rounded-lg md:space-x-8  md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 duration-300 ease-in-out "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/turnos"}
                className="block py-2 px-3  duration-300 ease-in-out"
              >
                Turnos
              </Link>
            </li>
            <li>
              <Link
                href={"/servicios"}
                className="block py-2 px-3   duration-300 ease-in-out"
              >
                Servicios
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isMobileNavVisible && (
        <div ref={mobileNavRef}>
          <MobileNavbar />
        </div>
      )}
    </nav>
  )
}
