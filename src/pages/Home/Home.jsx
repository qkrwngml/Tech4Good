import styled from "styled-components";
import Footer from "../../components/footer";
import Header from "./components/Home_Header";
import Home_Position from "./components/Home_Position";
import Home_Emergency from "./components/Home_Emergency";
import Home_MyAsset from "./components/Home_MyAsset";

const Container = styled.div`
  height: 100dvh;
  width: calc(100dvh * 0.48);

  background-color: #eff1f7;
`;

const ImpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  margin: 0 1rem;
`;

const Home = () => {
  return (
    <Container className="home">
      <Header></Header>
      <ImpContainer>
        {/* 내 현 위치와 날씨, 위험 등급 */}
        <Home_Position></Home_Position>
        {/* 안전 문자 */}
        <Home_Emergency></Home_Emergency>
        {/* 내 자산 관리 탭 */}
        <Home_MyAsset></Home_MyAsset>
        {/* 대처 가이드/ 긴급 신고/ 비상 연락 */}
        {/* 지원금 신청 */}

        {/* 보험 상품 */}
      </ImpContainer>

      <Footer></Footer>
    </Container>
  );
};

export default Home;
