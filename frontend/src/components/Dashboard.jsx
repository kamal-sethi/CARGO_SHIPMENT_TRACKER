import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);
  useEffect(() => {
    const getShipments = async () => {
      try {
        const shipments = await axios.get(
          "http://localhost:5001/api/v1/shipment/get-all"
        );
        if (shipments.data) {
          setShipments(shipments.data.shipments);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getShipments();
  }, []);
  return (
    <>
      <div>all shipments</div>
      {console.log(shipments)}
    </>
  );
};

export default Dashboard;
