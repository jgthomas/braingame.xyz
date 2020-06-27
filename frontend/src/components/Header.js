import React from "react";
import "./Header.css";

const Header = ({ gameName }) => {
  return (
    <header>
      <p class="game-title">{gameName}</p>
    </header>
  );
};

export default Header;
