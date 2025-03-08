import express from "express";
import {
  addNewShipmentController,
  getAllShipments,
  getShipmentById,
  updateShipmentById,
} from "../controller/shipment.controller.js";
const router = express.Router();

router.post("/new", addNewShipmentController);
router.get("/get-all", getAllShipments);
router.get("/get/:id", getShipmentById);
router.patch("/update/:id", updateShipmentById);
export default router;
