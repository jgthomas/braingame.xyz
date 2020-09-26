import React from "react";
import styled from "styled-components";
import GameLink from "../GameLink/GameLink";

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

const HomePageLink = styled(GameLink)`
  font-size: 250%;
`;

const AnagramLink = styled(HomePageLink)`
  background-color: #67727a;
`;

const HomeLink = styled(HomePageLink)`
  background-color: cornflowerblue;
`;

const Navigation = () => {
  return (
    <LinkGrid>
      <HomeLink routeName="Home"></HomeLink>
      <AnagramLink routeName="Anagram"></AnagramLink>
    </LinkGrid>
  );
};

export default Navigation;
