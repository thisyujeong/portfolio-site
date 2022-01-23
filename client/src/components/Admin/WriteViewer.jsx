import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // 여기 css를 수정해서 코드 하이라이팅 커스텀 가능

import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

// code-syntax-hightlight
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

export default function WriteViewer() {
  return (
    <Viewer
      className="Viewer"
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}
