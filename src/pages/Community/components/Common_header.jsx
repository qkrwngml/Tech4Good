import styled from "styled-components";
import { ReactComponent as PlaceDetail } from "../assets/PlaceDetail.svg";
import { ReactComponent as SearchIcn } from "../assets/HeaderIcnSearch.svg";
import { ReactComponent as MyPageIcn } from "../assets/HeaderIcnMyPage.svg";
import { ReactComponent as AlarmIcn } from "../assets/HeaderIcnAlarm.svg";

const Container = styled.div`
  display: flex;
  padding: 1.125rem 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-bottom: 1px solid #eaebec;
`;

const Place = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Btns = styled.div`
  display: flex;
  align-items: center;

  gap: 0.3rem;

  cursor: pointer;
`;

const Common_header = () => {
  return (
    <Container>
      <Place onClick={() => alert("준비 중인 서비스입니다.")}>
        이천시
        <PlaceDetail />
      </Place>
      <Btns onClick={() => alert("준비 중인 서비스입니다.")}>
        <SearchIcn />
        <MyPageIcn />
        <AlarmIcn />
      </Btns>
    </Container>
  );
};

export default Common_header;
