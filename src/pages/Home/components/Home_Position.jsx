import styled from "styled-components";
import css from "styled-components";
import DangerGrade from "./Common_DangerGrade";
import { ReactComponent as Weather_sun } from "../assets/Weather_sun.svg";
import { ReactComponent as Degree } from "../assets/Degree.svg";
import { ReactComponent as Danger_rain } from "../assets/Danger_rain.svg";

const PositionContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;

  background: linear-gradient(90deg, #6c8ae6 0%, #6c8ae6 100%);
  border-radius: 1rem;
`;

// Position

const MyPosition = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;
  align-self: stretch;

  color: #ffffff;
`;

const PositionTitle = styled.span`
  color: var(--gray-0, #fff);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: -0.0125rem;
`;

const PositionContent = styled.span`
  color: rgba(255, 255, 255, 0.89);

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem;
  letter-spacing: -0.00875rem;
`;

// Weather

const MyWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const WeatherContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DangerGradeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WeatherSpan = styled.span`
  color: rgba(255, 255, 255, 0.9);

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const Home_Position = () => {
  return (
    <PositionContainer>
      <MyPosition>
        <PositionTitle
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            lineHeight: "1.75rem",
            letterSpacing: "-0.0125rem",
          }}
        >
          내 현재 위치
        </PositionTitle>
        <PositionContent>이천시 마장면</PositionContent>
      </MyPosition>
      <MyWeather>
        <WeatherContent>
          <Weather_sun></Weather_sun>
          <WeatherSpan>
            33
            <Degree />
          </WeatherSpan>
          <WeatherSpan>|</WeatherSpan>
          <WeatherSpan>맑음</WeatherSpan>
        </WeatherContent>
        <DangerGradeWrapper>
          <Danger_rain></Danger_rain>
          <WeatherSpan>0.22m</WeatherSpan>
          <WeatherSpan>|</WeatherSpan>
          <WeatherSpan>1등급</WeatherSpan>
          <DangerGrade state={"safe"}></DangerGrade>
        </DangerGradeWrapper>
      </MyWeather>
    </PositionContainer>
  );
};

export default Home_Position;
