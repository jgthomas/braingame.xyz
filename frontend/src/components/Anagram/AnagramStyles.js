import styled from "styled-components";
import HeaderStyled from "../../styles/HeaderStyled";
import TitleStyled from "../../styles/TitleStyled";

const gamePrimary = "#f5f5f5";
const gameHeaderBackground = "#67727a";

export const GameHeader = styled(HeaderStyled)`
  background-color: ${gameHeaderBackground}};
`;

export const GameTitle = styled(TitleStyled)`
  color: ${gamePrimary};
`;
