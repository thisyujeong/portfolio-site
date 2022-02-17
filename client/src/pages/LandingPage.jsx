import React, { useEffect, useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { postList } from '../_actions/post_action';
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
    }
  }
`;

function LandingPage(props) {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(postList()).then((response) => {
      console.log('landing', response.payload.data);
      setPosts(response.payload.data);
    });
  }, [dispatch]);

  const LazyImage = lazy(() => import('../components/Project/ProjectItem'));
  return (
    <LandingContainer>
      <h2>
        works<span>({posts.length})</span>
      </h2>
      <ul className="projects">
        <Suspense fallback={<div>...loading</div>}>
          {posts
            .reverse()
            .map((post, idx) => !post.lock && <LazyImage post={post} key={idx} />)}
        </Suspense>
      </ul>
    </LandingContainer>
  );
}

export default LandingPage;
