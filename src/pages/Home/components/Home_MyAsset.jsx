import styled from "styled-components";
import { ReactComponent as ManageIcn } from "../assets/ManageIcn.svg";
import Home_MyAsset_single from "./Home_MyAsset_single";
import { useNavigate } from "react-router-dom";

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

const dummyAsset = [
  {
    type: "Home",
    assetTitle: "우리집",
    rain: 0.22,
    grade: 1,
    dangerGrade: "safe",
  },
  {
    type: "Company",
    assetTitle: "사과 농장",
    rain: 4.36,
    grade: 4,
    dangerGrade: "danger",
  },
  {
    type: "Company",
    assetTitle: "포장 공장",
    rain: 1.36,
    grade: 3,
    dangerGrade: "warning",
  },
  {
    type: "Car",
    assetTitle: "내 차",
    dangerGrade: "safe",
  },
];

const Home_MyAsset = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {dummyAsset.map((item) => (
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
