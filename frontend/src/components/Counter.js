import React from "react";
import PropTypes from "prop-types";
import "./Counter.css";

const Counter = ({ value, colorClass }) => {
  return <p class={`counter ${colorClass}`}>{value}</p>;
};

Counter.propTypes = {
  value: PropTypes.number,
  colorClass: PropTypes.string,
};

export default Counter;
