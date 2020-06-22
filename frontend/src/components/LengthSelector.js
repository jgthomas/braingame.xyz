import React from "react";
import PropTypes from "prop-types";

const LengthSelector = ({ minLength, maxLength, changeLength }) => {
  return (
    <div>
      <form>
        <label>Anagram length </label>
        <input
          data-testid="widthInput"
          onChange={(e) => changeLength(e.target.value)}
          type="number"
          step="1"
          defaultValue={maxLength - minLength}
          min={minLength}
          max={maxLength}
          name="petalWidth"
          required
        />
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
