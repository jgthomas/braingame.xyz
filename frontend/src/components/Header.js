import React from "react";
import "./Header.css";

const Header = ({ gameName }) => {
  return (
    <div class="App-header">
      <p class="Game-title">{gameName}</p>
    </div>
  );
};

export default Header;
