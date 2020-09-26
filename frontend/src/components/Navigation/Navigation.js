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

const HomePageHome = styled(Links.HomeLink)`
  font-size: 250%;
`;

const HomePageAnagram = styled(Links.AnagramLink)`
  font-size: 250%;
`;

const Navigation = () => {
  return (
    <LinkGrid>
      <HomePageHome routeName="Home"></HomePageHome>
      <HomePageAnagram routeName="Anagram"></HomePageAnagram>
    </LinkGrid>
  );
};

export default Navigation;
