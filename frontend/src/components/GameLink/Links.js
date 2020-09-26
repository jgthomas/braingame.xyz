import styled from "styled-components";
import GameLink from "../GameLink/GameLink";
import PageDesign from "../../styles/PageDesign";

export const HomeLink = styled(GameLink)`
  background-color: ${PageDesign.home.header};
`;

export const AnagramLink = styled(GameLink)`
  background-color: ${PageDesign.anagram.dark};
`;

export const LadderLink = styled(GameLink)`
  background-color: ${PageDesign.ladder.header};
`;

export const GridLink = styled(GameLink)`
  background-color: ${PageDesign.grid.header};
`;

export const RackLink = styled(GameLink)`
  background-color: ${PageDesign.rack.header};
`;

export const SudokuLink = styled(GameLink)`
  background-color: ${PageDesign.sudoku.header};
`;

export const NoughtsLink = styled(GameLink)`
  background-color: ${PageDesign.noughts.header};
`;
