import React from "react";
import Header from "../Header/Header";
import "./Game.css";

const Game = (GameComponent, gameName) => {
  const buildGame = () => {
    return (
      <div className="game">
        <Header gameName={gameName} />
        <GameComponent />
      </div>
    );
  };

  return buildGame;
};

export default Game;
