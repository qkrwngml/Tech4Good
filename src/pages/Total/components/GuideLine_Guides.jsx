import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Counter = styled.div`
  display: flex;
  padding: 1rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;

  cursor: pointer;
`;

const Title = styled.div`
  text-align: left;
  align-self: stretch;

  color: #37383c;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
`;

const Detail = styled.div`
  color: #878a93;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

const Horizon = styled.div`
  width: 100%;
  height: 0.0875rem;
  align-self: stretch;

  background-color: #eaebec;
`;

const GuideLine_Guides = () => {
  const navigate = useNavigate();

  return (
    <Counter>
      <Post onClick={() => navigate("/total/guideLineAct")}>
        <Title>취약지역 거주자</Title>
        <Detail>행정안전부 | 조회 500</Detail>
      </Post>
      <Horizon />
      <Post onClick={() => alert("준비 중인 서비스입니다.")}>
        <Title>지하공간 거주 및 관리자</Title>
        <Detail>행정안전부 | 조회 500</Detail>
      </Post>
      <Horizon />
      <Post onClick={() => alert("준비 중인 서비스입니다.")}>
        <Title>공동 주택 관리자</Title>
        <Detail>행정안전부 | 조회 500</Detail>
      </Post>
    </Counter>
  );
};

export default GuideLine_Guides;
