import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "../../styles/HeaderStyled";
import TitleStyled from "../../styles/TitleStyled";
import PageBodyStyled from "../../styles/PageBodyStyled";

const homePrimary = "cornsilk";
const homeBackground = "cornflowerblue";

const SiteHeader = styled(HeaderStyled)`
  background-color: ${homeBackground}};
`;

const SiteTitle = styled(TitleStyled)`
  color: ${homePrimary};
`;

const HomePageBody = styled(PageBodyStyled)`
  background-color: ${homePrimary};
`;

const Home = () => {
  return (
    <HomePageBody>
      <SiteHeader>
        <SiteTitle>BrainGame xYz</SiteTitle>
      </SiteHeader>
      <Navigation />
    </HomePageBody>
  );
};

export default Home;
