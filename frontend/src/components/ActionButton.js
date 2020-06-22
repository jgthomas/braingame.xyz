import React from "react";
import PropTypes from "prop-types";

const ActionButton = ({ label, action }) => {
  return <button onClick={action}>{label}</button>;
};

ActionButton.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
};

export default ActionButton;
