import styled from "styled-components";
import GameLink from "../GameLink/GameLink";
import PageDesign from "../../styles/PageDesign";

export const AnagramLink = styled(GameLink)`
  background-color: ${PageDesign.anagram.dark};
`;

export const HomeLink = styled(GameLink)`
  background-color: ${PageDesign.home.header};
`;
