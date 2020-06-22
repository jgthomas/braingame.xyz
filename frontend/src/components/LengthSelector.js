import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LengthSelector.css";

const LengthSelector = ({ minLength, maxLength, changeLength }) => {
  const [length, setLength] = useState(maxLength - minLength);

  const setNewLength = (event) => {
    const newLength = event.target.value;
    setLength(newLength);
    changeLength(newLength);
  };

  return (
    <div>
      <form>
        <label>Anagram length </label>
        <input
          name="lengthPicker"
          data-testid="lengthInput"
          onChange={setNewLength}
          type="range"
          step="1"
          defaultValue={length}
          min={minLength}
          max={maxLength}
          required
        />
        <output>{length}</output>
      </form>
    </div>
  );
};

LengthSelector.propTypes = {
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  changeLength: PropTypes.func,
};

export default LengthSelector;
