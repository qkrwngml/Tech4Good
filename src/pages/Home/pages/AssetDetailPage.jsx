import styled from "styled-components";
import Common_AssetHeader from "../components/Common_AssetHeader";
import AssetDetail_Item from "../components/AssetDetail_Item";
import { useRecoilState } from "recoil";
import { assetState, editState } from "../../../Recoil";
import React from "react";
import AssetDetail_Edit_NewItemBtn from "../components/AssetDetail_Edit_NewItemBtn";

const Container = styled.div`
  width: calc(100dvh * 0.48);
  height: 100dvh;
  background-color: #eff0f7;

  overflow-y: scroll;

  position: relative;
`;

const MainWrapper = styled.div`
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AssetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: 0.75rem;

  width: 100%;
`;

const AssetDetailPage = () => {
  const [assets, setAsset] = useRecoilState(assetState);

  const [edit, setEdit] = useRecoilState(editState);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <Container className="assetDetail">
      <Common_AssetHeader
        header_title={"내 집  · 회사 ·  자동차"}
        editOnClick={() => {
          handleEdit();
        }}
        backLink={"/"}
      ></Common_AssetHeader>
      <MainWrapper>
        {/* 자산 나열 */}
        <AssetsWrapper>
          {assets.map((item) => (
            <AssetDetail_Item {...item}></AssetDetail_Item>
          ))}
        </AssetsWrapper>
      </MainWrapper>
      <AssetDetail_Edit_NewItemBtn />
    </Container>
  );
};

export default AssetDetailPage;
