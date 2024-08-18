import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main";
import Home from "./pages/Home/Home";
import Community from "./pages/Community/Community";
import Map from "./pages/Map/Map";
import Total from "./pages/Total/Total";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community></Community>} />
        <Route path="/map" element={<Map />} />
        <Route path="/total" element={<Total />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
