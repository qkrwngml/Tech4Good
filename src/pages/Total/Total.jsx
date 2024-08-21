import styled from "styled-components";
import Footer from "../../components/footer";

import profile from "./assets/profile.svg";
import arrow from "./assets/arrow.svg";
import setting from "./assets/setting.svg";
import notice from "./assets/notice.svg";
import pronounce from "./assets/pronounce.svg";
import house from "./assets/house.svg";
import park from "./assets/park.svg";
import car from "./assets/car.svg";
import greenHouse from "./assets/greenHouse.svg";
import ship from "./assets/ship.svg";
import shelter from "./assets/shelter.svg";
import talk from "./assets/talk.svg";
import money from "./assets/money.svg";
import emergency from "./assets/emergency.svg";
import insurance from "./assets/insurance.svg";
import ai from "./assets/ai.svg";
import { useNavigate } from "react-router-dom";

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
  position: relative;

  #arrow {
    position: absolute;
    right: 35px;
  }
  img {
    width: 24px;
  }
`;

const Wrapper = styled.div`
  padding: 20px 16px;
  background: #eff0f7;
  overflow: scroll;
  padding-bottom: 100px;
`;

const Mypage = styled.div`
  display: flex;
  padding: 20px 20px 20px 24px;
  border-radius: 16px;
  background: var(--gray-0, #fff);
  gap: 7px;
  position: relative;
  color: var(--gray-gray-850, #46474c);

  font-size: 16px;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

const SettingWrapper = styled.div`
  height: 86px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  background: var(--gray-0, #fff);
  margin-top: 12px;
  padding: 20px 43px;
  justify-content: space-between;
`;

const Setting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 48px;
  color: var(--gray-gray-800, #5a5c63);
  font-size: 14px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.14px;
`;

const FloodSafety = styled.div`
  padding: 20px 24px;
  border-radius: 20px;
  background: var(--gray-0, #fff);
  margin-top: 12px;
  text-align: left;
`;

const Title = styled.div`
  color: var(--gray-gray-750, #70737c);
  font-size: 16px;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--gray-gray-850, #46474c);

  font-size: 16px;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    gap: 8px;
    cursor: pointer;
  }
`;

const ItemWithAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  /* 애니메이션 */
  animation: pulse 2s infinite;
  cursor: pointer;

  /* 클릭 시 스타일 */
  &:active {
    transform: scale(0.95);
  }

  img {
    transition: transform 0.2s;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ProductRecommender = styled.div``;

const Total = () => {
  const navigate = useNavigate();
  return (
    <Container className="total">
      <Wrapper>
        <Mypage onClick={() => alert("준비 중인 서비스입니다.")}>
          <img src={profile} alt="profile" />
          <span>내 정보</span>
          <img src={arrow} alt="arrow" id="arrow" />
        </Mypage>
        <SettingWrapper>
          <Setting onClick={() => alert("준비 중인 서비스입니다.")}>
            <img src={setting} alt="setting" />
            <span>설정</span>
          </Setting>
          <Setting onClick={() => alert("준비 중인 서비스입니다.")}>
            <img src={notice} alt="notice" />
            <span>FAQ</span>
          </Setting>
          <Setting onClick={() => alert("준비 중인 서비스입니다.")}>
            <img src={pronounce} alt="pronounce" />
            <span>고객센터</span>
          </Setting>
        </SettingWrapper>
        <FloodSafety>
          <Title
            onClick={() => {
              navigate("/total/guideLine");
            }}
          >
            침수 대비
          </Title>
          <ContentWrapper>
            <div
              onClick={() => {
                navigate("/total/guideLine");
              }}
            >
              <ItemWithAnimation>
                {" "}
                <img src={house} alt="house" />
                <span>거주지</span>
              </ItemWithAnimation>

              <img src={arrow} alt="arrow" id="arrow" />
            </div>
            <div
              onClick={() => {
                navigate("/map");
              }}
            >
              <img src={park} alt="park" />
              <span>지하주차장</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
            <div
              onClick={() => {
                navigate("/map");
              }}
            >
              <img src={car} alt="car" />
              <span>차량 이용자</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
            <div onClick={() => alert("준비 중인 서비스입니다.")}>
              <img src={greenHouse} alt="greenHouse" />
              <span>비닐하우스</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
            <div onClick={() => alert("준비 중인 서비스입니다.")}>
              <img src={ship} alt="ship" />
              <span>어업</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
          </ContentWrapper>
        </FloodSafety>
        <FloodSafety>
          <Title>침수 피해</Title>
          <ContentWrapper>
            <div
              onClick={() => {
                navigate("/map");
              }}
            >
              <img src={shelter} alt="shelter" />
              <span>임시주거시설</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
            <div onClick={() => alert("준비 중인 서비스입니다.")}>
              <img src={talk} alt="talk" />
              <span>피해 상담</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
            <div onClick={() => alert("준비 중인 서비스입니다.")}>
              <img src={money} alt="money" />
              <span>정부 지원</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
            <div onClick={() => alert("준비 중인 서비스입니다.")}>
              <img src={emergency} alt="emergency" />
              <span>긴급 신고</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
          </ContentWrapper>
        </FloodSafety>
        <FloodSafety>
          <Title>상품</Title>
          <ContentWrapper>
            <div onClick={() => alert("준비 중인 서비스입니다.")}>
              <img src={insurance} alt="insurance" />
              <span>침수 보험</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
            <div onClick={() => alert("준비 중인 서비스입니다.")}>
              <img src={ai} alt="ai" />
              <span>AI 예측 모델</span>
              <img src={arrow} alt="arrow" id="arrow" />
            </div>
          </ContentWrapper>
        </FloodSafety>
      </Wrapper>

      <Footer></Footer>
    </Container>
  );
};

export default Total;
