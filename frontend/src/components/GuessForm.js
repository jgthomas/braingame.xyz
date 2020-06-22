import React from "react";
import PropTypes from "prop-types";
import "./GuessForm.css";

const GuessForm = ({ solutions, incrementScore, disabled }) => {
  const checkAnswer = (event) => {
    const answer = event.target.value;
    if (solutions.includes(answer.toLowerCase())) {
      incrementScore();
      event.target.value = "";
    }
  };

  return (
    <input
      type="text"
      name="unscrambled"
      placeholder="solve..."
      disabled={disabled}
      onInput={checkAnswer}
    />
  );
};

GuessForm.propTypes = {
  solutions: PropTypes.array,
  incrementScore: PropTypes.func,
  disabled: PropTypes.bool,
};

export default GuessForm;
