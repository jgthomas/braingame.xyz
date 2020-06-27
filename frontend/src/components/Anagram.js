import React, { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import LengthSelector from "./LengthSelector";
import Answers from "./Answers";
import ActionButton from "./ActionButton";
import Counter from "./Counter";
import "./Anagram.css";

const Anagram = () => {
  const [length, setLength] = useState(6);
  const [anagram, setAnagram] = useState("");
  const [solutions, setSolutions] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [skipCount, setSkipCount] = useState(0);
  const [passCount, setPassCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [continues, setContinues] = useState(0);

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
  }, [length, score, skipCount, continues]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const changeLength = (newLength) => {
    setLength(newLength);
    setScore(0);
    setSkipCount(0);
    setPassCount(0);
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
      <div>
        <ActionButton label="Next" action={showNextAnagram} />
        <ActionButton
          label="Answer"
          action={displaySolution}
          disabled={disabled}
        />
      </div>
      <div>
        <p class="anagram-word">{anagram}</p>
        <GuessForm
          solutions={solutions}
          incrementScore={incrementScore}
          disabled={disabled}
        />
        <LengthSelector
          maxLength={9}
          minLength={4}
          changeLength={changeLength}
        />
        {showAnswer ? <Answers answers={solutions} /> : null}
      </div>
      <div>
        <Counter value={score} colorClass="score" />
        <Counter value={skipCount} colorClass="skipped" />
        <Counter value={passCount} colorClass="pass" />
      </div>
    </div>
  );
};

export default Anagram;
