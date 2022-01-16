import { useRef } from 'react';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // 여기 css를 수정해서 코드 하이라이팅 커스텀 가능

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

// code-syntax-hightlight
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

// code-syntax
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import styled from 'styled-components';

const StyledEditor = styled.div`
  width: 100%;
  padding-top: 32px;
  border-top: 1px solid rgba(29, 29, 29, 0.1);
  .toastui-editor-toolbar {
    .toastui-editor-defaultUI-toolbar {
      background-color: #f7f7f7;
    }

    .scroll-sync {
      &:before {
        content: 'scroll';
        font-weight: bold;
      }
      &.active {
        &:before {
          color: #171717;
        }
        .switch {
          background-color: #d3d3d3;
          margin-left: 10px;
        }
        .switch:before {
          background-color: #171717;
        }
      }
    }
  }
  .toastui-editor-main {
    background-color: #fff;
  }
  .toastui-editor-contents {
    .toastui-editor-md-preview-highlight::after {
      background-color: #f7f9fc;
    }
    pre {
      background-color: #f5f7f8;
    }
  }
`;
export default function WriteEditor({ getEditorHtml }) {
  const editorRef = useRef();

  const onChangeEditorTextHandler = () => {
    const getInstance = editorRef.current.getInstance();
    const getInstance_html = getInstance.getHTML();
    getEditorHtml(getInstance_html);
  };

  return (
    <StyledEditor>
      <Editor
        height="600px"
        initialEditType="markdown"
        previewStyle="vertical"
        ref={editorRef}
        onChange={onChangeEditorTextHandler}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </StyledEditor>
  );
}
