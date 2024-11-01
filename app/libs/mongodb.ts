import mongoose from "mongoose"

declare global {
  var mongoose: {
    conn: mongoose.Connection | null
    promise: Promise<mongoose.Connection> | null
  }
}

const MONGODB_URL: string =
  process.env.MONGODB_URL ||
  "mongodb+srv://lucianomas:37450853@cluster0.l79bm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL environment variable is not defined.")
}

let cached = global.mongoose as any

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL)
      .then((mongoose) => mongoose)
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message)
        throw new Error("MongoDB connection failed")
      })
  }

  cached.conn = await cached.promise
  console.log("Successfully connected to MongoDB")
  return cached.conn
}
