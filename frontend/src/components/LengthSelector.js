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
        <label class="selector-text selector-title">Length </label>
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
        <output class="selector-text"> {currentLength}</output>
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
