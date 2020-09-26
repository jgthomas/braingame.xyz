import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "../../styles/HeaderStyled";
import TitleStyled from "../../styles/TitleStyled";
import PageBodyStyled from "../../styles/PageBodyStyled";
import PageDesign from "../../styles/PageDesign";

const Design = PageDesign.home;

const SiteHeader = styled(HeaderStyled)`
  background-color: ${Design.header}};
`;

const SiteTitle = styled(TitleStyled)`
  color: ${Design.primary};
`;

const HomePageBody = styled(PageBodyStyled)`
  background-color: ${Design.primary};
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
