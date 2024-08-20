import { useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Common_AssetHeader from "../components/Common_AssetHeader";
import MapExample from "../assets/mapExample.png";
import { useRecoilState } from "recoil";
import { assetState } from "../../../Recoil";
import { useState } from "react";
import { ReactComponent as HomeIcn } from "../assets/HomeIcn.svg";
import { ReactComponent as HomeDeactIcn } from "../assets/HomeIcn_deact.svg";
import { ReactComponent as CompanyIcn } from "../assets/CompanyIcn.svg";
import { ReactComponent as CompanyDeactIcn } from "../assets/CompanyIcn_deact.svg";
import { ReactComponent as PlaceDeactIcn } from "../assets/PlaceIcn_deact.svg";
import { ReactComponent as CheckIcn } from "../assets/CheckIcn.svg";
import AssetDetail_Edit_NumberItem from "../components/AssetDetail_Edit_NumberItem";
import { ReactComponent as AddIcn } from "../assets/Add.svg";

const Container = styled.div`
  background-color: #ffffff;
  /* background-color: aliceblue; */
  width: calc(100dvh * 0.48);
  height: 100dvh;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  overflow-y: scroll;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  margin: 1.25rem 1rem 0rem 1rem;
`;

const MapWrapper = styled.img`
  width: 100%;
  border-radius: 0.875rem;
  border: 1px solid #e1e2e4;
  object-fit: cover;

  cursor: pointer;
`;

const AddressDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

const AddressDetailTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.0625rem;
`;

const AddressDetailText = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem; /* 155.556% */
  letter-spacing: -0.01125rem;

  ${(props) =>
    props.type === "detail"
      ? css`
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.625rem;
        `
      : css``}
`;

const AddressDetailInput = styled.div`
  display: flex;
  height: 3.25rem;
  padding: 1.125rem 0.75rem 1.125rem 1.125rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 0.75rem;
  border: 1.5px solid #eaebec;
`;

const TextArea = styled.textarea`
  height: 1.6rem;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.0625rem;
  flex: 1 0 0;
  text-align: left;
  line-height: 1.6rem;
  resize: none;
`;

const AddressTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
`;

const AddressTypeItem = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.75rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
  border-radius: 0.5rem;

  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4375rem; /* 164.286% */
  letter-spacing: -0.00875rem;

  ${(props) =>
    props.clicked === true
      ? css`
          color: var(--gray-gray-900, #37383c);
          border: 1.5px solid #476de0;
          background-color: #f0f3fd;
        `
      : css`
          color: var(--gray-gray-900, #70737c);
          border: 1.5px solid #eaebec;
        `}
`;

const AddressDangerTypeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
`;

const DangerItem = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.375rem 1rem 0.375rem 0.625rem;
  align-items: center;
  align-self: stretch;
  gap: 0.25rem;

  border-radius: 6.25rem;
  border: 1px solid #eaebec;

  color: #46474c;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;

  ${(props) =>
    props.clicked === true
      ? css`
          background-color: #e7e7e7;
        `
      : css``}
`;

const Horizon = styled.hr`
  align-self: stretch;
  height: 2vh;
  width: 100%;
  border: 1vh solid #f4f4f5;
`;

const NumbersTitle = styled.div`
  display: flex;
  padding: 0rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.0625rem;
  align-self: stretch;

  color: #37383c;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.01125rem;
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  padding: 0 1rem;
`;

const AddNumberBtn = styled.button`
  border: none;
  outline: none;

  cursor: pointer;

  display: flex;
  padding: 0.75rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.1875rem;
  align-self: stretch;
  color: #70737c;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
  border-radius: 0.875rem;
  background: #f4f4f5;
  border-color: #f4f4f5;
`;

const EditDoneWrapper = styled.div`
  display: flex;
  padding: 0rem 1rem 2.5rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 0.625rem;
`;

const EditDoneBtn = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.875rem 0rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.1875rem;

  border-radius: 0.875rem;
  background: #dbdcdf;

  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
`;

const AssetEditPage = () => {
  const navigate = useNavigate();
  const assetKey = useParams();

  const [asset, setAsset] = useRecoilState(assetState);

  const assetItem = asset.find(
    (item) => Number(item.assetkey) === Number(assetKey.assetKey)
    // 형태 통일 안 해주면 에러 발생
  );

  const [type, setType] = useState(assetItem.type);

  const [danger, setDanger] = useState(1);

  if (assetItem != undefined) {
    return (
      <Container className="assetEdit">
        {" "}
        <Common_AssetHeader
          header_title={"정보 수정"}
          backLink={"/asset_Detail"}
        ></Common_AssetHeader>
        {/* 장소 수정 Container */}
        <AddressContainer>
          <MapWrapper src={MapExample}></MapWrapper>
          <AddressDetailWrapper>
            <AddressDetailTextWrapper>
              <AddressDetailText>{assetItem.address}</AddressDetailText>
              <AddressDetailText type="detail">
                {assetItem.addressDetail1}
              </AddressDetailText>
            </AddressDetailTextWrapper>
            <AddressDetailInput>
              <TextArea placeholder={assetItem.addressDetail2}></TextArea>
            </AddressDetailInput>
            <AddressTypeWrapper>
              <AddressTypeItem
                clicked={type === "Home"}
                onClick={() => {
                  setType("Home");
                }}
              >
                {type === "Home" ? (
                  <HomeIcn></HomeIcn>
                ) : (
                  <HomeDeactIcn></HomeDeactIcn>
                )}
                우리집
              </AddressTypeItem>
              <AddressTypeItem
                clicked={type === "Company"}
                onClick={() => {
                  setType("Company");
                }}
              >
                {type === "Company" ? (
                  <CompanyIcn></CompanyIcn>
                ) : (
                  <CompanyDeactIcn></CompanyDeactIcn>
                )}
                회사
              </AddressTypeItem>
              <AddressTypeItem
                clicked={
                  assetItem.type !== "Home" && assetItem.type !== "Company"
                }
                onClick={() => {
                  alert("준비 중인 서비스입니다.");
                }}
              >
                <PlaceDeactIcn></PlaceDeactIcn>
                직접 입력
              </AddressTypeItem>
            </AddressTypeWrapper>
            <AddressDangerTypeWrapper>
              <DangerItem
                onClick={() => {
                  setDanger(1);
                }}
                clicked={danger === 1}
              >
                <CheckIcn></CheckIcn>
                반지하
              </DangerItem>
              <DangerItem
                onClick={() => {
                  setDanger(2);
                }}
                clicked={danger === 2}
              >
                <CheckIcn></CheckIcn>
                침수피해지역
              </DangerItem>
            </AddressDangerTypeWrapper>
          </AddressDetailWrapper>
        </AddressContainer>
        {/* Horizon */}
        <Horizon></Horizon>
        {/* 비상 연락망 수정 및 추가 Container */}
        <NumbersTitle>
          <span>비상 연락망</span>
          <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
            비상시 저장된 연락처에 비상 연락이 함께 보내집니다.
          </span>
        </NumbersTitle>
        <NumberContainer>
          {assetItem.numbers.map((item) => (
            <AssetDetail_Edit_NumberItem
              {...item}
              numberkey={item.numberkey}
            ></AssetDetail_Edit_NumberItem>
          ))}
          {/* Numbers 배열 map => 전화번호 아이템 띄우고 */}
          {/* 연락처 추가하기 버튼 */}
          <AddNumberBtn
            onClick={() => {
              navigate(`/asset_Detail/edit/number/${assetKey.assetKey}`);
            }}
          >
            <AddIcn></AddIcn>
            연락처 추가하기
          </AddNumberBtn>
        </NumberContainer>
        {/* 저장하기 버튼 */}
        <EditDoneWrapper>
          {" "}
          <EditDoneBtn>저장하기</EditDoneBtn>
        </EditDoneWrapper>
      </Container>
    );
  }
};

export default AssetEditPage;
