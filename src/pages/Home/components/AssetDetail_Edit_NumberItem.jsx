import styled from "styled-components";

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

const AssetDetail_Edit_NumberItem = (assetItem) => {
  console.log(assetItem);
  return (
    <Container>
      <Form>
        <Title>연락처 {assetItem.numberkey}</Title>
        <Input value={assetItem.number}></Input>
      </Form>
      <Form>
        <Title>관계 {assetItem.numberkey}</Title>
        <Input value={assetItem.index}></Input>
      </Form>
      <HorizonDiv></HorizonDiv>
    </Container>
  );
};

export default AssetDetail_Edit_NumberItem;
