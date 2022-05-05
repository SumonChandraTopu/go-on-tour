import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations simplified />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
