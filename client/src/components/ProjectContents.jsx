import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { ContentsContainer } from './ProjectContents.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function ProjectContents({ post }) {
  const history = useHistory();
  const onClickBack = (e) => {
    e.preventDefault();
    history.push('/');
  };
  if (!post) return null;
  return (
    <ContentsContainer>
      <button className="back" onClick={onClickBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h3 className="title">{post.title}</h3>
      <div className="info-box">
        <span className="label">Info.</span>
        {post.info}
      </div>
      <div className="info-box">
        <span className="label">Tech.</span>
        <ul className="techs">
          {post.tech.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="info-box">
        <div className="thumbnail">
          <img src={post.hero} alt="hero" />
        </div>
      </div>

      <div className="info-box column">
        <div className="col">
          <div className="label">What's this project?</div>
          <p>{post.desc}</p>
        </div>
        <div className="col">
          <div className="label">Summary</div>
          <div className="inner-box">
            <div className="row">
              <span className="sub-label">참여 인원</span>
              {post.member} 명
            </div>
            <div className="row">
              <span className="sub-label">제작 기간</span>
              {post.due}
            </div>
            <div className="row">
              <span className="sub-label">업무 범위</span>
              {post.role}
            </div>
          </div>
        </div>
      </div>

      <div className="detail">
        <div className="label">Detail</div>
        <MarkdownRenderer markdown={post.markdown} html={post.html} />
      </div>
    </ContentsContainer>
  );
}

export default ProjectContents;
