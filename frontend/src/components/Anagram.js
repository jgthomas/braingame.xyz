import React from "react";

const Anagram = ({ anagram }) => {
  return (
    <div className="anagramDisplay">
      <p>Anagram word: {anagram}</p>
    </div>
  );
};

export default Anagram;
