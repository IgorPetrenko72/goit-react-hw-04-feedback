import React from "react";
import PropTypes from 'prop-types';
import './Notification.css';

const Notification  = ({ massage }) => (
        <p className="massage">{massage}</p>
);

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};

export default Notification;