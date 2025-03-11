import React from "react";
import AddShipment from "./AddShipment";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="m-2 h-15 bg-blue-500">
      <div className="flex justify-between items-center m-2 ">
        <h1 className="text-2xl mt-2 font-bold">Cargo Shipment Tracker</h1>
        <div className="flex  justify-center  items-center gap-2 ">
          <h1 className="text-xl">Kamal@gmail.com</h1>
          <button
            className="border p-1"
            onClick={() => navigate("/add-shipment")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
