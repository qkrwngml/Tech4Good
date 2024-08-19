import styled from "styled-components";
import Common_AssetHeader from "../components/Common_AssetHeader";

const Container = styled.div`
  width: calc(100dvh * 0.48);
  height: 100dvh;
  background-color: #eff0f7;

  overflow-y: scroll;
`;

const AssetDetailPage = () => {
  const handleEdit = () => {};

  return (
    <Container className="assetDetail">
      <Common_AssetHeader
        header_title={"내 집  · 회사 ·  자동차"}
        editOnClick={handleEdit}
      ></Common_AssetHeader>
    </Container>
  );
};

export default AssetDetailPage;
