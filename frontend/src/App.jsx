import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./index.css";
import Dashboard from "./components/Dashboard";
import AddShipment from "./components/AddShipment";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import UpdateShipment from "./components/UpdateShipment.jsx";
const App = () => {
  // const user = useSelector((state) => state.user.user);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/add-shipment" element={<AddShipment />} />
          <Route path="/update-shipment/:id" element={<UpdateShipment/>}/>
        </Routes>

        <Toaster />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
