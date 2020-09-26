import React from "react";
import styled from "styled-components";
import HeaderStyled from "../../styles/HeaderStyled";
import TitleStyled from "../../styles/TitleStyled";
import PageBodyStyled from "../../styles/PageBodyStyled";
import PageDesign from "../../styles/PageDesign";
import * as Links from "../GameLink/Links";

const Design = PageDesign.home;

const HomePageBody = styled(PageBodyStyled)`
  background-color: ${Design.primary};
`;

const SiteHeader = styled(HeaderStyled)`
  background-color: ${Design.header}};
  width: 50%;
  max-width: 1000px;
  margin: auto;

  @media only screen and (max-width: 900px) {
    width: 75%;
  }
`;

const SiteTitle = styled(TitleStyled)`
  color: ${Design.title};
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  align-items: stretch;
  align-content: space-evenly;
  width: 50%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;
  margin-bottom: 2em;

  @media only screen and (max-width: 900px) {
    width: 75%;
  }
`;

const SectionTitle = styled.h1`
  color: ${Design.section};
  font-size: large;
`;

const homePageLinkStyle = `font-size: 225%`;

const HomePageAnagram = styled(Links.AnagramLink)`
  ${homePageLinkStyle}
`;

const HomePageLadder = styled(Links.LadderLink)`
  ${homePageLinkStyle}
`;

const HomePageGrid = styled(Links.GridLink)`
  ${homePageLinkStyle}
`;

const HomePageRack = styled(Links.RackLink)`
  ${homePageLinkStyle}
`;

const HomePageSudoku = styled(Links.SudokuLink)`
  ${homePageLinkStyle}
`;

const HomePageNoughts = styled(Links.NoughtsLink)`
  ${homePageLinkStyle}
`;

const Home = () => {
  return (
    <HomePageBody>
      <SiteHeader>
        <SiteTitle>BrainGame</SiteTitle>
      </SiteHeader>
      <LinkGrid>
        <SectionTitle>Word Games</SectionTitle>
        <HomePageAnagram routeName="Anagram"></HomePageAnagram>
        <HomePageLadder routeName="Ladder"></HomePageLadder>
        <HomePageGrid routeName="Grid"></HomePageGrid>
        <HomePageRack routeName="Rack"></HomePageRack>
      </LinkGrid>
      <LinkGrid>
        <SectionTitle>Tools</SectionTitle>
        <HomePageSudoku routeName="Sudoku Solver"></HomePageSudoku>
      </LinkGrid>
      <LinkGrid>
        <SectionTitle>Play A.I.</SectionTitle>
        <HomePageNoughts routeName="Os and Xs"></HomePageNoughts>
      </LinkGrid>
    </HomePageBody>
  );
};

export default Home;
