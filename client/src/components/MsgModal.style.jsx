import styled from 'styled-components';

export const MsgModalContainer = styled.div`
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
        width: 96px;
        height: 32px;
        margin-left: 16px;
        color: #171717;
        border: 0;
        border: 1px solid rgba(29, 29, 29, 0.2);
        background-color: #fff;
        cursor: pointer;
        &:hover {
          background-color: rgba(29, 29, 29, 0.05);
        }

        &.primary {
          width: 96px;
          height: 32px;
          color: #fff;
          border: 1px solid #171717;
          background-color: #171717;
          cursor: pointer;
          &:hover {
            border-color: #2e2f36;
            background-color: #2e2f36;
          }
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
