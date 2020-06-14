import React from "react";
import Anagram from "./Anagram";
import Header from "./Header";

const AnagramGame = () => {
  const gameName = "Anagram";

  return (
    <div>
      <Header gameName={gameName} />
      <Anagram />
    </div>
  );
};

export default AnagramGame;
