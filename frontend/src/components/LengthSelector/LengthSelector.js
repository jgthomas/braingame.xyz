import React from "react";
import PropTypes from "prop-types";
import "./LengthSelector.css";

const LengthSelector = ({
  minLength,
  maxLength,
  currentLength,
  changeLength,
}) => {
  const setNewLength = (event) => {
    const newLength = event.target.value;
    changeLength(newLength);
  };

  return (
    <div className="selector">
      <form>
        <label className="selector-text selector-title">
          Current Word Length
        </label>
        <div>
          <output className="selector-text selector-value">
            {" "}
            {currentLength}
          </output>
        </div>
        <output className="selector-text selector-max-min">{minLength} </output>
        <input
          name="lengthPicker"
          data-testid="lengthInput"
          onChange={setNewLength}
          type="range"
          step="1"
          value={currentLength}
          min={minLength}
          max={maxLength}
          required
        />
        <output className="selector-text selector-max-min"> {maxLength}</output>
      </form>
    </div>
  );
};

LengthSelector.propTypes = {
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  currentLength: PropTypes.number,
  changeLength: PropTypes.func,
};

export default LengthSelector;
