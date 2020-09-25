import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "../../styles/HeaderStyled";
import TitleStyled from "../../styles/TitleStyled";

const SiteHeader = styled(HeaderStyled)`
  background-color: cornflowerblue;
`;

const SiteTitle = styled(TitleStyled)`
  color: cornsilk;
`;

const Home = () => {
  return (
    <div>
      <SiteHeader>
        <SiteTitle>BrainGame XYZ</SiteTitle>
      </SiteHeader>
      <Navigation />
    </div>
  );
};

export default Home;
