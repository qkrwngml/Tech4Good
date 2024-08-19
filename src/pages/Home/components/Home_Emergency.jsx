import styled from "styled-components";
import { ReactComponent as EmergencyLogo } from "../assets/Emergency_Logo.svg";

const Container = styled.div`
  display: flex;
  padding: 1.125rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  border-radius: 0.875rem;
  background: #fddede;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.375rem;
`;

const EmergencyText = styled.div`
  color: var(--gray-gray-800, #5a5c63);
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

const Content = styled.div`
  align-self: stretch;
  text-align: left;

  color: var(--gray-gray-850, #46474c);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const Home_Emergency = () => {
  return (
    <Container>
      <Title>
        <EmergencyLogo></EmergencyLogo>
        <EmergencyText>안전 문자 안내</EmergencyText>
      </Title>
      <Content>
        호우로 인해 사과 농장 일대가 침수로 인해 통행이 불가능합니다.{" "}
      </Content>
    </Container>
  );
};

export default Home_Emergency;
