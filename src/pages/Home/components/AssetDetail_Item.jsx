import styled from "styled-components";
import Common_MyAsset_single from "../components/Common_MyAsset_single";

const Container = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;

  border-radius: 1rem;
  background: #ffffff;
`;

const GradeTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const AddressWrapper = styled.div`
  display: flex;
  padding: 0rem 1.5rem;
  align-items: center;
  align-self: stretch;

  color: #5a5c63;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const Horizon = styled.div`
  margin-left: 1.5rem;
  height: 0.0625rem;
  align-self: stretch;

  background-color: #eaebec;
`;

const NumbersWrapper = styled.div`
  display: flex;
  padding-left: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Number = styled.div`
  align-self: stretch;

  color: #878a93;

  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;
// type,
//   assetTitle,
//   rain,
//   grade,
//   dangerGrade,

// 편집 화면인지 여부를 props로 받아야 함
// assetState에 주소, 번호 배열을 추가해야 함

// 하나의 자산 아이템 전체
const AssetDetail_Item = (props) => {
  return (
    <Container>
      <GradeTotalWrapper>
        <Common_MyAsset_single {...props}></Common_MyAsset_single>
      </GradeTotalWrapper>
      <InfoWrapper>
        <AddressWrapper>서울시 종로구 38 수호빌라 105동 B105호</AddressWrapper>
        <Horizon></Horizon>
        <NumbersWrapper>
          <Number>남편 010-2342-5256</Number>
        </NumbersWrapper>
      </InfoWrapper>
    </Container>
  );
};

export default AssetDetail_Item;
