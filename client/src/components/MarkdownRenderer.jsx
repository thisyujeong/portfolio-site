import React from 'react';
import { MarkdownContainer } from './MarkdownRenderer.style';

import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

export default function MarkdownRenderer({ markdown, html }) {
  return (
    <MarkdownContainer>
      <Viewer
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        initialValue={markdown}
      />
    </MarkdownContainer>
  );
}
