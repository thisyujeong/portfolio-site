import React from 'react';
import { LoadingSpinnerContainer } from './LoadingSpinner.style';
import { ImSpinner2 } from 'react-icons/im';
function LoadingSpinner(props) {
  return (
    <LoadingSpinnerContainer>
      <ImSpinner2 className="spinner" />
    </LoadingSpinnerContainer>
  );
}

export default LoadingSpinner;
