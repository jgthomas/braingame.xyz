import React from "react";
import PropTypes from "prop-types";

const Score = ({ score }) => {
  return <p>Score: {score}</p>;
};

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
