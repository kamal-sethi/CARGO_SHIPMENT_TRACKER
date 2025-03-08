import mongoose from "mongoose";
const shipmentSchema = new mongoose.Schema(
  {
    shipmentName: {
      type: String,
      required: true,
    },
    shipmentId: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    containerId: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    locations: {
      type: [String],
      required: true,
      lowercase: true,
    },
    ETA: {
      type: Date,
      required: true,
      default: null,
    },
    currentLocation: {
      type: String,
      default: "Not Updated",
      required: true,
    },
    shipmentHead: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Not updated", "delivered", "pending", "cancelled", "In transit"],
      default: "Not updated",
      required: true,
    },
  },
  { timestamps: true }
);

const Shipment = mongoose.model("Shipment", shipmentSchema);
export default Shipment;
