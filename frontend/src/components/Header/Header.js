import React from "react";
import "./Header.css";

const Header = ({ gameName }) => {
  return (
    <header>
      <h1 className="game-title">{gameName}</h1>
    </header>
  );
};

export default Header;
