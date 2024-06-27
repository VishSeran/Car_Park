import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ destination }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(destination)} className="p-2 bg-blue-400 rounded">
      Back
    </button>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string.isRequired, // Ensure destination prop is validated
};

export default BackButton;
