import { React, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as HomeIcn } from "../assets/navIcon/Home.svg";
import { ReactComponent as OffHomeIcn } from "../assets/navIcon/offHome.svg";
import { ReactComponent as MapIcn } from "../assets/navIcon/Map.svg";
import { ReactComponent as OffMapIcn } from "../assets/navIcon/offMap.svg";
import { ReactComponent as CommunityIcn } from "../assets/navIcon/Community.svg";
import { ReactComponent as OffCommunityIcn } from "../assets/navIcon/offCommunity.svg";
import { ReactComponent as TotalIcn } from "../assets/navIcon/Total.svg";
import { ReactComponent as OffTotalIcn } from "../assets/navIcon/offTotal.svg";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 11.2vh;
  background-color: #fff;
  padding: 1px 0px;
  width: calc(100dvh * 0.48);
  border-radius: 20px 20px 0 0;
  margin-left: auto;
  margin-right: auto;
`;

const IconTxtWrapper = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
`;

const Text = styled.div`
  ${(props) =>
    props.state === true
      ? css`
          color: #46474c;
        `
      : css`
          color: #989ba2;
        `}

  text-align: center;
  font-size: 0.625rem;
  font-weight: 600;
  line-height: 1.25rem; /* 200% */
  letter-spacing: -0.00625rem;
`;

const NavLink = styled.div`
  float: left;
  width: 25%;
  text-align: center;

  line-height: 50px;
`;

function Footer() {
  const [activeNav, setActiveNav] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/home")) {
      setActiveNav(1);
    } else if (location.pathname.startsWith("/map")) {
      setActiveNav(2);
    } else if (location.pathname.startsWith("/community")) {
      setActiveNav(3);
    } else if (location.pathname.startsWith("/total")) {
      setActiveNav(4);
    }
  }, [location]);

  return (
    <Container>
      <Link to="/home" className="nav-link">
        <NavLink
          className={
            location.pathname === "/home"
              ? "nav-item active-nav-item"
              : "nav-item"
          }
        >
          <IconTxtWrapper>
            {activeNav === 1 ? <HomeIcn></HomeIcn> : <OffHomeIcn></OffHomeIcn>}
            <Text state={activeNav === 1}>홈</Text>
          </IconTxtWrapper>
        </NavLink>
      </Link>
      <Link to="/map" className="nav-link">
        <NavLink
          className={
            location.pathname === "/map"
              ? "nav-item active-nav-item"
              : "nav-item"
          }
        >
          <IconTxtWrapper>
            {activeNav === 2 ? <MapIcn></MapIcn> : <OffMapIcn></OffMapIcn>}
            <Text state={activeNav === 2}>지도</Text>
          </IconTxtWrapper>
        </NavLink>
      </Link>
      <Link to="/community" className="nav-link">
        <NavLink
          className={
            location.pathname === "/community"
              ? "nav-item active-nav-item"
              : "nav-item"
          }
        >
          {" "}
          <IconTxtWrapper>
            {activeNav === 3 ? (
              <CommunityIcn></CommunityIcn>
            ) : (
              <OffCommunityIcn></OffCommunityIcn>
            )}
            <Text state={activeNav === 3}>커뮤니티</Text>
          </IconTxtWrapper>
        </NavLink>
      </Link>
      <Link to="/total" className="nav-link">
        <NavLink
          className={
            location.pathname === "/total"
              ? "nav-item active-nav-item"
              : "nav-item"
          }
        >
          <IconTxtWrapper>
            {activeNav === 4 ? (
              <TotalIcn></TotalIcn>
            ) : (
              <OffTotalIcn></OffTotalIcn>
            )}
            <Text state={activeNav === 4}>전체</Text>
          </IconTxtWrapper>
        </NavLink>
      </Link>
    </Container>
  );
}

export default Footer;
