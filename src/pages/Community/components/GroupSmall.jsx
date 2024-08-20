import styled from "styled-components";
import CommonSectionHeader from "./CommonSectionHeader";
import GovernAnnounce from "./GovernAnnounce";
import CommonMore from "./CommonMore";
import CommonPostItem from "./CommonPostItem";
import { ReactComponent as CarIcn } from "../assets/GroupCarIcn.svg";
import { ReactComponent as HomeIcn } from "../assets/GroupHomeIcn.svg";
import { ReactComponent as InsIcn } from "../assets/GroupInsIcn.svg";

const Container = styled.div`
  width: calc(100dvh * 0.48);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ScrollAreaHidden = styled.div`
  width: 100%;
  overflow-x: scroll;
  padding: 1.1rem 1rem;

  border-bottom: 1px solid #eaebec;
`;

const ScrollArea = styled.div`
  width: 38rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;

  overflow: scroll;
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

  text-align: left;
`;

const GroupScale = styled.div`
  align-self: stretch;
  color: #70737c;

  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;

  text-align: left;
`;

const GroupSmall = () => {
  return (
    <Container>
      <CommonSectionHeader type="Group" />
      <ScrollAreaHidden>
        <ScrollArea>
          <GroupItem>
            <CarIcn />
            <GroupTitle>
              침수 차량 <br />
              피해자 모임
            </GroupTitle>
            <GroupScale>204명</GroupScale>
          </GroupItem>
          <GroupItem>
            <HomeIcn />
            <GroupTitle>
              반지하 <br /> 피해자 모임
            </GroupTitle>
            <GroupScale>204명</GroupScale>
          </GroupItem>
          <GroupItem>
            <InsIcn />
            <GroupTitle>
              KB 보험청구
              <br /> 모임
            </GroupTitle>
            <GroupScale>204명</GroupScale>
          </GroupItem>
          <GroupItem>
            <HomeIcn />
            <GroupTitle>
              농업 피해자
              <br /> 모임
            </GroupTitle>
            <GroupScale>300명</GroupScale>
          </GroupItem>
        </ScrollArea>
      </ScrollAreaHidden>
      <CommonMore type="Group" />
    </Container>
  );
};

export default GroupSmall;
