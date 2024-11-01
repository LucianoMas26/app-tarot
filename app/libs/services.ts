import Service from "../models/services"
import { connectDB } from "./mongodb"

export default async function getServices() {
  try {
    await connectDB()

    const services = await Service.find({})

    return JSON.parse(JSON.stringify(services))
  } catch (error) {
    console.error("Error en getServices:", error)
    throw new Error("No se pudieron obtener los servicios")
  }
}
