import styled from "styled-components";
import CommonSectionHeader from "./CommonSectionHeader";
import GovernAnnounce from "./GovernAnnounce";
import CommonMore from "./CommonMore";
import CommonPostItem from "./CommonPostItem";

const Container = styled.div`
  width: calc(100dvh * 0.48);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const GovernSmall = () => {
  return (
    <Container>
      <CommonSectionHeader type="Govern" />
      <GovernAnnounce />
      <CommonPostItem
        type="Govern"
        title="[긴급] 종로동 반지하 거주민 긴급 대피 안내"
        content="주민 여러분들께. 종로동 반지하 거주민 긴급 대피 안내드립니다. 8월 24일 오후 4시"
      />
      <CommonMore type="Govern" />
    </Container>
  );
};

export default GovernSmall;
