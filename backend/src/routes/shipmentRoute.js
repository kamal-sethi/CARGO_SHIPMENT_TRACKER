import express from "express";
import {
  addNewShipmentController,
  getAllShipments,
} from "../controller/shipment.controller.js";
const router = express.Router();

router.post("/new", addNewShipmentController);
router.get("/get-all", getAllShipments);
export default router;
