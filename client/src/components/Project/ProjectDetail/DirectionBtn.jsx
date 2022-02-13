import React from 'react';
import { useHistory } from 'react-router-dom';
import { DirBtnContainer } from './DirectionBtn.style';

function DirectionBtn({ type, post }) {
  const history = useHistory();

  const onClick = (e) => {
    history.push(`/projects/${post.id}`);
  };

  if (!post) post = null;

  console.log(type, post);
  const DirBtn = () => {
    return type === 'prev' ? (
      post == null ? (
        <div className="dir-btn prev" onClick={onClick}>
          <div className="dir-title"> 첫번쩨 프로젝트입니다.</div>
        </div>
      ) : (
        <div className="dir-btn prev" onClick={onClick}>
          <div className="dir-title">{post.title}</div>
        </div>
      )
    ) : post == null ? (
      <div className="dir-btn next" onClick={onClick}>
        <div className="dir-title">마지막 프로젝트입니다.</div>
      </div>
    ) : (
      <div className="dir-btn next" onClick={onClick}>
        <div className="dir-title">{post.title}</div>
      </div>
    );
  };

  return (
    <DirBtnContainer>
      <DirBtn />
    </DirBtnContainer>
  );
}

export default DirectionBtn;
