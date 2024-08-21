import styled from "styled-components";
import { ReactComponent as GuideIcn } from "../assets/guideIcn.svg";
import { ReactComponent as VideoIcn } from "../assets/videoIcn.svg";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.375rem;
  align-self: stretch;

  border-bottom: 1px solid #eaebec;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;

  color: #37383c;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
`;

// type: video, guide
// title : "가이드 영상", "호우 예보시 행동 요령"
const GuideLine_Title = ({ type, title }) => {
  return (
    <Container>
      <ContentWrapper>
        {type === "video" ? <VideoIcn /> : <GuideIcn />}
        <div>{title}</div>
      </ContentWrapper>
    </Container>
  );
};

export default GuideLine_Title;
