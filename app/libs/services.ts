import { Error } from "mongoose"
const URL: string = process.env.URL || "http://localhost:3000"

export async function getServices() {
  try {
    const response = await fetch(`${URL}/api/services`)
    if (!response.ok) {
      throw new Error("Error al obtener los servicios")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error en getServices:", error)
    throw new Error("No se pudieron obtener los servicios")
  }
}
