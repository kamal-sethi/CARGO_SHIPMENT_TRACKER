import React from "react";
import AddShipment from "./AddShipment";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/add-shipment")}>Add</button>;
};

export default Navbar;
