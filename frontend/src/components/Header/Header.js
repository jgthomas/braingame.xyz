import React from "react";
import "./Header.css";

const Header = ({ gameName }) => {
  return (
    <header>
      <p className="game-title">{gameName}</p>
    </header>
  );
};

export default Header;
