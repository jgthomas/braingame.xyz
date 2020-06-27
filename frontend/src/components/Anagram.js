import React, { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import LengthSelector from "./LengthSelector";
import Answers from "./Answers";
import ActionButton from "./ActionButton";
import Counter from "./Counter";
import "./Anagram.css";

const Anagram = () => {
  const defaultLength = 6;

  const [length, setLength] = useState(defaultLength);
  const [anagram, setAnagram] = useState("");
  const [solutions, setSolutions] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [skipCount, setSkipCount] = useState(0);
  const [passCount, setPassCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [continues, setContinues] = useState(0);
  const [fetches, triggerFetch] = useState(0);

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
  }, [length, score, skipCount, continues, fetches]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetGame = () => {
    setLength(defaultLength);
    setScore(0);
    setSkipCount(0);
    setPassCount(0);
    setShowAnswer(false);
    triggerFetch(fetches + 1);
  };

  const changeLength = (newLength) => {
    resetGame();
    setLength(newLength);
  };

  const displaySolution = () => {
    setPassCount(passCount + 1);
    setShowAnswer(true);
    setDisabled(true);
  };

  const showNextAnagram = () => {
    if (!showAnswer) {
      setSkipCount(skipCount + 1);
    } else {
      setContinues(continues + 1);
    }
  };

  return (
    <div className="game-layout">
      <div class="controls">
        <ActionButton label="Next" action={showNextAnagram} />
        <ActionButton
          label="Answer"
          action={displaySolution}
          disabled={disabled}
        />
        <ActionButton label="Reset" action={resetGame} />
      </div>
      <div class="anagram">
        <p class="anagram-word">{anagram}</p>
        <GuessForm
          solutions={solutions}
          incrementScore={incrementScore}
          disabled={disabled}
        />
        <LengthSelector
          maxLength={9}
          minLength={4}
          currentLength={length}
          changeLength={changeLength}
        />
        {showAnswer ? <Answers answers={solutions} /> : null}
      </div>
      <div class="scores">
        <Counter value={score} colorClass="score" />
        <Counter value={passCount} colorClass="pass" />
      </div>
    </div>
  );
};

export default Anagram;
