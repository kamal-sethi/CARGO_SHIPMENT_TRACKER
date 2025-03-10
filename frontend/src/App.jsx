import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./index.css";
import Dashboard from "./components/Dashboard";
import AddShipment from "./components/AddShipment";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/add-shipment" element={<AddShipment />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
};

export default App;
