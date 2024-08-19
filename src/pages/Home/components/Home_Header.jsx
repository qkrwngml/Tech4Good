import styled from "styled-components";
import { ReactComponent as LogoIcn } from "../assets/Logo.svg";
import { ReactComponent as AlertIcn } from "../assets/Alert.svg";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const SvgContainer = styled.div`
  width: 25%;
  padding: 1rem;
`;

const AlertContainer = styled.div`
  width: 15%;
  padding: 1rem;
`;

const Header = () => {
  return (
    <Container>
      <SvgContainer>
        <LogoIcn></LogoIcn>
      </SvgContainer>
      <AlertContainer>
        <AlertIcn></AlertIcn>
      </AlertContainer>
    </Container>
  );
};

export default Header;
