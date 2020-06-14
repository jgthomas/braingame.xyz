import React, { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import Score from "./Score";

const Anagram = () => {
  const [length] = useState(6);
  const [anagram, setAnagram] = useState("");
  const [solutions, setSolutions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(`/backend/anagram?length=${length}`)
      .then((res) => res.json())
      .then((data) => {
        setAnagram(data.word);
        setSolutions(data.solutions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [length, score]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="anagramDisplay">
      <p>Anagram word: {anagram}</p>
      <GuessForm solutions={solutions} incrementScore={incrementScore} />
      <Score score={score} />
    </div>
  );
};

export default Anagram;
