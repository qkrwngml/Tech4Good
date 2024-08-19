import styled from "styled-components";
import { ReactComponent as ManageIcn } from "../assets/ManageIcn.svg";
import Home_MyAsset_single from "./Home_MyAsset_single";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { assetState } from "../../../Recoil";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 0.875rem;
  background-color: #ffffff;
`;

const Horizon = styled.div`
  width: calc(100dvh * 0.48 * 0.8);
  height: 0.0625rem;
  background-color: #eaebec;
  align-self: auto;

  margin: 0 auto;
  padding: 0 1.25rem;
`;

const AssetManage = styled.button`
  display: flex;
  padding: 0.875rem 1rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  cursor: pointer;

  border: none;
  background-color: #ffffff;
  border-radius: 0rem 0rem 0.75rem 0.75rem;
`;

const AssetManageTitle = styled.div`
  color: #70737c;
  text-align: center;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const Home_MyAsset = () => {
  const navigate = useNavigate();

  const assetData = useRecoilValue(assetState);

  return (
    <Container>
      {assetData.map((item) => (
        <>
          <Home_MyAsset_single {...item}></Home_MyAsset_single>
          <Horizon></Horizon>
        </>
      ))}
      <AssetManage
        onClick={() => {
          navigate("/asset_Detail");
        }}
      >
        <AssetManageTitle>내 집 · 회사 · 자동차 관리하기</AssetManageTitle>
        <ManageIcn></ManageIcn>
      </AssetManage>
    </Container>
  );
  // 내 자산 배열을 map 하여 Home_MyAsset_single 컴포넌트를 생성
};

export default Home_MyAsset;
