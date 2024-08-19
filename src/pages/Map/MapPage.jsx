import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/footer";
import { Map } from "react-kakao-maps-sdk";

const Container = styled.div`
  height: 100dvh;
  width: calc(100dvh * 0.48);
`;

const MapContainer = styled.div`
  width: 100%;
`;

const MapPage = () => {
  //경로이동
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  //지도 동적 이동
  const mapRef = useRef(null);

  const [mapSize, setMapSize] = useState({
    width: "100%",
    height: "88.8vh",
  });

  return (
    <Container className="map">
      <MapContainer>
        <Map
          id="map"
          center={{
            // 지도의 중심좌표
            lat: 37.26680548649544,
            lng: 127.39948824950558,
          }}
          style={mapSize}
          level={3} // 지도의 확대 레벨
          ref={mapRef}
        ></Map>
      </MapContainer>
      <Footer></Footer>
    </Container>
  );
};

export default MapPage;
