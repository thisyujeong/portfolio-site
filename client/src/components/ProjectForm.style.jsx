import styled from 'styled-components';

export const ProjectFormContainer = styled.div`
  form {
    display: flex;
    flex-wrap: wrap;
    label {
      display: flex;
      width: 100%;
      margin-bottom: 32px;
      padding: 0 12px;

      &.half {
        width: 50%;
      }

      .label {
        display: block;
        width: 120px;
        line-height: 40px;
      }

      input,
      select,
      textarea {
        position: relative;
        height: 40px;
        padding: 0 16px;
        color: ${(props) => props.theme.textColor};
        border: 1px solid #d9d9d9;
        outline: 0;
        &:hover {
          border-color: #17171760;
        }
        &:focus {
          border-color: #17171760;
          box-shadow: 0 0 0 2px rgb(233, 233, 233, 0.6);
        }
      }

      input {
        width: calc(100% - 120px);
        color: ${(props) => props.theme.textColor};

        &[type='checkbox'] {
          width: auto;
          & + span {
            line-height: 40px;
            margin-left: 8px;
          }
          &:focus {
            box-shadow: none;
          }
        }
      }

      select {
        width: 100%;
        appearance: none;
      }
      textarea {
        width: calc(100% - 120px);
        height: unset;
        padding: 12px 16px;
      }

      .select {
        position: relative;
        display: flex;
        width: calc(100% - 120px);
        &:before {
          position: absolute;
          top: 50%;
          right: 16px;
          width: 0;
          height: 0;
          border-top: 7px solid #17171760;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          transform: translateY(-50%);
          z-index: 1;
          content: '';
        }
        &:hover {
          &:before {
            border-top-color: #171717;
          }
        }
      }
    }
    .upload-wrapper {
      width: 50%;
      margin-bottom: 32px;
      padding: 0 12px;
      label {
        width: fit-content;
        margin-bottom: 0;
        padding: 0;
        .label {
          display: inline-block;
          width: 120px;
        }
      }
      .upload-box {
        position: relative;
        width: fit-content;
        input {
          width: 120px;
          line-height: 0;
          font-size: 0;
          border: 0;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
        .upload-btn {
          position: relative;
          display: block;
          width: 120px;
          height: 40px;
          color: #333333;
          font-size: 14px;
          line-height: 40px;
          text-align: center;
          border: 1px solid #d9d9d9;
          text-transform: uppercase;
          background-color: #171717;
          background-color: #ebebeb;
          cursor: pointer;
          z-index: 10;

          &:hover {
            color: #fff;
            background-color: #333333;
          }
        }
      }
      .file-name {
        margin-top: 8px;
        margin-left: 120px;
        font-size: 14px;
        font-weight: bold;
        color: #5287d7;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .form-footer {
      margin-top: 40px;
      margin-left: auto;
      button {
        width: 140px;
        height: 40px;
        cursor: pointer;
        color: #585858;
        background-color: #ebebeb;
        border: 1px solid #d9d9d9;
        &:hover {
          color: #171717;
          border-color: #b8b8b8;
          background-color: #d9d9d9;
        }
      }

      .submit {
        color: #fff;
        background-color: #171717;
        border: 1px solid #171717;
        &:hover {
          color: #fff;
          border: 1px solid #171717;
          background-color: #333333;
        }
      }

      button + button {
        margin-left: 16px;
      }
    }
  }
`;
