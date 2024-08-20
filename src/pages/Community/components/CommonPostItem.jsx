import styled, { css } from "styled-components";
import { ReactComponent as HeartIcn } from "../assets/PostItemHeart.svg";
import { ReactComponent as LikeIcn } from "../assets/PostItemLike.svg";
import { ReactComponent as CommentIcn } from "../assets/PostItemComment.svg";

const Container = styled.div`
  display: flex;
  padding: 1rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;

  border-bottom: 1px solid #eaebec;
`;

const AnnounceType = styled.div`
  display: flex;
  padding: 0.0625rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;

  border-radius: 0.375rem;

  ${(props) =>
    props.type === "Govern"
      ? css`
          color: #ff5253;
          background-color: #fddede;
        `
      : css`
          color: #5a5c63;
          background-color: #eaebec;
        `}
`;

const ContentType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;

  color: #37383c;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
`;

const ContentDetail = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;

  overflow: hidden;

  color: #70737c;
  text-align: left;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375rem;

  color: #878a93;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

const FooterReaction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const FooterEachReaction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1875rem;

  color: #70737c;
  text-align: center;

  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

// props: type,postType, title, content
const CommonPostItem = ({ type, postType, title, content }) => {
  return (
    <Container>
      {/* 긴급 대피 안내 */}
      {type === "Govern" ? (
        <AnnounceType type={type}>긴급 대피 안내</AnnounceType>
      ) : (
        <AnnounceType type={type}>{postType}</AnnounceType>
      )}
      <ContentType>
        <div>{title}</div>
        <ContentDetail>{content}</ContentDetail>
      </ContentType>
      {/* Wrapper - title/ content */}
      <FooterWrapper>
        <FooterInfo>
          <span>종로구청 | </span>
          <span>10분 전 | </span>
          <span>조회 500</span>
        </FooterInfo>
        <FooterReaction>
          <FooterEachReaction>
            <HeartIcn />2
          </FooterEachReaction>
          <FooterEachReaction>
            <LikeIcn />4
          </FooterEachReaction>
          <FooterEachReaction>
            <CommentIcn />
            89
          </FooterEachReaction>
        </FooterReaction>
      </FooterWrapper>
      {/* Wrapper - 정보 / 반응 */}
    </Container>
  );
};

export default CommonPostItem;
