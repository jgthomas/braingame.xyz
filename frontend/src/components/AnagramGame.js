import React from "react";
import Anagram from "./Anagram";
import Header from "./Header";
import "./Game.css";

const AnagramGame = () => {
  const gameName = "Anagram";

  return (
    <div className="game">
      <Header gameName={gameName} />
      <Anagram />
    </div>
  );
};

export default AnagramGame;
