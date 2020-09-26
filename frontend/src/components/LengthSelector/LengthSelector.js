import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const Input = styled.input`
  width: 60%;
  -webkit-appearance: none;
  height: 34px;
  margin: 10px 0;
  background-color: #f5f5f5;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-moz-range-thumb {
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: lightslategrey;
    cursor: pointer;
  }

  &::-moz-range-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    background: lightslategrey;
    border-radius: 1px;
  }

  &::-webkit-slider-thumb {
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: lightslategrey;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    background: lightslategrey;
    border-radius: 1px;
  }

  &:focus::-webkit-slider-runnable-track {
    background: lightslategrey;
  }
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
        <Input
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
