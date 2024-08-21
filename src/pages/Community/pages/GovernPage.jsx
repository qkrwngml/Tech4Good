import styled from "styled-components";
import Footer from "../../../components/footer";
import CommonSectionHeader from "../components/CommonSectionHeader";
import Common_header from "../components/Common_header";
import GovernAnnounce from "../components/GovernAnnounce";
import CommonPostItem from "../components/CommonPostItem";
import Common_filter from "../components/Common_filter";

const Container = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* 미디어 쿼리 적용 */
  /* pc화면에서 너비를 390로 고정합니다*/
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }

  height: 88.8dvh;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  -ms-overflow-style: none;
  scrollbar-width: none;

  /* 미디어 쿼리 적용 */
  /* pc화면에서 너비를 390로 고정합니다*/
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const GovernPage = () => {
  return (
    <Container className="community_govern">
      <Common_header></Common_header>
      <CommonSectionHeader type="Govern"></CommonSectionHeader>
      <Common_filter type="Govern" />
      <GovernAnnounce></GovernAnnounce>
      <CommonPostItem
        type="Govern"
        title="[긴급] 마장면 반지하 거주민 긴급 대피 안내"
        content="주민 여러분들께. 마장면 반지하 거주민 긴급 대피 안내드립니다. 8월 24일 오후 4시"
      ></CommonPostItem>
      <CommonPostItem
        type="Govern"
        title="[긴급] 마장하천 인근 거주민 긴급 대피 안내"
        content="주민 여러분. 마장하천 인근 거주 주민 긴급 대피 안내드립니다. 8월 24일 오후 4시"
      ></CommonPostItem>
      <CommonPostItem
        type="Govern"
        title="[긴급] 오천터널 인근 접근 금지 안내"
        content="주민 여러분들께. 오천터널 인근 접근 금지 안내드립니다. 8월 24일 오후 4시"
      ></CommonPostItem>
      <CommonPostItem
        type="Govern"
        title="[긴급] 마장면 반지하 거주민 긴급 대피 안내"
        content="주민 여러분들께. 마장면 반지하 거주민 긴급 대피 안내드립니다. 8월 24일 오후 4시"
      ></CommonPostItem>
      <Footer></Footer>
    </Container>
  );
};

export default GovernPage;
