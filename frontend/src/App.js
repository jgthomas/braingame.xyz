import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [word, setWord] = useState("nothing came!");

  useEffect(() => {
    fetch("/backend/anagram")
      .then((res) => res.json())
      .then((data) => {
        setWord(data.word);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Anagram word: {word}</p>
      </header>
    </div>
  );
}

export default App;
