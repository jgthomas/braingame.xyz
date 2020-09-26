import React from "react";
import styled from "styled-components";
import GameLink from "../GameLink/GameLink";

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2%;
  align-items: stretch;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;
`;

const Navigation = () => {
  return (
    <LinkGrid>
      <GameLink routeName="Home"></GameLink>
      <GameLink routeName="Anagram"></GameLink>
    </LinkGrid>
  );
};

export default Navigation;
