import { Error } from "mongoose"
import { connectDB } from "@/app/libs/mongodb"
import Service from "@/app/models/services"

export async function getServiceByTitle(title: string) {
  try {
    console.log("Buscando servicio con título:", title)
    await connectDB()
    const service = await Service.findOne({ title })
    if (!service) {
      throw new Error("Error al obtener el servicio")
    }
    return service
  } catch (error) {
    console.error("Error en getServiceName:", error)
    throw new Error("No se pudo obtener el servicio")
  }
}
