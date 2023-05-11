import React from "react";
import PropTypes from "prop-types";
import './Feedback.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="controls">
    {options.map((option, index) => (
      <button type="button" className="controls__btn" key={index} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};