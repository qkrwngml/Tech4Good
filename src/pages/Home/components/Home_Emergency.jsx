import styled, { keyframes } from "styled-components";
import { ReactComponent as EmergencyLogo } from "../assets/Emergency_Logo.svg";

// 애니메이션 정의
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  padding: 1.125rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  border-radius: 0.875rem;
  background: #fddede;

  // fadeIn 애니메이션을 추가
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.375rem;

  // Title에 pulse 애니메이션을 추가
  animation: ${pulse} 1s ease-in-out infinite;
`;

const EmergencyText = styled.div`
  color: var(--gray-gray-800, #ff4e4e);
  text-align: center;
  font-size: 1rem;
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
        <EmergencyLogo />
        <EmergencyText>안전 문자 안내</EmergencyText>
      </Title>
      <Content>
        호우로 인해 사과 농장 일대가 침수로 인해 통행이 불가능합니다.{" "}
      </Content>
    </Container>
  );
};

export default Home_Emergency;
