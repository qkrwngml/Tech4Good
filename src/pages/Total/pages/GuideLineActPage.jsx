import styled from "styled-components";
import { ReactComponent as BackIcn } from "../assets/BackBtn.svg";
import { ReactComponent as ShareIcn } from "../assets/ShareBtn.svg";
import { useNavigate } from "react-router-dom";
import Guide from "../assets/guide.png";

const Container = styled.div`
  max-width: calc(100dvh * 0.48);
  width: 100dvw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.div`
  display: flex;
  padding: 1.125rem 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 1.25rem 0.5rem 3.8rem 0.5rem;
`;

const GuideTitle = styled.div`
  color: #37383c;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem; /* 140% */
  letter-spacing: -0.0125rem;
`;

const GuideImg = styled.img`
  padding: 1.5rem 0rem;
  width: 100%;

  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  align-self: stretch;
`;

const InfoTitle = styled.div`
  color: #37383c;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
`;

const InfoDetail = styled.div`
  color: #5a5c63;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;

  text-align: left;
`;

const GuideLineActPage = () => {
  const navigate = useNavigate();

  const dummyInfoData = [
    {
      title: "기상 정보 확인",
      detail:
        "저지대, 상습침수지역에 거주하고 있는 주민은 기상정보를 수시로 확인하고, 대피를 준비합니다.",
    },
    {
      title: "전기, 가스 차단",
      detail: "사전대피가 필요할 경우 전기, 가스를 차단하고 대피합니다.",
    },
    {
      title: "전기 시설물 보호",
      detail:
        "많은 비가 예보되면 음식점 등 상가에서는 거리에 비치한 간판 등 전기 시설물을 건물 안으로 옮겨둡니다.",
    },
    {
      title: "비상 연락망",
      detail:
        "마을 이장, 통·반장 등 관리자는 마을방송 또는 비상연락망 등을 통해 외출 자제를 당부합니다.",
    },
    {
      title: "대피소 확인",
      detail: "비상시 마을 주변 대피 장소를 사전에 안내합니다. ",
    },
  ];

  return (
    <Container className="guideLineAct">
      <Header>
        <BackIcn
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
          }}
        />
        <ShareIcn
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("준비 중인 서비스입니다.");
          }}
        />
      </Header>
      <ContentWrapper>
        {/* 타이틀 */}
        <GuideTitle>호우 예보시 취약지역 거주자 행동 요령</GuideTitle>
        {/* 위 1.5 padding 준 jpg */}
        <GuideImg src={Guide} />
        {/* 정보 컨테이너 */}
        <InfoContainer>
          {dummyInfoData.map((item) => (
            <InfoItem>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoDetail>{item.detail}</InfoDetail>
            </InfoItem>
          ))}
        </InfoContainer>
      </ContentWrapper>
    </Container>
  );
};

export default GuideLineActPage;
