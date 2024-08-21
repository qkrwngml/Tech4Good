import styled from "styled-components";
import Common_DangerGrade from "./Common_DangerGrade";
import { ReactComponent as Danger_rain } from "../assets/Danger_rain.svg";

const DangerGradeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WeatherSpan = styled.span`
  color: #70737c;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

// rain(강수량), grade(1,3,4),dangerGrade(danger, warning, safe)
const Common_GradeTotal = ({ rain, grade, dangerGrade }) => {
  return (
    <DangerGradeWrapper>
      {rain != undefined ? (
        <>
          {" "}
          <Danger_rain></Danger_rain>
          <WeatherSpan>{rain}mm</WeatherSpan>
          <WeatherSpan>|</WeatherSpan>
          <WeatherSpan>{grade}등급</WeatherSpan>
        </>
      ) : (
        <></>
      )}
      <Common_DangerGrade state={dangerGrade}></Common_DangerGrade>
    </DangerGradeWrapper>
  );
};
export default Common_GradeTotal;
