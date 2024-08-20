import styled from "styled-components";
import Footer from "../../../components/footer";
import CommonSectionHeader from "../components/CommonSectionHeader";
import Common_header from "../components/Common_header";
import CommonPostItem from "../components/CommonPostItem";
import Common_filter from "../components/Common_filter";
import AssetDetail_Edit_NewItemBtn from "../../Home/components/AssetDetail_Edit_NewItemBtn";

const Container = styled.div`
  height: 88.8dvh;
  width: calc(100dvh * 0.48);

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NeighborPage = () => {
  return (
    <Container className="community_neighbor">
      <Common_header></Common_header>
      <CommonSectionHeader type="Neighbor" />
      <Common_filter type="Neighbor" />
      <CommonPostItem
        type="Neighbor"
        postType="반지하"
        title="전기차 침수됐는데 이거 보험되나요?"
        content="테슬라 침수됨 .. 어캄 "
      ></CommonPostItem>
      <CommonPostItem
        type="Neighbor"
        postType="차량피해"
        title="반지하 침수 경험 있는 사람?"
        content="종로동 빌라촌 사는데 어제 호우에 침수됐다.. 어떡하냐 우선 집주인이랑 얘기했는데"
      ></CommonPostItem>
      <CommonPostItem
        type="Neighbor"
        postType="농업피해"
        title="비닐하우스 모두 못 쓰게 됐습니다.."
        content="열심히 준비해뒀는데 의미 없네요.. 한 순간에 올해농사 다 망하고 돈 널렸네요"
      ></CommonPostItem>
      <CommonPostItem
        type="Neighbor"
        postType="반지하"
        title="비닐하우스 모두 못 쓰게 됐습니다.."
        content="열심히 준비해뒀는데 의미 없네요.. 한 순간에 올해농사 다 망하고 돈 널렸네요"
      ></CommonPostItem>
      <CommonPostItem
        type="Neighbor"
        postType="반지하"
        title="전기차 침수됐는데 이거 보험되나요?"
        content="테슬라 침수됨 .. 어캄 "
      ></CommonPostItem>
      <Footer></Footer>
      {/* <AssetDetail_Edit_NewItemBtn type="Neighbor" /> */}
    </Container>
  );
};

export default NeighborPage;
