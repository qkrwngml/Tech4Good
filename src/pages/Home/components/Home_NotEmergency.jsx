import styled from "styled-components";
import { ReactComponent as Umbrella } from "../assets/Umbrella.svg";

const Container = styled.div`
  display: flex;
  padding: 1.125rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 0.625rem;

  border-radius: 0.875rem;
  background: rgba(102, 71, 224, 0.15);
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Weather = styled.div`
  color: #6647e0;
  text-align: center;

  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

const WeatherTip = styled.div`
  color: #37383c;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;
const Home_NotEmergency = () => {
  return (
    <Container>
      <TextContainer>
        <Umbrella />
        <Weather>오후 비 예정</Weather>
        <WeatherTip>우산을 챙기세요</WeatherTip>
      </TextContainer>
    </Container>
  );
};

export default Home_NotEmergency;
