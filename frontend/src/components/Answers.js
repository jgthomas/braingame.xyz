import React from "react";
import PropTypes from "prop-types";
import "./Answers.css";

const Answers = ({ answers, showAnswers }) => {
  const answerString = answers.join(", ");

  if (showAnswers) {
    return <p className="answer-word">{answerString}</p>;
  } else {
    return <p className="answer-word hidden-answers">{answerString}</p>;
  }
};

Answers.propTypes = {
  answers: PropTypes.array,
  showAnswers: PropTypes.bool,
};

export default Answers;
