import styled from 'styled-components';

export const HeroImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  font-size: 0;

  .thumb-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
