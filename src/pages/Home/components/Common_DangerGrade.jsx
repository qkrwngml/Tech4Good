import { useEffect } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0.0625rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.375rem;

  ${(props) =>
    props.state === "danger"
      ? css`
          background-color: #ff5253;
        `
      : props.state === "warning"
      ? css`
          background-color: #ffa622;
        `
      : css`
          background-color: #51b491;
        `};

  color: var(--gray-0, #fff);
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

// props: danger, warning, safe
const DangerGrade = ({ state }) => {
  var stateKorean = null;

  function figureDanger() {
    switch (state) {
      case "danger":
        stateKorean = "위험";
        break;
      case "warning":
        stateKorean = "경고";
        break;
      case "safe":
        stateKorean = "안전";
        break;
      default:
        stateKorean = null;
    }
  }

  useEffect(() => {
    figureDanger();
  }, [state]);

  figureDanger();
  return <Container state={state}>{stateKorean}</Container>;
};

export default DangerGrade;
