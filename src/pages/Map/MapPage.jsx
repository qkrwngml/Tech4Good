import React, { useRef, useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import debounce from "lodash/debounce";

import searchIcon from "./assets/searchIcon.svg";
import fireMarker from "./assets/fireMarker.svg";
import policeMarker from "./assets/policeMarker.svg";
import shelterMarker from "./assets/shelterMarker.svg";
import housingMarker from "./assets/housingMarker.svg";
import myLocation from "./assets/myLocation.svg";
import level from "./assets/level.svg";

import Footer from "../../components/footer";
import Filter from "./components/Filter";
import NowLocation from "./components/NowLocation";

const Container = styled.div`
  width: calc(100dvh * 0.48);
  margin: 0 auto;
`;

const MapContainer = styled.div`
  height: 87.8dvh;
  width: 100%;
  position: relative;
`;

const MapHeader = styled.div`
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 7vh;
`;

const Search = styled.div`
  margin: 0 16px;
  height: 47px;
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  border: 1px solid var(--gray-gray-150, #eaebec);
  background: var(--gray-0, #fff);
  color: black;
  input {
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: -0.14px;
  }
`;

const Level = styled.div`
  width: 90dvw;
  position: absolute;
  bottom: -6vh;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MapPage = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  const [location, setLocation] = useState({
    lat: 37.26697094518317,
    lng: 127.39932246136938,
  });

  const mapRef = useRef(null);

  const imageSize = { width: 40, height: 40 };

  const firePositions = [
    { lat: 37.28204470000011, lng: 127.42727205393246 },
    { lat: 37.24360160000057, lng: 127.49322105393313 },
    { lat: 37.24939730000023, lng: 127.35368695393309 },
    { lat: 37.57403449999966, lng: 127.00228600000004 },
    { lat: 37.117079500000195, lng: 127.61047215393356 },
  ];

  const policePositions = [
    { lat: 37.57403449999966, lng: 127.00228600000004 },
    { lat: 37.22461899999959, lng: 127.49050115393231 },
    { lat: 37.24913849999998, lng: 127.3531866539326 },
    { lat: 37.57403449999966, lng: 127.00228600000004 },
    { lat: 37.338458300000184, lng: 127.48699385393373 },
    { lat: 37.286912900000104, lng: 127.48480145393208 },
    { lat: 37.132704700000424, lng: 127.51690665393373 },
    { lat: 37.3087544000006, lng: 127.39825135393212 },
    { lat: 37.57403449999966, lng: 127.00228600000004 },
    { lat: 37.09556340000015, lng: 127.54270175393407 },
    { lat: 37.13244900000005, lng: 127.48856403149342 },
    { lat: 37.22420980000035, lng: 127.42396225393361 },
    { lat: 37.28956540000044, lng: 127.45109355393306 },
    { lat: 37.28169770000055, lng: 127.43749915393254 },
  ];

  const shelterPositions = [
    { lat: 37.57403449999966, lng: 127.00228600000004 },
    { lat: 37.25686510000056, lng: 127.34997305393362 },
    { lat: 37.252667499999625, lng: 127.35184645393764 },
    { lat: 37.25288760000102, lng: 127.35318885393458 },
    { lat: 37.23409710000026, lng: 127.36329025393279 },
    { lat: 37.27964480000018, lng: 127.43997575393254 },
    { lat: 37.27779300000013, lng: 127.44344725393353 },
    { lat: 37.27860640000012, lng: 127.44144935393224 },
    { lat: 37.2721225000006, lng: 127.43085245393392 },
    { lat: 37.276178000000364, lng: 127.44436505393398 },
  ];

  const housingPositions = [
    { lat: 37.24219380000083, lng: 127.51398155393568 },
    { lat: 37.2383702999991, lng: 127.37837945393748 },
    { lat: 37.13642989999983, lng: 127.61279275393774 },
    { lat: 37.335296599999666, lng: 127.4498101539365 },
    { lat: 37.24188990000008, lng: 127.46970025393357 },
    { lat: 37.24188990000008, lng: 127.46970025393357 },
    { lat: 37.093138600000245, lng: 127.5414699539373 },
    { lat: 37.2807273000005, lng: 127.43553585393859 },
    { lat: 37.28208689999804, lng: 127.43195085393404 },
  ];

  const [mapSize, setMapSize] = useState({
    width: "100%",
    height: "87.8dvh",
  });

  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    console.log("현위치", location);
    const fireMenu = document.getElementById("fireMenu");
    const policeMenu = document.getElementById("policeMenu");
    const shelterMenu = document.getElementById("shelterMenu");
    const housingMenu = document.getElementById("housingMenu");

    if (selectedCategory === "all") {
      //css를 위해 주석처리
      // fireMenu.className = "menu_selected";
      // policeMenu.className = "menu_selected";
      // shelterMenu.className = "menu_selected";
      // housingMenu.className = "menu_selected";
    } else {
      fireMenu.className =
        selectedCategory === "fire" ? "menu_selected" : "none_selected";
      policeMenu.className =
        selectedCategory === "police" ? "menu_selected" : "none_selected";
      shelterMenu.className =
        selectedCategory === "shelter" ? "menu_selected" : "none_selected";
      housingMenu.className =
        selectedCategory === "housing" ? "menu_selected" : "none_selected";
    }
  }, [selectedCategory]);

  const renderMarkers = () => {
    const markers = [];

    if (selectedCategory === "fire" || selectedCategory === "all") {
      markers.push(
        ...firePositions.map((position, index) => (
          <MapMarker
            key={`fire-${index}`}
            position={position}
            image={{
              src: fireMarker,
              size: imageSize,
            }}
          />
        ))
      );
    }

    if (selectedCategory === "police" || selectedCategory === "all") {
      markers.push(
        ...policePositions.map((position, index) => (
          <MapMarker
            key={`police-${index}`}
            position={position}
            image={{
              src: policeMarker,
              size: imageSize,
            }}
          />
        ))
      );
    }

    if (selectedCategory === "shelter" || selectedCategory === "all") {
      markers.push(
        ...shelterPositions.map((position, index) => (
          <MapMarker
            key={`shelter-${index}`}
            position={position}
            image={{
              src: shelterMarker,
              size: imageSize,
            }}
          />
        ))
      );
    }

    if (selectedCategory === "housing" || selectedCategory === "all") {
      markers.push(
        ...housingPositions.map((position, index) => (
          <MapMarker
            key={`housing-${index}`}
            position={position}
            image={{
              src: housingMarker,
              size: imageSize,
            }}
          />
        ))
      );
    }

    return markers;
  };
  const updateCenterWhenMapMoved = useMemo(
    () =>
      debounce((map) => {
        // 지도 중심 좌표 가져오기
        const center = map.getCenter();
        setLocation({
          lat: center.getLat(),
          lng: center.getLng(),
        });
      }, 500),
    []
  );
  const handleNowLocationClick = () => {
    const currentPosition = {
      lat: 37.26697094518317,
      lng: 127.39932246136938,
    };
    setLocation(currentPosition);
    console.log("현위치", location);
  };

  return (
    <Container>
      <MapContainer>
        <MapHeader>
          <Search>
            <img src={searchIcon} alt="search" />
            <input placeholder="위치를 검색해 주세요." />
          </Search>
          <Filter setSelectedCategory={setSelectedCategory} />
        </MapHeader>
        <Map
          center={location}
          level={7}
          style={mapSize}
          ref={mapRef}
          onCenterChanged={updateCenterWhenMapMoved}
        >
          {renderMarkers()}

          <MapMarker
            position={{ lat: 37.26697094518317, lng: 127.39932246136938 }}
            image={{
              src: myLocation,
              size: {
                width: "131px",
              },
            }}
          />
        </Map>
        <NowLocation onClick={handleNowLocationClick} />
        <Level>
          <img src={level} alt="level" />
        </Level>
      </MapContainer>
      <Footer navigateTo={navigateTo} />
    </Container>
  );
};

export default MapPage;
