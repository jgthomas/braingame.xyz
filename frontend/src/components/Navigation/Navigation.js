import React from "react";
import styled from "styled-components";
import * as Links from "../GameLink/Links";

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5% 2%;
  align-items: stretch;
  width: 50%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;

  @media only screen and (max-width: 900px) {
    width: 75%;
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
