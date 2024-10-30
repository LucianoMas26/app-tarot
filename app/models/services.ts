import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    title: String,
    shortDescription: String,
    description: String,
    price: Number,
    image: String,
    type: { type: String, enum: ["reading", "ritual"], required: true }
  },
  { collection: "services" }
)

const Service = mongoose.models.Service || mongoose.model("Service", schema)
export default Service
