import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LoadingSpinnerContainer } from './LoadingSpinner.style';
function LoadingSpinner(props) {
  return (
    <LoadingSpinnerContainer>
      <FontAwesomeIcon icon={faSpinner} className="spinner" />
    </LoadingSpinnerContainer>
  );
}

export default LoadingSpinner;
