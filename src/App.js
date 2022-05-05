import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import "./App.css";
import Restaurants from "./components/Restaurants";
import Hotels from "./components/Hotels";
import RestaurantDetails from "./components/RestaurantDetails";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations simplified />} />
          <Route path="/restaurants" element={<Restaurants simplified />} />
          <Route
            path="/restaurant/location/:locationId"
            element={<RestaurantDetails />}
          />
          <Route path="/hotels" element={<Hotels simplified />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
