import React, { useState, useEffect } from "react";

const Anagram = () => {
  const [length] = useState(9);
  const [anagram, setAnagram] = useState("");

  useEffect(() => {
    fetch(`/backend/anagram?length=${length}`)
      .then((res) => res.json())
      .then((data) => {
        setAnagram(data.word);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [length]);

  return (
    <div className="anagramDisplay">
      <p>Anagram word: {anagram}</p>
    </div>
  );
};

export default Anagram;
