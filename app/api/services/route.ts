import { connectDB } from "@/app/libs/mongodb"
import Service from "@/app/models/services"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await connectDB()
    const services = await Service.find()
    if (!services.length) {
      return NextResponse.json(
        { message: "No se encontraron los servicios" },
        { status: 404 }
      )
    }
    return NextResponse.json(services, { status: 200 })
  } catch (error) {
    console.error("Error en GET:", error)
    return NextResponse.json(
      { message: "No se pudieron obtener los servicios" },
      { status: 500 }
    )
  }
}
