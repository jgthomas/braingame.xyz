import React from "react";
import PropTypes from "prop-types";

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

LengthSelector.propTypes = {
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  changeLength: PropTypes.func,
};

export default LengthSelector;
