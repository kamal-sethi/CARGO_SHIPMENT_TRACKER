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
      <div className="bg-red-50">
        <div className="flex flex-col justify-center items-center h-screen  border">
          {shipments.map((shipment) => (
            <div className="text-2xl font-bold h-50 w-90 m-3 border ">
              <div className="m-2">
                <h1>
                  Shipment Name:
                  <span className="text-md font-light">
                    {shipment.shipmentName}
                  </span>
                </h1>
                <h2> Head:<span className="text-md font-light">{shipment.shipmentHead}</span></h2>
                <h3>Container Id:<span className="text-md font-light">{shipment.containerId}</span></h3>
                <h3>Shipment Id:<span className="text-md font-light">{shipment.shipmentId}</span></h3>
                <h3>ETA:<span className="text-md font-light">{shipment.ETA}</span></h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
