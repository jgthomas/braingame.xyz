import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "../../styles/HeaderStyled";
import TitleStyled from "../../styles/TitleStyled";

const homeBackground = "cornflowerblue";
const homeTitle = "cornsilk";

const SiteHeader = styled(HeaderStyled)`
  background-color: ${homeBackground}};
`;

const SiteTitle = styled(TitleStyled)`
  color: ${homeTitle};
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
