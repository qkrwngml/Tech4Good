import styled from "styled-components";
import { ReactComponent as ManageIcn } from "../assets/ManageIcn.svg";
import Common_Insurance from "./Common_Insurance";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 0.875rem;
  background-color: #ffffff;

  cursor: pointer;
`;

const Horizon = styled.div`
  width: calc(100dvh * 0.48 * 0.8);
  height: 0.0625rem;
  background-color: #eaebec;
  align-self: auto;

  margin: 0 auto;
  padding: 0 1.25rem;
`;

const InsuranceManage = styled.button`
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

const InsuranceManageTitle = styled.div`
  color: #70737c;
  text-align: center;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const InsuranceItem = styled.div`
  display: flex;
  padding: 1.25rem;
  align-items: center;
  gap: 0.875rem;
  align-self: stretch;
`;

const homeInsuranceDummyData = [
  { title: "Hana", content: "하나 손해 보험" },
  { title: "KB", content: "KB 손해 보험" },
  { title: "DB", content: "DB 손해 보험" },
];

const Home_InsuranceList = ({ filterTitle }) => {
  return (
    <Container
      onClick={() => {
        alert("준비 중인 서비스입니다.");
      }}
    >
      {homeInsuranceDummyData.map((item) => (
        <>
          <Common_Insurance
            {...item}
            filterTitle={filterTitle}
          ></Common_Insurance>
          <Horizon></Horizon>
        </>
      ))}
      <InsuranceManage>
        <InsuranceManageTitle>보험 상품 더보기</InsuranceManageTitle>
        <ManageIcn></ManageIcn>
      </InsuranceManage>
    </Container>
  );
};

export default Home_InsuranceList;
