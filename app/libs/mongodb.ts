import mongoose from "mongoose"

const URL: string = process.env.MONGODB_URL || ""

if (!URL) {
  throw new Error("MONGODB_URL environment variable is not defined.")
}

export async function connectDB() {
  try {
    await mongoose.connect(URL)
    console.log("Successfully connected to MongoDB")
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error.message)
    throw new Error("MongoDB connection failed")
  }
}
