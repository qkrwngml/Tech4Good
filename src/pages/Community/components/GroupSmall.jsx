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
  border-bottom: 1px solid #eaebec;
`;

const ScrollArea = styled.div`
  width: 50rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  background-color: yellow;

  overflow: inherit;
`;

const GroupItem = styled.div`
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  width: 9.0625rem;
  height: 9.0625rem;

  border-radius: 0.75rem;
  background: #f0f3fd;
`;

const GroupTitle = styled.div`
  align-self: stretch;

  color: #46474c;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
  letter-spacing: -0.01rem;
`;

const GroupScale = styled.div`
  align-self: stretch;
  color: #70737c;

  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

const GroupSmall = () => {
  return (
    <Container>
      <CommonSectionHeader type="Group" />
      <ScrollArea>
        <GroupItem>
          {/* Icon */}
          <GroupTitle>침수 차량 피해자 모임</GroupTitle>
          <GroupScale>204명</GroupScale>
        </GroupItem>
        <GroupItem>
          {/* Icon */}
          <GroupTitle>반지하 피해자 모임</GroupTitle>
          <GroupScale>204명</GroupScale>
        </GroupItem>
        <GroupItem>
          {/* Icon */}
          <GroupTitle>KB 보험청구 모임</GroupTitle>
          <GroupScale>204명</GroupScale>
        </GroupItem>
        <GroupItem>
          {/* Icon */}
          <GroupTitle></GroupTitle>
          <GroupScale></GroupScale>
        </GroupItem>
      </ScrollArea>
      <CommonMore type="Group" />
    </Container>
  );
};

export default GroupSmall;
