import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Footer from "../components/footer";
import Header from "../components/header";

const Container = styled.div`
  height: 100dvh; //dynamic한 viewport height 설정
  width: calc(100dvh * 0.48);
`;

const Main = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Container className="mainContainer">
      <Header />
      <div>어쩌구</div>
      <Footer />
    </Container>
  );
};

export default Main;
