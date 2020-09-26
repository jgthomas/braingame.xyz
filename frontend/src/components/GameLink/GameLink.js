import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: black;
  text-align: center;
`;

const urlFromRouteName = (routeName) => {
  if (routeName === "Home") {
    return "/";
  }

  return `/${routeName.toLowerCase()}`;
};

const GameLink = ({ className, routeName }) => {
  return (
    <LinkStyled className={className} to={urlFromRouteName(routeName)}>
      {routeName}
    </LinkStyled>
  );
};

GameLink.propTypes = {
  routeName: PropTypes.string,
};

export default GameLink;
