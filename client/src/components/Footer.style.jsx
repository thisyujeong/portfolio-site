import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 80px;
  text-align: center;
  font-size: 14px;
  font-family: 'Lato';
  color: ${(props) => props.theme.subTextColor};

  .container {
    padding: 16px 0;
    border-top: 1px solid ${(props) => props.theme.borderColor};

    a {
      display: block;
      margin-top: 8px;
      font-size: 12px;
      &:hover {
        text-decoration: underline;
        color: ${(props) => props.theme.subTextColor};
      }
    }
  }
`;
