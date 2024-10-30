import { Error } from "mongoose"

export async function getServices() {
  try {
    const response = await fetch("http://localhost:3000/api/services")
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
