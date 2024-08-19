import styled, { css } from "styled-components";
import { ReactComponent as BackBtn } from "../assets/Back.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 1.125rem 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const BackBtnWrapper = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
`;

const Title = styled.div`
  color: #37383c;
  text-align: center;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
`;

const EditBtn = styled.div`
  color: #46474c;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;

  cursor: pointer;

  ${(props) =>
    props.editOnClick === undefined
      ? css`
          visibility: hidden;
        `
      : css``}
`;

const Common_AssetHeader = ({ header_title, editOnClick }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackBtnWrapper onClick={() => navigate("/")}>
        <BackBtn />
      </BackBtnWrapper>
      <Title>{header_title}</Title>
      <EditBtn editOnClick={editOnClick} onClick={() => editOnClick()}>
        편집
      </EditBtn>
    </Container>
  );
};

export default Common_AssetHeader;
