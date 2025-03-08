import express from "express";
import { addNewShipmentController } from "../controller/shipment.controller.js";
const router = express.Router();

router.post("/new", addNewShipmentController);
export default router;
