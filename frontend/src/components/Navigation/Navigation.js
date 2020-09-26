import React from "react";
import styled from "styled-components";
import * as Links from "../GameLink/Links";

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5% 2%;
  align-items: stretch;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const homePageLinkStyle = `font-size: 250%;`;

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

const Navigation = () => {
  return (
    <LinkGrid>
      <HomePageAnagram routeName="Anagram"></HomePageAnagram>
      <HomePageLadder routeName="Ladder"></HomePageLadder>
      <HomePageGrid routeName="Grid"></HomePageGrid>
      <HomePageRack routeName="Rack"></HomePageRack>
    </LinkGrid>
  );
};

export default Navigation;
