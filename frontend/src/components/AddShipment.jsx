import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddShipment = () => {
  const [shipmentName, setShipmentName] = useState("");
  const [shipmentId, setShipmentId] = useState(0);
  const [containerId, setContainerId] = useState(0);
  const [shipmentHead, setShipmentHead] = useState("");
  const [location, setLocations] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(shipmentHead, shipmentId, shipmentName, containerId, location);
    const newLocations = location.trim()
      ? location.split(",").map((loc) => loc.trim())
      : [];
    console.log(newLocations);
    console.log({
      shipmentHead,
      shipmentId,
      containerId,
      location: newLocations,
      shipmentName,
    });
    try {
      const newShipment = await axios.post(
        "http://localhost:5001/api/v1/shipment/new",
        {
          shipmentName,
          shipmentId,
          containerId,
          locations: newLocations,
          shipmentHead,
        }
      );
      if (newShipment.data) {
        console.log("done");
        toast.success("New Shipment is Created");
        navigate("/dashboard");
      } else {
        console.log("not done");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold ">Add New Shipment</h1>
      <div className="max-w-md w-90 mx-auto p-6 bg-white rounded-lg shadow-md ">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="shipment-name"
              className="block text-gray-700 text-2xl font-bold"
            >
              Shipment Name
            </label>
            <input
              type="text"
              id="shipment-name"
              name="shipment-name"
              value={shipmentName}
              onChange={(e) => setShipmentName(e.target.value)}
              placeholder="Enter Name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="shipment-id"
              className="block text-gray-700 text-2xl font-bold"
            >
              Shipment Id
            </label>
            <input
              type="number"
              value={shipmentId}
              id="shipment-id"
              name="shipment-id"
              placeholder="Enter Shipment Id"
              onChange={(e) => setShipmentId(Number(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="container-id"
              className="block text-gray-700 text-2xl font-bold"
            >
              Container Id
            </label>
            <input
              type="number"
              id="container-id"
              name="container-id"
              placeholder="Enter Container Id"
              value={containerId}
              onChange={(e) => setContainerId(Number(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            ></input>
          </div>
          <div>
            <label
              htmlFor="shipment-head"
              className="block text-gray-700 text-2xl font-bold"
            >
              Shipment Head
            </label>
            <input
              type="email"
              id="shipment-head"
              name="shipment-head"
              placeholder="Enter Head Name"
              value={shipmentHead}
              onChange={(e) => setShipmentHead(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            ></input>
          </div>
          <div>
            <label
              htmlFor="locations"
              className="block text-gray-700 text-2xl font-bold"
            >
              Locations
            </label>
            <input
              type="text"
              id="locations"
              name="locations"
              placeholder="Enter Locations"
              value={location}
              onChange={(e) => setLocations(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            ></input>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddShipment;
