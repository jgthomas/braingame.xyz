import React from "react";
import "./Header.css";

const Header = ({ gameName }) => {
  return (
    <div class="App-header">
      <h1 class="Game-title">{gameName}</h1>
    </div>
  );
};

export default Header;
