import styled from "styled-components";
import Footer from "../../../components/footer";
import Home_Header from "../components/Home_Header";
import Home_Position from "../components/Home_Position";
import Home_Emergency from "../components/Home_Emergency";
import Home_MyAsset from "../components/Home_MyAsset";
import { ReactComponent as BagIcn } from "../assets/RegBtn_bag.svg";
import { ReactComponent as GoIcn } from "../assets/RegBtn_go.svg";
import { useEffect, useState } from "react";
import Common_Filter from "../components/Common_Filter";
import { useCallback } from "react";
import Home_InsuranceList from "../components/Home_InsuranceList";

const Container = styled.div`
  width: calc(100dvh * 0.48);
  height: 88.8dvh;
  background-color: #eff1f7;

  overflow-y: scroll;
`;

// footer을 제외한 부분을 차지, scroll 가능
const ImpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  margin: 0 1rem;
  margin-bottom: 1.6rem;
`;

const InsuranceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem;

  margin: 1.6rem 1rem 1.2rem 1rem;
`;

const EmergencyBtn = styled.div`
  display: flex;
  padding: 1.25rem 0rem;
  align-items: center;
  align-self: stretch;

  border-radius: 0.875rem;
  background-color: #ffffff;

  cursor: pointer;
`;

const EmergencyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;

  color: #46474c;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const FundsRegister = styled.div`
  display: flex;
  padding: 1.25rem 1rem 1.25rem 1.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 1rem;
  background: #d1daf7;

  cursor: pointer;
`;

const FundsTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;

  color: #37383c;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
`;

const Horizon = styled.div`
  width: 100%;
  height: 0.875rem;
  align-self: stretch;

  background-color: #e5e6ef;
`;

const InsuranceTitle = styled.div`
  align-self: stretch;
  text-align: left;

  color: #37383c;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.625rem; /* 144.444% */
  letter-spacing: -0.01125rem;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 20.5rem;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.875rem;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const HomePage = () => {
  const [filter, setFilter] = useState(0);

  const fetchFilter = useCallback((filter_num) => {
    setFilter(filter_num);
  }, []);

  const insuranceDummyData = [
    {
      filter_num: 0,
      title: "주거지",
    },
    {
      filter_num: 1,
      title: "농어촌",
    },
    {
      filter_num: 2,
      title: "상업지역",
    },
    {
      filter_num: 3,
      title: "자동차",
    },
  ];

  return (
    <>
      <Container className="home">
        <Home_Header></Home_Header>
        <ImpContainer>
          {/* 내 현 위치와 날씨, 위험 등급 */}
          <Home_Position></Home_Position>
          {/* 안전 문자 */}
          <Home_Emergency></Home_Emergency>
          {/* 내 자산 관리 탭 */}
          <Home_MyAsset></Home_MyAsset>
          {/* 대처 가이드/ 긴급 신고/ 비상 연락 */}
          <EmergencyBtn
            onClick={() => {
              alert("준비 중인 서비스입니다.");
            }}
          >
            <EmergencyText>대처 가이드</EmergencyText>
            <EmergencyText>긴급 신고</EmergencyText>
            <EmergencyText>비상 연락</EmergencyText>
          </EmergencyBtn>
          {/* 지원금 신청 */}
          <FundsRegister
            onClick={() => {
              alert("준비 중인 서비스입니다.");
            }}
          >
            <FundsTitleWrapper>
              <BagIcn />
              수해 피해 정부 지원금 신청하기
            </FundsTitleWrapper>
            <GoIcn></GoIcn>
          </FundsRegister>
        </ImpContainer>
        <Horizon></Horizon>
        <InsuranceContainer>
          <InsuranceTitle>인기 보험 상품</InsuranceTitle>
          <FilterContainer>
            {insuranceDummyData.map((item) => (
              <Common_Filter
                key={item.filter_num}
                {...item}
                filter={parseInt(filter)}
                onClick={() => fetchFilter(item.filter_num)}
              ></Common_Filter>
            ))}
          </FilterContainer>
          <Home_InsuranceList
            filterTitle={insuranceDummyData[filter].title}
          ></Home_InsuranceList>
        </InsuranceContainer>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
