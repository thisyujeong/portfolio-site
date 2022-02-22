import styled from 'styled-components';

export const LoadingSpinnerContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.loadingBg};
  z-index: 9999;

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: #096dd9;
    animation: lotationloop 1s infinite linear;
  }

  @keyframes lotationloop {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
