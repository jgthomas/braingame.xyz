import React from "react";
import PropTypes from "prop-types";
import "./ActionButton.css";

const ActionButton = ({ label, action, disabled }) => {
  return (
    <button onClick={action} disabled={disabled ? disabled : false}>
      {label}
    </button>
  );
};

ActionButton.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ActionButton;
