import styled from "styled-components";
import Footer from "../../components/footer";

const Container = styled.div`
  height: 100dvh;
  width: calc(100dvh * 0.48);
`;

const Total = () => {
  return (
    <Container className="total">
      <div>Total Page</div>
      <Footer></Footer>
    </Container>
  );
};

export default Total;
