import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background-color: lightslategrey;
  color: white;
  font-size: 1em;
  text-decoration: none;
  outline: none;
  border: none;
  width: 5em;
  height: 2.25em;
  border-radius: 5%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  text-decoration: none;

  &::-moz-focus-inner {
    border: 0;
  }

  @media (hover: hover) {
    &:hover:enabled {
      background-color: cornflowerblue;
    }
  }

  @media only screen and (min-width: 730px) {
    font-size: 1.5em;
  }
`;

const ActionButton = ({ label, action, disabled }) => {
  return (
    <Button onClick={action} disabled={disabled ? disabled : false}>
      {label}
    </Button>
  );
};

ActionButton.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ActionButton;
