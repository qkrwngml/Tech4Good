import styled from "styled-components";
import Footer from "../../../components/footer";

const Container = styled.div`
  height: 100dvh;
  width: calc(100dvh * 0.48);

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const GovernPage = () => {
  return (
    <Container className="community_govern">
      <Footer></Footer>
    </Container>
  );
};

export default GovernPage;
