import React, { useState } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  &.visible {
    display: block;
  }
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
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

function MsgModal({ heading, message, submit }) {
  return (
    <StyledModal className={`modal-wrapper visible`}>
      <div className="modal">
        <div className="modal-header">
          <span className="heading">{heading}</span>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button>{submit}</button>
        </div>
      </div>
      <div className="mask"></div>
    </StyledModal>
  );
}

export default MsgModal;
