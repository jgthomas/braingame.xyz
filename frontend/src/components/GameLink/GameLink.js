import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkHolder = styled.div`
  background-color: slategrey;
  text-align: center;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
`;

const urlFromRouteName = (routeName) => {
  if (routeName === "Home") {
    return "/";
  }

  return `/${routeName.toLowerCase()}`;
};

const GameLink = ({ className, routeName }) => {
  return (
    <LinkHolder>
      <LinkStyled className={className} to={urlFromRouteName(routeName)}>
        {routeName}
      </LinkStyled>
    </LinkHolder>
  );
};

GameLink.propTypes = {
  routeName: PropTypes.string,
};

export default GameLink;
