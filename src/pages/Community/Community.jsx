import styled from "styled-components";
import Footer from "../../components/footer";

const Container = styled.div`
  height: 100dvh;
  width: calc(100dvh * 0.48);
`;

const Community = () => {
  return (
    <Container className="community">
      <div>Community Page</div>
      <Footer></Footer>
    </Container>
  );
};

export default Community;
