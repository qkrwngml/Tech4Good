import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/pages/HomePage";
import CommunityPage from "./pages/Community/pages/CommunityPage";
import Map from "./pages/Map/MapPage";
import Total from "./pages/Total/Total";
import AssetDetailPage from "./pages/Home/pages/AssetDetailPage";
import { RecoilRoot } from "recoil";
import AssetEditPage from "./pages/Home/pages/AssetEditPage";
import AssetAddNumberPage from "./pages/Home/pages/AssetAddNumberPage";
import GovernPage from "./pages/Community/pages/GovernPage";
import NeighborPage from "./pages/Community/pages/NeighborPage";
import GuideLinePage from "./pages/Total/pages/GuideLinePage";
import GuideLineActPage from "./pages/Total/pages/GuideLineActPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community" element={<CommunityPage></CommunityPage>} />
          <Route path="/map" element={<Map />} />
          <Route path="/total" element={<Total />} />
          <Route path="/total/guideLine" element={<GuideLinePage />} />
          <Route path="/total/guideLineAct" element={<GuideLineActPage />} />
          <Route path="/asset_Detail" element={<AssetDetailPage />} />
          <Route
            path="/asset_Detail/edit/:assetKey"
            element={<AssetEditPage></AssetEditPage>}
          />
          <Route
            path="/asset_Detail/edit/number/:assetKey"
            element={<AssetAddNumberPage></AssetAddNumberPage>}
          />
          <Route path="/community/Govern" element={<GovernPage />} />
          <Route path="/community/Neighbor" element={<NeighborPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
