import React from "react";
import PropTypes from "prop-types";
import "./Word.css";

const Word = ({ word }) => {
  return <div className="word">{word}</div>;
};

Word.propTypes = {
  word: PropTypes.string,
};

export default Word;
