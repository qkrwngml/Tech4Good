import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 1.25rem;
  align-items: center;
  gap: 0.875rem;
  align-self: stretch;
`;

const BankLogo = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;

  object-fit: cover;
`;

const Common_Insurance = ({ filterTitle, title, content }) => {
  return (
    <Container>
      <BankLogo
        src={process.env.PUBLIC_URL + `/images/Insurance/${title}.png`}
      ></BankLogo>
      {`${content} ${filterTitle} 침수 보험`}
    </Container>
  );
};

export default Common_Insurance;
