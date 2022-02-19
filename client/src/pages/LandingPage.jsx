import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { postList } from '../_actions/post_action';
import LoadingSpinner from '../components/LoadingSpinner';
import * as framer from '../framer/landing';
import ProjectItem from '../components/Project/ProjectItem';
const LandingContainer = styled.div`
  padding-bottom: 15vw;
  h2 {
    position: relative;
    font-size: 150px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.textColor};

    span {
      font-size: 2vw;
      position: absolute;
      top: 2.5vw;
    }
  }
  .projects {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    flex-wrap: wrap;

    .item {
      width: 50%;
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 60px 40px;
      &:nth-child(2n) {
        top: 150px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 14vw;
      margin: 0.4em 0 0.8em;
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 25vw;
      text-align: left;
      margin-top: 0.2em;
      margin-bottom: 0.2em;
      padding-left: 10px;
      span {
        font-size: 5vw;
        top: 5.5vw;
      }
    }
    .projects {
      padding-left: 10px;
      margin-right: -26px;
      border-top: 1px solid ${(props) => props.theme.borderColor};

      .item {
        width: 100%;
        padding: 0;
        &:nth-child(2n) {
          top: 0;
        }
      }
    }
  }
`;

function LandingPage(props) {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(postList()).then((response) => {
      setLoading(false);
      console.log('landing', response.payload.data);
      setPosts(response.payload.data.reverse());
    });
  }, [dispatch]);

  return (
    <LandingContainer>
      <h2>
        works<span>&#40;{posts.length}&#41;</span>
      </h2>
      {loading && <LoadingSpinner />}
      <motion.ul
        className="projects"
        variants={framer.container}
        initial="hidden"
        animate="visible"
      >
        {posts.map(
          (post, idx) =>
            !post.lock && (
              <motion.li key={idx} className="item" variants={framer.item}>
                <ProjectItem post={post} />
              </motion.li>
            )
        )}
      </motion.ul>
    </LandingContainer>
  );
}

export default LandingPage;
