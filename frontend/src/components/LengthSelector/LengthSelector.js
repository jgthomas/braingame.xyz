import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./LengthSelector.css";

const Selector = styled.div`
  margin-top: 4em;
  width: 100%;
`;

const SelectorLabel = styled.label`
  color: lightslategray;
  font-size: 1.5em;
  display: block;
`;

const Output = styled.output`
  color: lightslategray;
`;

const OutputRange = styled(Output)`
  font-size: 1.25em;
`;

const OutputCurrent = styled(Output)`
  font-size: 3em;
`;

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
    <Selector>
      <form>
        <SelectorLabel>Current Word Length</SelectorLabel>
        <div>
          <OutputCurrent> {currentLength}</OutputCurrent>
        </div>
        <OutputRange>{minLength} </OutputRange>
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
        <OutputRange> {maxLength}</OutputRange>
      </form>
    </Selector>
  );
};

LengthSelector.propTypes = {
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  currentLength: PropTypes.number,
  changeLength: PropTypes.func,
};

export default LengthSelector;
