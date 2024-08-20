import { useParams } from "react-router-dom";
import styled from "styled-components";
import Common_AssetHeader from "../components/Common_AssetHeader";

const Container = styled.div`
  background-color: #ffffff;
  width: calc(100dvh * 0.48);
  height: 100dvh;

  overflow-y: scroll;
`;

const AssetAddNumberPage = () => {
  const { assetKey } = useParams();
  return (
    <Container className="assetAddNumber">
      {" "}
      <Common_AssetHeader
        header_title={"연락처 추가"}
        backLink={`/asset_Detail/edit/${assetKey}`}
      ></Common_AssetHeader>
    </Container>
  );
};

export default AssetAddNumberPage;
