import styled from "styled-components";
import Footer from "../../../components/footer";
import Common_header from "../components/Common_header";
import GovernSmall from "../components/GovernSmall";
import GroupSmall from "../components/GroupSmall";
import NeighborSmall from "../components/NeighborSmall";

const Container = styled.div`
  height: 100dvh;
  width: calc(100dvh * 0.48);

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Horizon = styled.div`
  width: 100%;
  height: 0.875rem;
  align-self: stretch;

  background-color: #e5e6ef;
`;

const CommunityPage = () => {
  return (
    <Container className="community">
      {/* 공통 컴포-  헤더 */}
      <Common_header />
      {/* 정부 공지 */}
      <GovernSmall />
      {/* horizon */}
      <Horizon />
      {/* 모임 */}
      <GroupSmall />
      {/* horizon */}
      <Horizon />
      {/* 동네 소통 */}
      <NeighborSmall />
      {/* horizon */}
      <Footer></Footer>
    </Container>
  );
};

export default CommunityPage;
