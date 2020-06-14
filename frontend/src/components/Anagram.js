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
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    fetch(`/backend/anagram?length=${length}`)
      .then((res) => res.json())
      .then((data) => {
        setShowAnswer(false);
        setDisabled(false);
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
    setDisabled(true);
  };

  const showNextAnagram = () => {
    setSkipCount(skipCount + 1);
  };

  return (
    <div className="anagramDisplay">
      <h2>{anagram}</h2>
      <GuessForm
        solutions={solutions}
        incrementScore={incrementScore}
        disabled={disabled}
      />
      <Score score={score} />
      <LengthSelector maxLength={9} minLength={4} changeLength={changeLength} />
      <button onClick={displaySolution}>Give Up</button>
      <button onClick={showNextAnagram}>Next Word</button>
      {showAnswer ? <Answers answers={solutions} /> : null}
    </div>
  );
};

export default Anagram;
