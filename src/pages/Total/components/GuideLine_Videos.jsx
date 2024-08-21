import styled from "styled-components";
import ThumbNail1 from "../assets/video1.png";
import ThumbNail2 from "../assets/video2.png";

const ScrollArea = styled.div`
  width: 27rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

const ItemWrapper = styled.div`
  display: flex;
  width: 11.875rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;

  cursor: pointer;
`;

const ThumbNailWrapper = styled.img`
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid #e1e2e4;
  object-fit: cover;

  cursor: pointer;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.0625rem;
`;

const Title = styled.div`
  color: #46474c;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375rem;
  align-self: stretch;
`;

const DetailItem = styled.div`
  color: #878a93;
  text-align: center;

  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

const GuideLine_Videos = () => {
  return (
    <ScrollArea>
      <ItemWrapper
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=RB-KfzYe2aY")
        }
      >
        <ThumbNailWrapper src={ThumbNail1} />
        <InfoWrapper>
          <Title>가옥 침수시 대피 방법</Title>
          <DetailWrapper>
            <DetailItem>행정 안전부 | 3분 15초 | 조회 500</DetailItem>
          </DetailWrapper>
        </InfoWrapper>
      </ItemWrapper>
      <ItemWrapper
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=DMW_RxrbOcc")
        }
      >
        <ThumbNailWrapper src={ThumbNail2} />
        <InfoWrapper>
          <Title>침수 발생시 행동 요령</Title>
          <DetailWrapper>
            <DetailItem>행정 안전부 | 3분 15초 | 조회 500</DetailItem>
          </DetailWrapper>
        </InfoWrapper>
      </ItemWrapper>
    </ScrollArea>
  );
};

export default GuideLine_Videos;
