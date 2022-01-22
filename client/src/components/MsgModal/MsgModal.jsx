import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .modal {
    position: fixed;
    width: 450px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.075);

    &-header {
      color: #171717;
      font-size: 16px;
      padding: 7px 16px;
      border-bottom: 1px solid rgba(29, 29, 29, 0.1);
      .heading {
        text-transform: capitalize;
      }
      .state-icon {
        margin-right: 8px;
        .success {
          color: #32bd32;
        }
        .warning {
          color: #f7bb16;
        }
        .error {
          color: #d82e2e;
        }
      }
    }
    &-body {
      padding: 20px 16px;
      min-height: 80px;
      color: #828491;
    }
    &-footer {
      padding: 0 16px 16px;
      text-align: right;
      button {
        width: 80px;
        height: 32px;
        color: #fff;
        border: 0;
        background-color: #171717;
        cursor: pointer;
        &:hover {
          background-color: #2e2f36;
        }
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

function MsgModal({ type, heading, message, submit, onModalHandler }) {
  const onClick = (e) => {
    e.preventDefault();
    onModalHandler(false);
  };
  const StateIcon = () => {
    switch (type) {
      case 'success':
        return <FontAwesomeIcon icon={faCheckCircle} className="success" />;
      case 'warning':
        return <FontAwesomeIcon icon={faExclamationCircle} className="warning" />;
      case 'warning':
        return <FontAwesomeIcon icon={faExclamationCircle} className="error" />;
      default:
        return null;
    }
  };
  return (
    <StyledModal className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <span className="state-icon">
            <StateIcon />
          </span>
          <span className="heading">{heading}</span>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClick}>{submit}</button>
        </div>
      </div>
      <div className="mask" onClick={onClick}></div>
    </StyledModal>
  );
}

export default MsgModal;
