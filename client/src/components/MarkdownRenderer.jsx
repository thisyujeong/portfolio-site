import React from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownContainer } from './MarkdownRenderer.style';

function MarkdownRenderer({ markdown }) {
  return (
    <MarkdownContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkdownContainer>
  );
}

export default MarkdownRenderer;
