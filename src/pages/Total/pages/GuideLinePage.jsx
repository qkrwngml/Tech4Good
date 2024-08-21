import styled from "styled-components";
import Common_AssetHeader from "../../Home/components/Common_AssetHeader";
import GuideLine_Title from "../components/GuideLine_Title";
import { ReactComponent as GoIcn } from "../../Home/assets/RegBtn_go.svg";
import { ReactComponent as FindShelterIcn } from "../assets/findShelterIcn.svg";
import { useNavigate } from "react-router-dom";
import GuideLine_Videos from "../components/GuideLine_Videos";
import GuideLine_Guides from "../components/GuideLine_Guides";

const Container = styled.div`
  max-width: calc(100dvh * 0.48);
  width: 100dvw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ScrollMainWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  padding: 1rem 0rem 1rem 1rem;
`;

const ShelterMainWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const GetShelterWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1.25rem 1rem 1.25rem 1.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 1rem;
  background: #d1daf7;

  cursor: pointer;
`;

const GetShelterTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.625rem;
  height: 100%;
`;

const Title = styled.div`
  color: #37383c;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.9rem;
  letter-spacing: -0.01rem;
  text-align: center;
  vertical-align: center;
`;

const Horizon = styled.div`
  width: 100%;
  height: 0.875rem;
  align-self: stretch;

  background-color: #f4f4f5;
`;

const GuideLinePage = () => {
  const navigate = useNavigate();

  return (
    <Container className="guideLinePage">
      <Common_AssetHeader header_title="침수 대비 - 주거지" backLink="/total" />
      <GuideLine_Title title="가이드 영상" type="video" />
      {/* 가로 스크롤 요소 */}
      <ScrollMainWrapper>
        <GuideLine_Videos></GuideLine_Videos>
      </ScrollMainWrapper>
      {/* Horizon */}
      <Horizon />
      <GuideLine_Title title="호우 예보시 행동 요령" type="guide" />
      {/* 행동 요령 요소들 */}
      <GuideLine_Guides />
      {/* Horizon */}
      <Horizon />
      {/* 우리집 근처 대피소 찾기 */}
      <ShelterMainWrapper onClick={() => navigate("/map")}>
        <GetShelterWrapper>
          <GetShelterTitle>
            <FindShelterIcn />
            <Title>우리집 근처 대피소 찾기</Title>
          </GetShelterTitle>
          <GoIcn />
        </GetShelterWrapper>
      </ShelterMainWrapper>
    </Container>
  );
};

export default GuideLinePage;
