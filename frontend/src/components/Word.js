import React from "react";
import PropTypes from "prop-types";
import "./Word.css";

const Word = ({ word }) => {
  return <div class="word">{word}</div>;
};

Word.propTypes = {
  word: PropTypes.string,
};

export default Word;
