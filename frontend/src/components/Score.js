import React from "react";
import PropTypes from "prop-types";
import "./Score.css";

const Score = ({ score }) => {
  return <p class="score-count">{score}</p>;
};

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
