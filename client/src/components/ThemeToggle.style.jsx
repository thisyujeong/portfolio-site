import styled from 'styled-components';

export const ThemeToggleContainer = styled.div`
  .theme {
    width: 40px;
    height: 40px;
    margin-left: 24px;
    font-size: 16px;
    border: 0;
    border-radius: 40%;
    background-color: ${(props) => props.theme.iconBgColor};
    transition: 0.2s;
    cursor: pointer;

    svg path {
      color: ${(props) => props.theme.iconColor};
    }

    &:hover {
      background-color: ${(props) => props.theme.iconHoverBgColor};
      svg path {
        background-color: ${(props) => props.theme.iconHoverColor};
      }
    }
  }
`;
