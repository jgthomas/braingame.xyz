import React from "react";
import PropTypes from "prop-types";
import Status from "./Status";
import "./Counter.css";

const Counter = ({ value, status, title }) => {
  const setStyleOnStatus = (status) => {
    switch (status) {
      case Status.GOOD:
        return "score";
      case Status.BAD:
        return "pass";
      default:
        return "neutral";
    }
  };

  return (
    <div class={`counter ${setStyleOnStatus(status)}`}>
      {title} {value}
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
  status: PropTypes.string,
  title: PropTypes.string,
};

export default Counter;
