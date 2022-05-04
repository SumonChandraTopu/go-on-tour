import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Hotels from "./components/Hotels";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels simplified />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
