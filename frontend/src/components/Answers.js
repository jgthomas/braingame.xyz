import React from "react";
import PropTypes from "prop-types";
import "./Answers.css";

const Answers = ({ answers, showAnswers }) => {
  const answerString = answers.join(", ");

  if (showAnswers) {
    return <p class="answer-word">{answerString}</p>;
  } else {
    return <p class="answer-word hidden-answers">{answerString}</p>;
  }
};

Answers.propTypes = {
  answers: PropTypes.array,
  showAnswers: PropTypes.bool,
};

export default Answers;
