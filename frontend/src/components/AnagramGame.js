import React from "react";
import Anagram from "./Anagram";
import Header from "./Header";
import "./AnagramGame.css";

const AnagramGame = () => {
  const gameName = "Anagram";

  return (
    <div class="anagram">
      <Header gameName={gameName} />
      <Anagram />
    </div>
  );
};

export default AnagramGame;
