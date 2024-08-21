import styled from "styled-components";
import CommonSectionHeader from "./CommonSectionHeader";
import GovernAnnounce from "./GovernAnnounce";
import CommonMore from "./CommonMore";
import CommonPostItem from "./CommonPostItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 12dvh;
`;

const NeighborSmall = () => {
  return (
    <Container>
      <CommonSectionHeader type="Neighbor" />
      <CommonPostItem
        type="Neighbor"
        postType="반지하"
        title="반지하 침수 경험 있는 사람?"
        content="마장면 빌라촌 사는데 어제 호우에 침수됐다.. 어떡하냐 우선 집주인이랑 얘기했는데"
      />
      <CommonPostItem
        type="Neighbor"
        postType="차량피해"
        title="전기차 침수됐는데 이거 보험되나요?"
        content="테슬라 침수됨 .. 어캄 "
      />
      <CommonPostItem
        type="Neighbor"
        postType="농업피해"
        title="비닐하우스 모두 못 쓰게 됐습니다.."
        content="열심히 준비해뒀는데 의미 없네요.. 한 순간에 올해농사 다 망하고 돈 널렸네요"
      />
      <CommonMore type="Neighbor" />
    </Container>
  );
};

export default NeighborSmall;
