import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Footer from "../components/footer";
import Header from "../components/header";

const Container = styled.div``;

const Main = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <Header />
      <div>어쩌구</div>
      <Footer />
    </Container>
  );
};

export default Main;
