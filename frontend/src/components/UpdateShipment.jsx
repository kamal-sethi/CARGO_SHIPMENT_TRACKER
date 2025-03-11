import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateShipment = () => {
  const params = useParams();
  const getShipment = async () => {
    try {
      const shipment = axios.get(
        `http://localhost:5001/api/v1/shipment/get/${params.id}`
      );
      if (shipment.data) {
        toast.success("Shipment Fetched");
        console.log("done");
      } else {
        toast.error("not fetched");
        console.log("not done");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getShipment();
  }, []);
  return <div>UpdateShipment</div>;
};

export default UpdateShipment;
