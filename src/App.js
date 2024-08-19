import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/pages/HomePage";
import Community from "./pages/Community/Community";
import Map from "./pages/Map/MapPage";
import Total from "./pages/Total/Total";
import AssetDetailPage from "./pages/Home/pages/AssetDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<Community></Community>} />
        <Route path="/map" element={<Map />} />
        <Route path="/total" element={<Total />} />
        <Route path="/asset_Detail" element={<AssetDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
