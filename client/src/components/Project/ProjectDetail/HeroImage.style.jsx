import styled from 'styled-components';

export const HeroImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: 50px 0;
  width: 100%;
  max-height: 400px;
  height: 30vw;

  .thumb-img {
    width: 100%;
    object-fit: cover;
    height: auto;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
  }
  @media screen and (max-width: 768px) {
    margin: 24px 0;
    width: 100%;
    max-height: 150px;
  }
`;
