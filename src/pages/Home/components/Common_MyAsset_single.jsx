import styled from "styled-components";
import { ReactComponent as HomeIcn } from "../assets/Asset_Home.svg";
import { ReactComponent as CompanyIcn } from "../assets/Asset_Company.svg";
import { ReactComponent as CarIcn } from "../assets/Asset_Car.svg";
import Common_GradeTotal from "./Common_GradeTotal";

const AssetTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const iconMap = {
  Home: HomeIcn,
  Company: CompanyIcn,
  Car: CarIcn,
};

const Logo = ({ type }) => {
  const IconComponent = iconMap[type];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
};

// props: type (Home, Company, Car) , assetTitle(자산명), rain(강수량), grade(1,3,4),dangerGrade(danger, warning, safe)
const Common_MyAsset_single = ({
  type,
  assetTitle,
  rain,
  grade,
  dangerGrade,
}) => {
  return (
    <>
      <AssetTitleWrapper>
        <Logo type={type}></Logo>
        {assetTitle}
      </AssetTitleWrapper>
      <Common_GradeTotal
        rain={rain}
        grade={grade}
        dangerGrade={dangerGrade}
      ></Common_GradeTotal>
    </>
  );
};

export default Common_MyAsset_single;
