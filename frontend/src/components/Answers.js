import React from "react";
import PropTypes from "prop-types";
import "./Answers.css";

const Answers = ({ answers }) => {
  return answers.map((answer) => {
    return <p class="answer-word">{answer}</p>;
  });
};

Answers.propTypes = {
  answers: PropTypes.array,
};

export default Answers;
