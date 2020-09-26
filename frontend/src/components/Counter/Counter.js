import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Status from "../../signals/Status";

const setStyleOnStatus = (status) => {
  switch (status) {
    case Status.GOOD:
      return "olivedrab";
    case Status.BAD:
      return "tomato";
    default:
      return "lightslategrey";
  }
};

const CounterDisplay = styled.div`
  font-size: 3em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  color: ${({ status }) => setStyleOnStatus(status)};
`;

const Counter = ({ value, status, title }) => {
  return (
    <CounterDisplay status={status}>
      {title} {value}
    </CounterDisplay>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
  status: PropTypes.string,
  title: PropTypes.string,
};

export default Counter;
