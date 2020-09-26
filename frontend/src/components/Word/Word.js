import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const WordDisplay = styled.div`
  letter-spacing: 0.0625em;
  font-size: 2.5em;
  color: #d8482d;
  margin-top: 1em;
  margin-bottom: 1em;

  @media only screen and (min-width: 750px) {
    font-size: 4em;
  }

  @media only screen and (min-width: 900px) {
    font-size: 4.5em;
  }
`;

const Word = ({ word }) => {
  return <WordDisplay data-testid="word-display">{word}</WordDisplay>;
};

Word.propTypes = {
  word: PropTypes.string,
};

export default Word;
