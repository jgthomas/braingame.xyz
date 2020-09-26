import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AnswerDisplay = styled.p`
  color: tomato;
  font-size: 1.5em;
`;

const HiddenAnswerDisplay = styled(AnswerDisplay)`
  visibility: hidden;
`;

const Answers = ({ answers, showAnswers }) => {
  const answerString = answers.join(", ");

  if (showAnswers) {
    return <AnswerDisplay>{answerString}</AnswerDisplay>;
  }

  return <HiddenAnswerDisplay>{answerString}</HiddenAnswerDisplay>;
};

Answers.propTypes = {
  answers: PropTypes.array,
  showAnswers: PropTypes.bool,
};

export default Answers;
