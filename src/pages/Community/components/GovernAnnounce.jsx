import styled from "styled-components";
import { ReactComponent as AlertIcn } from "../assets/GovernAnnounceIcn.svg";
import { ReactComponent as MoreIcn } from "../assets/GovernAnnounceMore.svg";

const Container = styled.div`
  display: flex;
  padding: 1rem 0rem;
  margin: 0 1rem;
  align-items: center;
  gap: 0.625rem;

  border-bottom: 1px solid #eaebec;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0.6875rem 1rem;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.625rem;
  background-color: #f0f3fd;
`;

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;

  color: #476de0;
  text-align: center;

  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.4375rem; /* 92% */
  letter-spacing: -0.01563rem;
`;

const Content = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;

  overflow: hidden;
  color: #46474c;
  text-align: center;
  text-overflow: ellipsis;

  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const GovernAnnounce = () => {
  return (
    <Container>
      <Wrapper>
        <IndexWrapper>
          <AlertIcn />
          시청
        </IndexWrapper>
        <Content>[긴급] 이천시 반지하 거주민 긴급 대피 안내</Content>
        <MoreIcn
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("준비 중인 서비스입니다.");
          }}
        />
      </Wrapper>
    </Container>
  );
};

export default GovernAnnounce;
