import type { Metadata } from "next"
import Navbar from "@/components/Navbar/Navbar"
import { Poppins } from "next/font/google"
import WhatsappLive from "@/components/Whatsapp/WhatsappLive"
import Head from "next/head"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins"
})

const metadata: Metadata = {
  title: "Luzem",
  description: "Aplicacion de servicios de tarot"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </Head>
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <main className="flex flex-grow mt-[4rem] h-full bg-[#f9f9f9] text-[#dc88d1]">
            <Navbar />
            {children}
            <WhatsappLive />
          </main>
        </div>
      </body>
    </html>
  )
}
