import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { postList } from '../_actions/post_action';
import ProjectItem from '../components/ProjectItem';

const LandingContainer = styled.div`
  padding-bottom: 15vw;
  h2 {
    position: relative;
    font-size: 10vw;
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
  ul {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    flex-wrap: wrap;
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

  return (
    <LandingContainer>
      <h2>
        works<span>({posts.length})</span>
      </h2>
      <ul>
        {posts.map((post, idx) => (
          <ProjectItem post={post} key={idx} />
        ))}
      </ul>
    </LandingContainer>
  );
}

export default LandingPage;
