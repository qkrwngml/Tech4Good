import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Common_AssetHeader from "../components/Common_AssetHeader";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { assetState } from "../../../Recoil";

const Container = styled.div`
  background-color: #ffffff;
  width: calc(100dvh * 0.48);
  height: 100dvh;

  overflow-y: scroll;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  padding: 1rem 0.5rem;
`;

const FormTitle = styled.div`
  align-self: stretch;
  color: #37383c;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem; /* 140% */
  letter-spacing: -0.0125rem;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #5a5c63;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const Input = styled.input`
  border: none;
  outline: none;

  display: flex;
  height: 3.25rem;
  padding: 1.125rem 0.75rem 1.125rem 1.125rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  color: #37383c;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;

  border-radius: 0.75rem;
  border: 1.5px solid var(--gray-gray-150, #eaebec);
  background: var(--gray-0, #fff);

  &::placeholder {
    color: #c2c4c8;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.625rem; /* 162.5% */
    letter-spacing: -0.01rem;
  }
`;

const DoneBtn = styled.div`
  cursor: pointer;

  display: flex;
  padding: 0.875rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.1875rem;
  align-self: stretch;

  border-radius: 0.875rem;
  background: #dbdcdf;

  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;

  ${(props) =>
    props.valid === true
      ? css`
          background-color: #476de0;
        `
      : css`
          background-color: #dbdcdf;
        `}
`;

// 정보 수정 페이지에서 전달한 onSubmit 함수
const AssetAddNumberPage = () => {
  // 현재 전화번호를 추가하고자 하는 asset 아이템의 key
  const { assetKey } = useParams();

  const [phone, setPhone] = useState("");
  const phoneRef = useRef(null);
  const [relationship, setRelationship] = useState("");
  const relRef = useRef(null);

  // asset
  const [asset, setAsset] = useRecoilState(assetState);

  // 제출 가능한지 관리
  const [valid, setValid] = useState(false);

  const checkValidBtn = () => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (phone !== "" && relationship != "" && phoneRegex.test(phone) === true) {
      if (valid !== true) setValid(true);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedAssetArray = asset.map((item) => {
      if (Number(item.assetkey) === Number(assetKey)) {
        const newNumberKey = item.numbers.length + 1;

        // 번호 객체 생성
        const newNumber = {
          number: phone,
          index: relationship,
          numberkey: newNumberKey,
        };

        return {
          ...item,
          numbers: [...item.numbers, newNumber], // numbers 배열에 새 번호 객체 추가
        };
      } else return item;
    });

    // 수정한 AssetItem을 추가
    setAsset(updatedAssetArray);

    // 폼 초기화
    setPhone("");
    setRelationship("");
  };

  checkValidBtn();
  return (
    <Container className="assetAddNumber">
      {" "}
      <Common_AssetHeader
        header_title={"연락처 추가"}
        backLink={`/asset_Detail/edit/${assetKey}`}
      ></Common_AssetHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>비상 연락망 정보를 입력해 주세요</FormTitle>
        <InputContainer>
          <Title htmlFor="phone">연락처</Title>
          <Input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (phone != null)
                phoneRef.current.style.border = "1px solid #476DE0";
            }}
            required
            placeholder="-를 포함한 전화번호"
            ref={phoneRef}
          />
        </InputContainer>
        <InputContainer>
          <Title htmlFor="relationship">관계</Title>
          <Input
            type="text"
            id="relationship"
            value={relationship}
            onChange={(e) => {
              setRelationship(e.target.value);
              if (relationship != null)
                relRef.current.style.border = "1px solid #476DE0";
            }}
            required
            placeholder="가족/직장동료"
            ref={relRef}
          />
        </InputContainer>
        <DoneBtn valid={valid} type="submit" onClick={handleSubmit}>
          저장하기
        </DoneBtn>
      </FormContainer>
    </Container>
  );
};

export default AssetAddNumberPage;
