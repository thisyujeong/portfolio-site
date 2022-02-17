import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '../../MarkdownRenderer';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ContentsContainer, ContentsFooterContainer } from './ProjectContents.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faLink,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { postList } from '../../../_actions/post_action';
import DirectionBtn from './DirectionBtn';

function ProjectContents({ post }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState();
  const [current, setCurrent] = useState();

  const onClickBack = (e) => {
    e.preventDefault();
    history.push('/');
  };

  useEffect(() => {
    post &&
      dispatch(postList()).then((res) => {
        const _data = res.payload.data;
        const idx = _data.findIndex((i) => i.id === post.id);
        setPosts(_data);
        setCurrent(idx);
      });
  }, [dispatch, post]);

  if (!post || !posts) return null;
  return (
    <>
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
                <div>{post.member} 명</div>
              </div>
              <div className="row">
                <span className="sub-label">제작 기간</span>
                <div>{post.due}</div>
              </div>
              <div className="row">
                <span className="sub-label">업무 범위</span>
                <div>{post.role}</div>
              </div>
              <div className="row">
                <span className="sub-label">GitHub</span>
                <a href={post.git} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
              <div className="row">
                <span className="sub-label">Site Link</span>
                <a
                  href={post.site}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="detail">
          <div className="label">Detail</div>
          <MarkdownRenderer markdown={post.markdown} html={post.html} />
        </div>
      </ContentsContainer>
      <ContentsFooterContainer>
        <DirectionBtn type="prev" post={posts[current + 1]} />
        <DirectionBtn type="next" post={posts[current - 1]} />
      </ContentsFooterContainer>
    </>
  );
}

export default ProjectContents;
