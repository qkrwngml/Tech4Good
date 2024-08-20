import styled from "styled-components";
import Common_MyAsset_single from "../components/Common_MyAsset_single";
import { editState } from "../../../Recoil";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;

  border-radius: 1rem;
  background: #ffffff;
`;

const GradeTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const AddressWrapper = styled.div`
  display: flex;
  padding: 0rem 1.5rem;
  align-items: center;
  align-self: stretch;

  color: #5a5c63;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;
`;

const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
`;

const Horizon = styled.div`
  margin-left: 1.5rem;
  height: 0.0625rem;
  align-self: stretch;

  background-color: #eaebec;
`;

const NumbersWrapper = styled.div`
  display: flex;
  padding-left: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Number = styled.div`
  align-self: stretch;

  color: #878a93;

  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

const Btn = styled.div`
  cursor: pointer;

  display: flex;
  padding: 0.25rem 0.6875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 6.25rem;
  border: 1px solid #dbdcdf;

  color: #5a5c63;

  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0075rem;
`;

// 하나의 자산 아이템 전체
const AssetDetail_Item = (props) => {
  const numbers = props.numbers;

  const edit = useRecoilValue(editState);

  const navigate = useNavigate();

  return (
    <Container>
      <GradeTotalWrapper>
        <Common_MyAsset_single {...props}></Common_MyAsset_single>
      </GradeTotalWrapper>
      <InfoWrapper>
        <AddressWrapper>
          {props.address} {props.addressDetail1} {props.addressDetail2}
        </AddressWrapper>
        {props.type != "Car" ? <Horizon></Horizon> : <></>}
        <NumbersWrapper>
          {numbers != null ? (
            numbers.map((item) => (
              <Number>
                {item.index} {item.number}
              </Number>
            ))
          ) : (
            <></>
          )}
        </NumbersWrapper>
      </InfoWrapper>
      {edit === true ? (
        <BtnsWrapper>
          <Btn onClick={() => navigate(`/asset_Detail/edit/${props.assetkey}`)}>
            수정
          </Btn>
          <Btn>삭제</Btn>
        </BtnsWrapper>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default AssetDetail_Item;
