import React, { useState, useEffect } from "react";
import styled from "styled-components";
import line from "../../assets/bottomSheet.svg";
import allIcon from "../../assets/allFilter.svg";
import government from "../../assets/government.svg";

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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
`;

const Button = styled.button`
  background: ${(props) => (props.active ? "#5A5C63" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: ${(props) => (props.active ? "none" : "1px solid #ddd")};
  width: ${(props) => (props.active ? "84px" : "49px")};
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5px;
  border-radius: 13px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`;

const NoticeHeader = styled.div`
  margin-top: 24px;
  display: flex;
`;

const HeaderText = styled.span`
  color: var(--gray-gray-900, #37383c);
  text-align: center;

  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.16px;

  display: flex;
  align-items: center;
  gap: 6px;
`;

const EmergencyAlert = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 16px;
  background: var(--sub_red-sub_red_200, #fddede);
  margin-top: 10px;
  height: 109px;
`;

const AlertTitle = styled.p`
  color: var(--sub_red-sub_red_700_error, #ff5253);
  text-align: left;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.12px;
  margin: 0;
`;

const AlertSubtitle = styled.p`
  color: var(--gray-gray-900, #37383c);
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  margin-top: 4px;
`;

const AlertDescription = styled.p`
  overflow: hidden;
  color: var(--gray-gray-750, #70737c);
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 400;
  margin: 0;
  overflow: hidden;
  margin-top: 4px;
`;

const InfoBottom = ({ onClose }) => {
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
      <ButtonGroup>
        <Button active>
          <img src={allIcon} alt="All Icon" />
          전체
        </Button>
        <Button
          onClick={() => {
            alert("준비 중인 서비스입니다.");
          }}
        >
          위험
        </Button>
        <Button
          onClick={() => {
            alert("준비 중인 서비스입니다.");
          }}
        >
          경고
        </Button>
        <Button
          onClick={() => {
            alert("준비 중인 서비스입니다.");
          }}
        >
          주의
        </Button>
        <Button
          onClick={() => {
            alert("준비 중인 서비스입니다.");
          }}
        >
          안전
        </Button>
      </ButtonGroup>

      <NoticeHeader>
        <HeaderText>
          <img src={government} alt="Government Icon" />
          <span>정부 공지</span>
        </HeaderText>
      </NoticeHeader>

      <EmergencyAlert>
        <AlertTitle>긴급 대피 안내</AlertTitle>
        <AlertSubtitle>
          [긴급] 종로동 반지하 거주민 긴급 대피 안내
        </AlertSubtitle>
        <AlertDescription>
          주민 여러분들께. 종로동 반지하 거주민 긴급 대피 안내...
        </AlertDescription>
      </EmergencyAlert>
    </Container>
  );
};

export default InfoBottom;
