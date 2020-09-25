import styled from "styled-components";
import HeaderStyled from "../../styles/HeaderStyled";
import TitleStyled from "../../styles/TitleStyled";

const homePrimary = "cornsilk";
const homeBackground = "cornflowerblue";

export const SiteHeader = styled(HeaderStyled)`
  background-color: ${homeBackground}};
`;

export const SiteTitle = styled(TitleStyled)`
  color: ${homePrimary};
`;
