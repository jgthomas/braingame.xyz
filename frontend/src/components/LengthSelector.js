import React from "react";

const LengthSelector = ({ minLength, maxLength, changeLength }) => {
  const lengths = Array.from(Array(maxLength + 1).keys()).filter(
    (n) => n > minLength
  );

  const optionsList = lengths.map((n) => {
    return (
      <option key={n} value={n}>
        {n} Letters
      </option>
    );
  });

  const setNewLength = (event) => {
    const newLength = event.target.value;
    changeLength(newLength);
  };

  return <select onChange={setNewLength}>{optionsList}</select>;
};

export default LengthSelector;
