import express from "express";
import {
  addNewShipmentController,
  getAllShipments,
  getShipmentById,
} from "../controller/shipment.controller.js";
const router = express.Router();

router.post("/new", addNewShipmentController);
router.get("/get-all", getAllShipments);
router.get("/get/:id", getShipmentById);
export default router;
