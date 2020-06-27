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
    <div class="selector">
      <form>
        <label class="selector-text selector-title">Current Word Length</label>
        <div>
          <output class="selector-text selector-value"> {currentLength}</output>
        </div>
        <output class="selector-text selector-max-min">{minLength} </output>
        <input
          name="lengthPicker"
          data-testid="lengthInput"
          onChange={setNewLength}
          type="range"
          step="1"
          defaultValue={currentLength}
          value={currentLength}
          min={minLength}
          max={maxLength}
          required
        />
        <output class="selector-text selector-max-min"> {maxLength}</output>
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
