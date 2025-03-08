import Shipment from "../model/shipment.model.js";

export const addNewShipmentController = async (req, res) => {
  try {
    const {
      shipmentName,
      shipmentId,
      containerId,
      locations,
      shipmentHead,
      eta,
    } = req.body;
    if (
      !shipmentName ||
      !shipmentId ||
      !containerId ||
      !locations ||
      !shipmentHead ||
      !eta
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const shipId = await Shipment.findOne({ shipmentId });
    if (shipId) {
      return res.status(400).json({
        message: "Shipment id should be unique",
      });
    }
    const contId = await Shipment.findOne({ containerId });
    if (contId) {
      return res.status(400).json({
        message: "Container id should be unique",
      });
    }

    const add = await Shipment.create({
      shipmentName,
      shipmentId,
      containerId,
      shipmentHead,
      locations,
      ETA: eta,
    });

    if (add) {
      return res.status(201).json({
        message: "New shipment in created",
        add,
      });
    } else {
      return res.status(400).json({
        message: "cannot create new shipment",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error in adding new shipment controller",
    });
  }
};

export const getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find({});
    if (shipments) {
      return res.status(200).json({
        message: "fetched all shipments",
        shipments,
      });
    } else {
      return res.status(500).json({
        message: "cannot fetch all shipments",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "error in get all shipments controller",
    });
  }
};

export const getShipmentById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const shipment = await Shipment.findOne({shipmentId: id });
    console.log(shipment);

    if (shipment) {
      return res.status(200).json({
        message: "shipment fetched",
        shipment,
      });
    } else {
      return res.status(500).json({
        message: "cannot fetch a shipment",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "error in get shipment by id controller",
    });
  }
};
