import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;
  font-size: 1.5em;
  color: darkslategrey;

  &:focus {
    border: 2px solid cornflowerblue;
  }
`;

const GuessForm = ({ solutions, incrementScore, disabled }) => {
  const checkAnswer = (event) => {
    const answer = event.target.value;
    if (solutions.includes(answer.toLowerCase())) {
      incrementScore();
      event.target.value = "";
    }
  };

  return (
    <Input
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
