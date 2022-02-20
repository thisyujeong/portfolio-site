import React from 'react';
import { useHistory } from 'react-router-dom';
import { DirBtnContainer } from './DirectionBtn.style';

function DirectionBtn({ type, post }) {
  const history = useHistory();

  const onClick = (e) => {
    if (post === null) return;
    history.push(`/projects/${post.id}`);
  };

  if (!post) post = null;

  const DirBtn = () => {
    return post == null ? (
      <div className={`dir-btn not-allow ${type}`} onClick={onClick}>
        <div className="dir-title">
          {' '}
          {type === 'prev' ? '첫번째' : '마지막'} 프로젝트입니다.
        </div>
      </div>
    ) : (
      <div className={`dir-btn ${type}`} onClick={onClick}>
        <div className="dir-title">{post.title}</div>
        <div className="desc">{post.info}</div>
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
