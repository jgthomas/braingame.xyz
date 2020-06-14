import React, { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import Score from "./Score";
import LengthSelector from "./LengthSelector";
import Answers from "./Answers";

const Anagram = () => {
  const [length, setLength] = useState(6);
  const [anagram, setAnagram] = useState("");
  const [solutions, setSolutions] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [skipCount, setSkipCount] = useState(0);

  useEffect(() => {
    fetch(`/backend/anagram?length=${length}`)
      .then((res) => res.json())
      .then((data) => {
        setShowAnswer(false);
        setAnagram(data.word);
        setSolutions(data.solutions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [length, score, skipCount]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const changeLength = (newLength) => {
    setLength(newLength);
    setScore(0);
  };

  const displaySolution = () => {
    setShowAnswer(true);
  };

  const showNextAnagram = () => {
    setSkipCount(skipCount + 1);
  };

  return (
    <div className="anagramDisplay">
      <p>Anagram word: {anagram}</p>
      <GuessForm solutions={solutions} incrementScore={incrementScore} />
      <Score score={score} />
      <LengthSelector maxLength={9} minLength={4} changeLength={changeLength} />
      <button onClick={displaySolution}>Give Up</button>
      <button onClick={showNextAnagram}>Next Word</button>
      {showAnswer ? <Answers answers={solutions} /> : null}
    </div>
  );
};

export default Anagram;
