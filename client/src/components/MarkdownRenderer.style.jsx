import styled from 'styled-components';

export const MarkdownContainer = styled.div`
  padding: 50px 1em;
  font-size: 18px;
  line-height: 1.75em;

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: ${(props) => props.theme.textColor};
  }

  p code {
    background-color: #f4f7f8;
    border-radius: 2px;
    padding: 2px 6px;
    font-size: 16px;
    font-family: monospace;
    margin: 0 4px;
  }

  pre {
    code {
    }
  }
  .toastui-editor-contents {
    font-size: 16px;

    * {
      line-height: 1.57;
    }

    h1,
    h2 {
      border-color: ${(props) => props.theme.borderColor};
    }

    pre {
      background-color: #f4f7f8;
      padding: 16px;
      border-radius: 4px;
      margin: 24px 0;
      font-size: 16px;
      code {
        color: #171717;
        text-shadow: unset;
      }
    }

    code {
      color: #687593;
      background-color: #f4f7f8;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 24px 0;
  }
`;
