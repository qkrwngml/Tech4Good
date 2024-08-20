import styled from "styled-components";
import { ReactComponent as GovernIcn } from "../assets/HeaderGovernIcn.svg";
import { ReactComponent as GroupIcn } from "../assets/HeaderGroupIcn.svg";
import { ReactComponent as NeighborIcn } from "../assets/HeaderNeighborIcn.svg";

const Container = styled.div`
  display: flex;
  padding: 0.875rem 1rem;
  align-items: center;
  align-self: stretch;
  gap: 0.375rem;

  border-bottom: 1px solid #eaebec;
`;

const Title = styled.div`
  color: #37383c;
  text-align: center;

  font-size: 1rem;
  font-weight: 600;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
`;

// type: Govern, Group, Neighbor
const CommonSectionHeader = ({ type }) => {
  if (type === "Govern")
    return (
      <Container>
        <GovernIcn />
        <Title>정부 공지</Title>
      </Container>
    );
  else if (type === "Group")
    return (
      <Container>
        <GroupIcn />
        <Title>모임</Title>
      </Container>
    );
  else
    return (
      <Container>
        <NeighborIcn />
        <Title>동네 소통</Title>
      </Container>
    );
};

export default CommonSectionHeader;
