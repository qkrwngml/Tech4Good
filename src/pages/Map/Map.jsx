import styled from "styled-components";
import Footer from "../../components/footer";

const Container = styled.div`
  height: 100dvh;
  width: calc(100dvh * 0.48);
`;

const Map = () => {
  return (
    <Container className="map">
      <div>Map Page</div>
      <Footer></Footer>
    </Container>
  );
};

export default Map;
