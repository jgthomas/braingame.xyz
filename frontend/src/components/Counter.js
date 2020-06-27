import React from "react";
import PropTypes from "prop-types";
import "./Counter.css";

const Counter = ({ value, colorClass, title }) => {
  return (
    <p class={`counter ${colorClass}`}>
      {title} {value}
    </p>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
  colorClass: PropTypes.string,
  title: PropTypes.string,
};

export default Counter;
