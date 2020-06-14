import React from "react";

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
      id="guess"
      type="text"
      name="unscrambled"
      placeholder="solve..."
      disabled={disabled}
      onInput={checkAnswer}
    />
  );
};

export default GuessForm;
