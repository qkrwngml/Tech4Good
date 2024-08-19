import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Footer from "../../components/footer";

const Container = styled.div`
  height: 100dvh;
  width: calc(100dvh * 0.48);
`;

const MapContainer = styled.div`
  width: 100%;
  height: 88.8vh; // Adjusted to fit the map size
`;

const CategoryMarkerStyle = styled.div`
  .category {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 1;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 10px;

      li {
        padding: 10px;
        cursor: pointer;
        font-size: 14px;

        &.menu_selected {
          font-weight: bold;
        }
      }
    }
  }
`;

const MapPage = () => {
  // 경로 이동
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  // 지도 동적 이동
  const mapRef = useRef(null);

  // 마커 이미지의 주소입니다. 스프라이트 이미지 입니다
  const markerImageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png";
  const imageSize = { width: 22, height: 26 };
  const spriteSize = { width: 36, height: 98 };

  // 소방서 마커가 표시될 좌표 배열입니다
  const coffeePositions = [
    { lat: 37.28204470000011, lng: 127.42727205393246 }, //관고119안전센터 경기도 이천시 경충대로 2739
    { lat: 37.24360160000057, lng: 127.49322105393313 }, //대월119안전센터 경기도 이천시 경충대로 1973
    { lat: 37.24939730000023, lng: 127.35368695393309 }, //마장119안전센터 경기도 이천시 마장면 중앙로 87
    { lat: 37.57403449999966, lng: 127.00228600000004 }, //이천소방서 경기도 이천시 경충대로 2739
    { lat: 37.117079500000195, lng: 127.61047215393356 }, //장호원119안전센터 경기도 이천시 장호원읍 서동대로 8829번길 71
  ];
  const coffeeOrigin = { x: 10, y: 0 };

  // 파출소 마커가 표시될 좌표 배열입니다
  const storePositions = [
    { lat: 37.57403449999966, lng: 127.00228600000004 }, //이천경찰서 경기도 이천시 부악로 32
    { lat: 37.22461899999959, lng: 127.49050115393231 }, //대월파출소 경기도 이천시 대월로803번길 64
    { lat: 37.24913849999998, lng: 127.3531866539326 }, //마장파출소 경기도 이천시 마장면 오천로 101
    { lat: 37.57403449999966, lng: 127.00228600000004 }, //모가파출소 경기도 이천시 모가면 진상미로 1305
    { lat: 37.338458300000184, lng: 127.48699385393373 }, //백사파출소 경기도 이천시 백사면 현방로 62
    { lat: 37.286912900000104, lng: 127.48480145393208 }, //부발파출소 경기도 이천시 부발읍 무촌로 167-5
    { lat: 37.132704700000424, lng: 127.51690665393373 }, //설성파출소 경기도 이천시 설성면 설장로 17번길 6-1
    { lat: 37.3087544000006, lng: 127.39825135393212 }, //신둔파출소 경기도 이천시 신둔면 경충대로 3162
    { lat: 37.57403449999966, lng: 127.00228600000004 }, //아미파출소 경기도 이천시 부발읍 경충대로 2154
    { lat: 37.09556340000015, lng: 127.54270175393407 }, //율면파출소 경기도 이천시 율면 고당로 114
    { lat: 37.13244900000005, lng: 127.48856403149342 }, //장호원파출소 경기도 이천시 장호원읍 장감로 703
    { lat: 37.22420980000035, lng: 127.42396225393361 }, //호법파출소 경기도 이천시 호법면 이섭대천로 547
    { lat: 37.28956540000044, lng: 127.45109355393306 }, //증포지구대 경기도 이천시  증포동 갈산로 19
    { lat: 37.28169770000055, lng: 127.43749915393254 }, //창전지구대 경기도 이천시 영창로 171
  ];
  const storeOrigin = { x: 10, y: 36 };

  // 대피소 마커가 표시될 좌표 배열입니다
  const carparkPositions = [
    { lat: 37.57403449999966, lng: 127.00228600000004 }, //덕평로얄아파트 지하주차장 1층 경기도 이천시 마장면 오천로 152-20(덕평로얄아파트)
    { lat: 37.25686510000056, lng: 127.34997305393362 }, //마장 아름수리아파트 지하주차장 경기도 이천시 마장면 마도로 12 (아름수리아파트)
    { lat: 37.252667499999625, lng: 127.35184645393764 }, //마장호반베르디움 1차아파트 지하주차장 경기도 이천시 마장면 중앙로 34 (호반베르디움 1차)
    { lat: 37.25288760000102, lng: 127.35318885393458 }, //마장호반베르디움 2차아파트 지하주차장 경기도 이천시 마장면 중앙로 35 (호반베르디움2차)
    { lat: 37.23409710000026, lng: 127.36329025393279 }, //성진아파트 지하주차장 1층 경기도 이천시 마장면 덕평로 840 (성진아파트)
    { lat: 37.27964480000018, lng: 127.43997575393254 }, //cgv이천 지하주차장 1,2,3,4층 경기도 이천시 중리천로 58(중리동)
    { lat: 37.27779300000013, lng: 127.44344725393353 }, //그랜드웨딩홀 지하주차장 1,2층 경기도 이천시 중리천로 95(중리로, 그랜드웨딩홀)
    { lat: 37.27860640000012, lng: 127.44144935393224 }, //라온팰리스 지하주차장 1,2,3,4,5층 경기도 이천시 중리천로 76 (중리동)
    { lat: 37.2721225000006, lng: 127.43085245393392 }, //이천시청 지하주차장 1층 경기도 이천시 부악로 40(중리동, 이천시청)
    { lat: 37.276178000000364, lng: 127.44436505393398 }, //코아루페라즈오피스텔 지하주차장 1,2,3,4,5층 경기도 이천시 중리천로 126-8(중리동)
  ];
  const carparkOrigin = { x: 10, y: 72 };

  /*
  임시주거시설
   { lat: 37.24219380000083, lng: 127.51398155393568 },//가산초등학교 경기도 이천시 부발읍 황무로2065	번길 112
    { lat: 37.2383702999991, lng: 127.37837945393748 },//각평리 경로당 경기도 이천시 마장면 덕이로 154번길 223
     { lat: 37.13642989999983, lng: 127.61279275393774 },//경기도교육연수원 경기 이천시 장호원읍 경충대로168번길 168
      { lat: 37.335296599999666, lng: 127.4498101539365 },//경사1리 경로당 경기 이천시 백사면 경사리 365-1
       { lat: 37.24188990000008, lng: 127.46970025393357 },//고담1통 마을회관 경기도 이천시 진상미로2232번길 140-18(고담동)
        { lat: 37.24188990000008, lng: 127.46970025393357 },//고담4통 경로당 경기도 이천시 대산로247번길 50(고담동, 지엠하이빌아파트)
   { lat: 37.093138600000245, lng: 127.5414699539373 }, //고당1리 경로당 경기도 이천시 율면 고당로 116-1
     { lat: 37.2807273000005, lng: 127.43553585393859 }, //관고1통 경로당 경기도 이천시 중리천로 15(관고동)
       { lat: 37.28208689999804, lng: 127.43195085393404 }, //관고2통 경로당 경기도 이천시 설봉로43번길 49(관고동)
  */

  const [selectedCategory, setSelectedCategory] = useState("coffee");

  useEffect(() => {
    const coffeeMenu = document.getElementById("coffeeMenu");
    const storeMenu = document.getElementById("storeMenu");
    const carparkMenu = document.getElementById("carparkMenu");

    if (selectedCategory === "coffee") {
      coffeeMenu.className = "menu_selected";
      storeMenu.className = "";
      carparkMenu.className = "";
    } else if (selectedCategory === "store") {
      coffeeMenu.className = "";
      storeMenu.className = "menu_selected";
      carparkMenu.className = "";
    } else if (selectedCategory === "carpark") {
      coffeeMenu.className = "";
      storeMenu.className = "";
      carparkMenu.className = "menu_selected";
    }
  }, [selectedCategory]);

  return (
    <Container>
      <MapContainer>
        <Map
          id="map"
          center={{
            lat: 37.26680548649544,
            lng: 127.39948824950558,
          }}
          style={{
            width: "100%",
            height: "100%", // Adjusted to fit the container height
          }}
          level={8} // 지도의 확대 레벨
          ref={mapRef}
        >
          {selectedCategory === "coffee" &&
            coffeePositions.map((position) => (
              <MapMarker
                key={`coffee-${position.lat},${position.lng}`}
                position={position}
                image={{
                  src: markerImageSrc,
                  size: imageSize,
                  options: {
                    spriteSize: spriteSize,
                    spriteOrigin: coffeeOrigin,
                  },
                }}
              />
            ))}
          {selectedCategory === "store" &&
            storePositions.map((position) => (
              <MapMarker
                key={`store-${position.lat},${position.lng}`}
                position={position}
                image={{
                  src: markerImageSrc,
                  size: imageSize,
                  options: {
                    spriteSize: spriteSize,
                    spriteOrigin: storeOrigin,
                  },
                }}
              />
            ))}
          {selectedCategory === "carpark" &&
            carparkPositions.map((position) => (
              <MapMarker
                key={`carpark-${position.lat},${position.lng}`}
                position={position}
                image={{
                  src: markerImageSrc,
                  size: imageSize,
                  options: {
                    spriteSize: spriteSize,
                    spriteOrigin: carparkOrigin,
                  },
                }}
              />
            ))}
        </Map>
        <div className="category">
          <ul>
            <li id="coffeeMenu" onClick={() => setSelectedCategory("coffee")}>
              <span className="ico_comm ico_coffee"></span>
              커피숍
            </li>
            <li id="storeMenu" onClick={() => setSelectedCategory("store")}>
              <span className="ico_comm ico_store"></span>
              편의점
            </li>
            <li id="carparkMenu" onClick={() => setSelectedCategory("carpark")}>
              <span className="ico_comm ico_carpark"></span>
              주차장
            </li>
          </ul>
        </div>
      </MapContainer>
      <Footer />
    </Container>
  );
};

export default MapPage;
