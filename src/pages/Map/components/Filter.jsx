import styled, { css } from "styled-components";

import allIcon from "../assets/allFilter.svg";
import fireIcon from "../assets/fireFilter.svg";
//fire 선택 시 밑 아이콘으로 변경되도록 구현해야함
import fireIconWhite from "../assets/fireFilterWhite.svg";
import policeIcon from "../assets/policeFilter.svg";
import shelterIcon from "../assets/shelterFilter.svg";

//공통 스타일 정의
const sharedStyle = css`
  flex: 0 0 93px;
  height: 37px;
  border-radius: 100px;
  border: 1px solid var(--gray-gray-150, #eaebec);
  background: var(--gray-0, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.19rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  margin-top: 16px;
  margin-left: 16px;
  padding-right: 16px;
  font-size: 0.875rem;
  line-height: 1.4375rem;
  color: var(--gray-gray-800, #5a5c63);
  letter-spacing: -0.00875rem;
  gap: 4px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .menu_selected,
  .none_selected {
    ${sharedStyle}
  }
  .menu_selected {
    background: #ff8c22;
    color: white;
  }
`;

const FilterContent = styled.div`
  ${sharedStyle}
  &:first-child {
    color: white;
    background: #476de0;
  }
`;

const Filter = ({ setSelectedCategory }) => {
  return (
    <Container>
      <FilterContent id="allMenu" onClick={() => setSelectedCategory("all")}>
        <img src={allIcon} alt="allIcon" />
        전체
      </FilterContent>
      <FilterContent id="fireMenu" onClick={() => setSelectedCategory("fire")}>
        <img src={fireIcon} alt="allIcon" />
        소방서
      </FilterContent>
      <FilterContent
        id="policeMenu"
        onClick={() => setSelectedCategory("police")}
      >
        <img src={policeIcon} alt="allIcon" />
        파출소
      </FilterContent>
      <FilterContent
        id="shelterMenu"
        onClick={() => setSelectedCategory("shelter")}
      >
        <img src={shelterIcon} alt="allIcon" />
        대피소
      </FilterContent>
      <FilterContent
        id="housingMenu"
        onClick={() => setSelectedCategory("housing")}
      >
        <span>P</span>
        임시주거시설
      </FilterContent>
    </Container>
  );
};

export default Filter;
