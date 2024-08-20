import styled from "styled-components";
import nowLocation from "../assets/nowLocation.svg";

const Container = styled.div`
  position: absolute;
  top: 70dvh;
  right: 0vw;
  z-index: 2;
  cursor: pointer; /* 클릭 가능하게 보이도록 커서 모양 변경 */
`;

const NowLocation = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <img src={nowLocation} alt="nowLocation" />
    </Container>
  );
};

export default NowLocation;
