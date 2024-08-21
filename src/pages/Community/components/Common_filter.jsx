import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0.875rem 0rem 0.875rem 1rem;
  align-items: flex-start;
  gap: 0.3125rem;
  align-self: stretch;

  border-bottom: 1px solid #eaebec;
`;

const ScrollAreaWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
`;

const ScrollArea = styled.div`
  width: 37rem;

  display: flex;
  flex-direction: row;
  -ms-overflow-style: none;
  gap: 0.3rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const FilterItem = styled.div`
  cursor: pointer;

  display: flex;
  padding: 0.375rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 6.25rem;
  border: 1px solid #eaebec;
  color: #5a5c63;

  ${(props) =>
    props.clicked === true
      ? css`
          color: #fff;
          background-color: #46474c;
          border: transparent;
        `
      : css``}
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

// type: Govern / Neighbor
const Common_filter = ({ type }) => {
  const [state, setState] = useState(0);

  if (type === "Govern")
    return (
      <Container>
        <FilterItem clicked={state === 0} onClick={() => setState(0)}>
          전체
        </FilterItem>
        <FilterItem clicked={state === 1} onClick={() => setState(1)}>
          정부/지자체
        </FilterItem>
        <FilterItem clicked={state === 2} onClick={() => setState(2)}>
          파출소
        </FilterItem>
        <FilterItem clicked={state === 3} onClick={() => setState(3)}>
          소방서
        </FilterItem>
      </Container>
    );
  else
    return (
      <Container>
        <ScrollAreaWrapper>
          <ScrollArea>
            <FilterItem clicked={state === 0} onClick={() => setState(0)}>
              주제
            </FilterItem>
            <FilterItem clicked={state === 1} onClick={() => setState(1)}>
              인기글
            </FilterItem>
            <FilterItem clicked={state === 2} onClick={() => setState(2)}>
              반지하
            </FilterItem>
            <FilterItem clicked={state === 3} onClick={() => setState(3)}>
              차량피해
            </FilterItem>
            <FilterItem clicked={state === 4} onClick={() => setState(4)}>
              업장피해
            </FilterItem>
            <FilterItem clicked={state === 5} onClick={() => setState(5)}>
              농업피해
            </FilterItem>
            <FilterItem clicked={state === 6} onClick={() => setState(6)}>
              어업피해
            </FilterItem>
            <FilterItem clicked={state === 7} onClick={() => setState(7)}>
              보험
            </FilterItem>
          </ScrollArea>
        </ScrollAreaWrapper>
      </Container>
    );
};

export default Common_filter;
