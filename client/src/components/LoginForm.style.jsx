import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 100px auto;

  h1 {
    color: ${(props) => props.theme.textColor};
    text-align: center;
    margin-bottom: 48px;
    font-size: 24px;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    .label {
      margin-bottom: 8px;
      color: ${(props) => props.theme.inputLabel};
      font-size: 16px;
      font-family: 'Lato';
      font-weight: 900;
      text-transform: uppercase;
    }
    input {
      width: 100%;
      height: 45px;
      font-size: 14px;
      padding: 0 16px;
      border: 0;
      border-radius: 4px;
      background-color: ${(props) => props.theme.inputBgColor};
      outline: 0;

      &:focus {
        outline: 3px solid ${(props) => props.theme.inputFocusOutline};
      }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      font-size: 14px !important;
      -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.inputBgColor} inset !important;
    }
    input:-webkit-autofill:focus {
      outline: 3px solid ${(props) => props.theme.inputFocusOutline};
    }
  }

  .submit {
    width: 100%;
    height: 55px;
    margin-top: 12px;
    border: 0;
    border-radius: 4px;
    background-color: #096dd9;
    color: #171717;
    font-size: 16px;
    font-family: 'Lato';
    font-weight: 900;
    text-transform: uppercase;
    transform: 0.3s;
    cursor: pointer;
    &:hover {
      color: #363636;
      background-color: #49d38e;
    }
  }
`;
