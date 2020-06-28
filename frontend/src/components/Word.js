import React from "react";
import PropTypes from "prop-types";
import "./Word.css";

const Word = ({ word }) => {
  return <p class="word">{word}</p>;
};

Word.propTypes = {
  word: PropTypes.string,
};

export default Word;
