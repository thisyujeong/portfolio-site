import React from 'react';
import Profile from '../components/About/Profile';
import styled from 'styled-components';
import StackList from '../components/About/StackList';

const AboutContainer = styled.div`
  padding: 0 40px;
  h3 {
    color: #096dd9;
    font-weight: bold;
    margin-bottom: 50px;
  }
  h4 {
    font-size: 24px;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
function About(props) {
  return (
    <AboutContainer>
      <h3>About Me</h3>
      <h4>I Experience It, And If I Like It, I Continue</h4>
      <Profile />
      <StackList />
    </AboutContainer>
  );
}

export default About;
