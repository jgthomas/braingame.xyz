import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GuessForm from "../GuessForm/GuessForm";
import LengthSelector from "../LengthSelector/LengthSelector";
import Answers from "../Answers/Answers";
import ActionButton from "../ActionButton/ActionButton";
import Counter from "../Counter/Counter";
import Word from "../Word/Word";
import Status from "../../signals/Status";
import HeaderStyled from "../../styles/HeaderStyled";
import TitleStyled from "../../styles/TitleStyled";
import PageBodyStyled from "../../styles/PageBodyStyled";

const gamePrimary = "#f5f5f5";
const gameHeaderBackground = "#67727a";

const GameBody = styled(PageBodyStyled)`
  background-color: ${gamePrimary}};
`;

const GameHeader = styled(HeaderStyled)`
  background-color: ${gameHeaderBackground}};
`;

const GameTitle = styled(TitleStyled)`
  color: ${gamePrimary};
`;

const GameLayout = styled.div`
  display: grid;
  grid-template-columns: 0.33fr 1fr 0.33fr;
  grid-template-areas: "scores anagram controls";

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.25fr 1fr 0.5fr;
    grid-template-areas:
      "scores"
      "anagram"
      "controls";
  }
`;

const Controls = styled.div`
  grid-area: controls;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const AnagramDisplay = styled.div`
  grid-area: anagram;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    justify-items: center;
    align-items: center;
  }
`;

const Scores = styled.div`
  grid-area: scores;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Anagram = () => {
  const anagramEndpoint = "/backend/anagram";
  const defaultLength = 7;
  const tick = "\u2713";
  const cross = "\u2717";
  const minWordLength = 5;
  const maxWordLength = 12;
  const nonBreakingSpace = String.fromCharCode(160);

  const [length, setLength] = useState(defaultLength);
  const [anagram, setAnagram] = useState(nonBreakingSpace);
  const [solutions, setSolutions] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [skipCount, setSkipCount] = useState(0);
  const [passCount, setPassCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [continues, setContinues] = useState(0);
  const [fetches, triggerFetch] = useState(0);

  useEffect(() => {
    fetch(`${anagramEndpoint}?length=${length}`)
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
    <GameBody>
      <GameHeader>
        <GameTitle>Anagram</GameTitle>
      </GameHeader>
      <GameLayout>
        <Controls>
          <ActionButton label="Next" action={showNextAnagram} />
          <ActionButton
            label="Answer"
            action={displaySolution}
            disabled={disabled}
          />
          <ActionButton label="Reset" action={resetGame} />
        </Controls>
        <AnagramDisplay>
          <Word word={anagram} />
          <GuessForm
            solutions={solutions}
            incrementScore={incrementScore}
            disabled={disabled}
          />
          <Answers answers={solutions} showAnswers={showAnswer} />
          <LengthSelector
            maxLength={maxWordLength}
            minLength={minWordLength}
            currentLength={length}
            changeLength={changeLength}
          />
        </AnagramDisplay>
        <Scores>
          <Counter value={score} status={Status.GOOD} title={tick} />
          <Counter value={passCount} status={Status.BAD} title={cross} />
        </Scores>
      </GameLayout>
    </GameBody>
  );
};

export default Anagram;
