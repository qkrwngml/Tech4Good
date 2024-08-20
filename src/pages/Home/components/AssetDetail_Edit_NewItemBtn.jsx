import styled from "styled-components";
import { useState } from "react";
import css from "styled-components";
import { ReactComponent as AddBtn } from "../assets/AddNew.svg";
import { ReactComponent as CloseBtn } from "../assets/Close.svg";
import React from "react";
import { ReactComponent as Place } from "../assets/AddPlace.svg";
import { ReactComponent as Car } from "../assets/AddCar.svg";

const FloatingButtonContainer = styled.div`
  position: absolute;
  bottom: 5vh;
  right: 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FloatingOnButton = styled.button`
  border: none;
  border-radius: 6.25rem;
  background-color: #476de0;

  display: inline-flex;
  padding: 0.625rem 1.25rem 0.625rem 0.875rem;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  transition: background-color 0.3s, transform 0.3s;
`;

const FloatingOffButton = styled(FloatingOnButton)`
  padding: 0.625rem;
  background-color: #ffffff;
  align-self: auto;
`;

const AdditionalButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #476de0;

  display: flex;
  padding: 0.75rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  margin-bottom: 1rem;
  border-radius: 6.25rem;

  color: #ffffff;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;

  opacity: ${(props) => (props.visible ? "1" : "0")};
`;

const AssetDetail_Edit_NewItemBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <FloatingButtonContainer>
      <AdditionalButton
        visible={isClicked}
        onClick={() => {
          alert("준비 중인 서비스입니다.");
        }}
      >
        <Place /> 장소 추가
      </AdditionalButton>
      <AdditionalButton
        visible={isClicked}
        onClick={() => {
          alert("준비 중인 서비스입니다.");
        }}
      >
        <Car />
        자동차 추가
      </AdditionalButton>
      {isClicked === false ? (
        <FloatingOnButton
          onClick={() => setIsClicked(!isClicked)}
          isClicked={isClicked}
        >
          <AddBtn /> 추가
        </FloatingOnButton>
      ) : (
        <FloatingOffButton
          onClick={() => setIsClicked(!isClicked)}
          isClicked={isClicked}
        >
          <CloseBtn />
        </FloatingOffButton>
      )}
    </FloatingButtonContainer>
  );
};

export default AssetDetail_Edit_NewItemBtn;
