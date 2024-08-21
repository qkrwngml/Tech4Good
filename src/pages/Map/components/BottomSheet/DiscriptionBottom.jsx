import React, { useState, useEffect } from "react";
import styled from "styled-components";
import line from "../../assets/bottomSheet.svg";
import line2 from "../../assets/line.svg";
import findMap from "../../assets/findMap.svg";
import Call from "../../assets/call.svg";

const Container = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* 미디어 쿼리 적용 */
  /* pc화면에서 너비를 390로 고정합니다*/
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  padding: 0 24px;
  border-radius: 20px 20px 0px 0px;
  border-top: 1px solid var(--gray-gray-100, #f4f4f5);
  border-right: 1px solid var(--gray-gray-100, #f4f4f5);
  border-left: 1px solid var(--gray-gray-100, #f4f4f5);
  background: var(--gray-0, #fff);
  box-shadow: 0px 0px 10px 0px rgba(174, 176, 182, 0.25);
  margin: 0 auto;
  height: 270px;
  border: 1px solid #ddd;
  overflow: hidden;
  position: fixed;
  z-index: 3;
  bottom: ${(props) => (props.visible ? "0" : "-300px")};
  transition: bottom 0.3s ease-in-out;
`;

const Line = styled.div`
  margin-top: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
  div {
    margin-top: 10px;
  }
`;

const Title = styled.div`
  margin-top: 25px;
  color: var(--gray-gray-900, #37383c);
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.2px;
  div {
    padding: 1px 6px;
    gap: 10px;
    border-radius: 6px;
    background: var(--gray-gray-150, #eaebec);
    color: var(--gray-gray-800, #5a5c63);
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.12px;
    width: 100px;
    margin-bottom: 11px;
  }
`;

const Where = styled.div`
  display: flex;
  gap: 9px;
`;
const ButtonWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const Button = styled.div`
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  border-radius: 10px;
  border: 1.5px solid var(--gray-gray-200, #e1e2e4);
  background: var(--gray-0, #fff);
`;

const DiscriptionBottom = ({ onClose }) => {
  const [visible, setVisible] = useState(true);
  const [startY, setStartY] = useState(0);
  const [endY, setEndY] = useState(0);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setEndY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (startY < endY && endY - startY > 50) {
      setVisible(false);
      onClose(); // 부모 컴포넌트의 상태를 업데이트하기 위해 호출
    }
  };

  useEffect(() => {
    const container = document.getElementById("swipe-container");

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startY, endY]);

  return (
    <Container id="swipe-container" visible={visible}>
      <Line>
        <img src={line} alt="Swipe Line" />
      </Line>
      <Content>
        <Title>
          <div>가장 가까운 소방서</div>관고119 안전센터
        </Title>

        <div>24시간 운영</div>
        <Where>
          <span>1km</span>
          <img src={line2} alt="line2" />
          <span>경기도 이천시 경충대로 2739</span>
        </Where>
      </Content>
      <ButtonWrapper>
        <Button onClick={() => alert("준비 중인 서비스입니다.")}>
          <img src={Call} alt="Call" />
          <span>전화걸기</span>
        </Button>
        <Button onClick={() => alert("준비 중인 서비스입니다.")}>
          <img src={findMap} alt="findMap" />
          <span>길 안내</span>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default DiscriptionBottom;
