import styled from 'styled-components';

export const ProjectItemContainer = styled.li`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
  &:before {
    position: absolute;
    bottom: 0;
    left: 40px;
    width: calc(100% - 80px);
    height: 1px;
    background-color: ${(props) => props.theme.borderColor};
    content: '';
  }

  &:nth-child(2n) {
    transform: translateY(8vw);
  }
  &:hover * {
    color: ${(props) => props.theme.textColor};
  }

  .type {
    min-width: 120px;
    color: #4eff25;
    font-family: 'Lato';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .thumbnail {
    position: relative;
    padding-bottom: 60%;
    border: 1px solid ${(props) => props.theme.borderColor};
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s;
    }

    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #fff;
      font-weight: bold;
      font-size: 3vw;
      opacity: 0;
      transform: translate(-50%, -50%) rotate(-20deg);
      transition: all 0.3s;
      content: 'VIEW';
    }

    &:hover {
      img {
        transform: scale(1.1);
        opacity: 0.7;
      }
      &:after {
        opacity: 0.7;
      }
    }
  }

  .post-info {
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    .info {
      font-size: 18px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .tech {
      font-size: 18px;
      display: flex;
      flex-wrap: nowrap;
      margin-top: 20px;
      overflow-y: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }

      li {
        padding: 7px 12px 4px 12px;
        font-size: 14px;
        font-weight: bold;
        background-color: ${(props) => props.theme.badgeBg};
        color: ${(props) => props.theme.badgeColor};
      }
      li + li {
        margin-left: 24px;
      }
    }
    .title {
      font-size: 75px;
      margin: 0.3em 0 0.5em;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .more {
      display: inline-block;
      width: fit-content;
      font-size: 32px;
      margin-left: auto;
      text-align: right;
      text-decoration: underline;
      transition: all 0.3s;
      &:hover {
        margin-right: 30px;
      }
    }
  }
`;
