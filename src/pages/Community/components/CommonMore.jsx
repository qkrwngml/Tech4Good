import styled from "styled-components";
import { ReactComponent as MoreIcn } from "../assets/GovernAnnounceMore.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
  width: 100%;
`;

const BtnWrapper = styled.div`
  padding: 0.75rem;
  color: #70737c;
  text-align: center;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// type: Govern, Group, Neighbor
const CommonMore = ({ type }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <BtnWrapper
        onClick={
          type === "Group"
            ? () => {
                alert("준비 중인 서비스입니다.");
              }
            : () => {
                navigate(`/community/${type}`);
              }
        }
      >
        {type === "Govern"
          ? "정부 게시글"
          : type === "Group"
          ? "모임"
          : "동네 소통"}
        {" 더보기"}
        <MoreIcn />
      </BtnWrapper>
    </Container>
  );
};

export default CommonMore;
