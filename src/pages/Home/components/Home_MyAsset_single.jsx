import styled from "styled-components";
import { ReactComponent as HomeIcn } from "../assets/Asset_Home.svg";
import { ReactComponent as CompanyIcn } from "../assets/Asset_Company.svg";
import { ReactComponent as CarIcn } from "../assets/Asset_Car.svg";
import Common_GradeTotal from "./Common_GradeTotal";

const Container = styled.div`
  display: flex;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const AssetTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

// props: type (home, company, car) , assetTitle(자산명), rain(강수량), grade(1,3,4),dangerGrade(danger, warning, safe)
const Home_MyAsset_single = ({
  type,
  assetTitle,
  rain,
  grade,
  dangerGrade,
}) => {
  return (
    <Container>
      <AssetTitleWrapper>우리집</AssetTitleWrapper>
      <Common_GradeTotal
        rain={rain}
        grade={grade}
        dangerGrade={dangerGrade}
      ></Common_GradeTotal>
    </Container>
  );
};

export default Home_MyAsset_single;
