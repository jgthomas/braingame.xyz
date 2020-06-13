import React, { useState, useEffect } from "react";
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
      <p>Anagram word: {word}</p>
    </div>
  );
}

export default App;
