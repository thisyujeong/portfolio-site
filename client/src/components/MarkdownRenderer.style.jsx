import styled from 'styled-components';

export const MarkdownContainer = styled.div`
  padding: 50px 1em;
  font-size: 18px;
  line-height: 1.75em;

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${(props) => props.theme.textColor};
  }

  p code {
    background-color: #ffffff2e;
    border-radius: 2px;
    padding: 0 6px;
    color: #35ff98d9;
  }
`;

export const InlineCode = styled.span`
  background-color: #8d909b;
`;
