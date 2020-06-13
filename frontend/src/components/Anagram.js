import React, { useState, useEffect } from "react";

const Anagram = () => {
  const [anagram, setAnagram] = useState("");

  useEffect(() => {
    fetch("/backend/anagram")
      .then((res) => res.json())
      .then((data) => {
        setAnagram(data.word);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="anagramDisplay">
      <p>Anagram word: {anagram}</p>
    </div>
  );
};

export default Anagram;
