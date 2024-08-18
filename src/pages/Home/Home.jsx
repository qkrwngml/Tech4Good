import styled from "styled-components";
import Footer from "../../components/footer";
import Header from "./components/Header";

const Container = styled.div`
  height: 100dvh;
  width: calc(100dvh * 0.48);
`;

const Home = () => {
  return (
    <Container className="home">
      <Header></Header>
      <div>Home Page</div>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
