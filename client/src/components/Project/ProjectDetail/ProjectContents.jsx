import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '../../MarkdownRenderer';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ContentsContainer, ContentsFooterContainer } from './ProjectContents.style';
import { AiOutlineLink } from 'react-icons/ai';
import { RiExternalLinkLine } from 'react-icons/ri';
import { ImArrowLeft2 } from 'react-icons/im';
import { postList } from '../../../_actions/post_action';
import DirectionBtn from './DirectionBtn';
import LoadingSpinner from '../../LoadingSpinner';
import HeroImg from './HeroImg';

function ProjectContents({ post }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState();
  const [current, setCurrent] = useState();
  const [loading, setLoading] = useState(true);

  const onClickBack = (e) => {
    e.preventDefault();
    history.push('/');
  };

  useEffect(() => {
    post &&
      dispatch(postList()).then((res) => {
        const _data = res.payload.data.filter((v) => v.lock === false);
        const idx = _data.findIndex((i) => i.id === post.id);
        setPosts(_data);
        setCurrent(idx);
        setLoading(false);
      });
  }, [dispatch, post]);

  if ((!post || !posts) && loading) return <LoadingSpinner />;
  return (
    <>
      <ContentsContainer>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="hero-box">
            <HeroImg hero={post.hero} />
          </div>
          <div className="content">
            <button className="back" onClick={onClickBack}>
              <ImArrowLeft2 />
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
            <div className="info-box column">
              <div className="col">
                <div className="label">What's this project?</div>
                <p>{post.desc}</p>
              </div>
              <div className="col">
                <div className="label">Summary</div>
                <div className="inner-box">
                  <div className="row">
                    <span className="sub-label">?????? ??????</span>
                    <div>{post.member} ???</div>
                  </div>
                  <div className="row">
                    <span className="sub-label">?????? ??????</span>
                    <div>{post.due}</div>
                  </div>
                  <div className="row">
                    <span className="sub-label">?????? ??????</span>
                    <div>{post.role}</div>
                  </div>
                  <div className="row">
                    <span className="sub-label">GitHub</span>
                    <a href={post.git} target="_blank" rel="noopener noreferrer">
                      <AiOutlineLink />
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
                      <RiExternalLinkLine />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail">
              <div className="label">Detail</div>
              <MarkdownRenderer markdown={post.markdown} html={post.html} />
            </div>
          </div>
        </motion.div>
      </ContentsContainer>
      <ContentsFooterContainer>
        <DirectionBtn type="prev" post={posts[current + 1]} />
        <DirectionBtn type="next" post={posts[current - 1]} />
      </ContentsFooterContainer>
    </>
  );
}

export default ProjectContents;
