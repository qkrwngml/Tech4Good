import styled, { css } from "styled-components";

//공통 스타일 정의
const sharedStyle = css`
  flex: 0 0 84px;
  height: 37px;
  border-radius: 100px;
  border: 1px solid var(--gray-gray-150, #eaebec);
  background: var(--gray-0, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  margin-top: 16px;
  margin-left: 16px;
  padding-right: 16px;
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
`;

const FilterContent = styled.div`
  ${sharedStyle}
  &:last-child {
    margin-right: 0;
  }
`;

const Filter = ({ setSelectedCategory }) => {
  return (
    <Container>
      <FilterContent id="allMenu" onClick={() => setSelectedCategory("all")}>
        All
      </FilterContent>
      <FilterContent id="fireMenu" onClick={() => setSelectedCategory("fire")}>
        Fire
      </FilterContent>
      <FilterContent
        id="policeMenu"
        onClick={() => setSelectedCategory("police")}
      >
        Police
      </FilterContent>
      <FilterContent
        id="shelterMenu"
        onClick={() => setSelectedCategory("shelter")}
      >
        Shelter
      </FilterContent>
      <FilterContent
        id="housingMenu"
        onClick={() => setSelectedCategory("housing")}
      >
        Housing
      </FilterContent>
    </Container>
  );
};

export default Filter;
