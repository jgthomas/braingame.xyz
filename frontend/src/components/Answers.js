import React from "react";

const Answers = ({ answers }) => {
  return answers.map((answer) => {
    return <p>{answer}</p>;
  });
};

export default Answers;
