import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #5a5c63;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const Input = styled.input`
  border: none;
  outline: none;

  display: flex;
  height: 3.25rem;
  padding: 1.125rem 0.75rem 1.125rem 1.125rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  color: #37383c;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;

  border-radius: 0.75rem;
  border: 1.5px solid var(--gray-gray-150, #eaebec);
  background: var(--gray-0, #fff);
`;

const HorizonDiv = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: #eaebec;
`;

// state는 부모 컴포넌트에서 관리, 저장하기 버튼 누르면 수정된 값이 asset에 저장될 것임.
const AssetDetail_Edit_NumberItem = (assetItem) => {
  // 변할 때마다 handleInputChange 함수 호출

  // 초기 state 설정
  const [numberItem, setNumberItem] = useState({
    numberIndex: assetItem.numberkey,
    number: assetItem.number,
    index: assetItem.index,
  });

  const onChange = (type, e) => {
    setNumberItem((prevItem) => ({
      ...prevItem,
      [type]: e.target.value, // 'type'을 키로 사용하여 상태 업데이트
    }));

    assetItem.handleInputChange(numberItem);
  };

  useEffect(() => {
    // numberItem 상태가 변경될 때마다 handleInputChange 호출
    assetItem.handleInputChange(numberItem);
  }, [numberItem]);

  return (
    <Container>
      <Form>
        <Title>연락처 {assetItem.numberkey}</Title>
        <Input
          value={numberItem.number}
          onChange={(e) => onChange("number", e)}
        ></Input>
      </Form>
      <Form>
        <Title>관계 {assetItem.numberkey}</Title>
        <Input
          value={numberItem.index}
          onChange={(e) => onChange("index", e)}
        ></Input>
      </Form>
      <HorizonDiv></HorizonDiv>
    </Container>
  );
};

export default AssetDetail_Edit_NumberItem;
