import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/pages/HomePage";
import Community from "./pages/Community/Community";
import Map from "./pages/Map/MapPage";
import Total from "./pages/Total/Total";
import AssetDetailPage from "./pages/Home/pages/AssetDetailPage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community" element={<Community></Community>} />
          <Route path="/map" element={<Map />} />
          <Route path="/total" element={<Total />} />
          <Route path="/asset_Detail" element={<AssetDetailPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
