import React from "react";
import PropTypes from "prop-types";
import Status from "./Status";
import "./Counter.css";

const Counter = ({ value, colorClass, title }) => {
  const setStyleOnStatus = () => {
    switch (colorClass) {
      case Status.GOOD:
        return "score";
      case Status.BAD:
        return "pass";
      default:
        return "neutral";
    }
  };

  return (
    <p class={`counter ${setStyleOnStatus()}`}>
      {title} {value}
    </p>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
  status: PropTypes.string,
  title: PropTypes.string,
};

export default Counter;
