import React from 'react';
import Profile from '../components/About/Profile';
import styled from 'styled-components';
import StackList from '../components/About/StackList';

const AboutContainer = styled.div`
  padding: 0 40px;
  h3 {
    color: #ff1460f5;
    font-weight: bold;
    margin-bottom: 50px;
  }
`;
function About(props) {
  return (
    <AboutContainer>
      <h3>About Me</h3>
      <Profile />
      <StackList />
    </AboutContainer>
  );
}

export default About;
