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
    transform: translateY(10vw);
  }
  &:hover * {
    color: ${(props) => props.theme.textColor};
  }

  .type {
    min-width: 120px;
    color: #096dd9;
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

    &:hover {
      img {
        transform: scale(1.1);
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
      padding: 0;
      padding-right: 24px;
      font-size: 18px;
      display: flex;
      flex-wrap: nowrap;
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
        white-space: nowrap;
      }
      li + li {
        margin-left: 12px;
      }
    }
    .title {
      font-size: 60px;
      margin: 0.3em 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .more {
      display: inline-block;
      width: fit-content;
      margin-top: 1em;
      margin-left: auto;
      font-size: 32px;
      text-align: right;
      text-decoration: underline;
      transition: all 0.3s;
      &:hover {
        margin-right: 30px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 30px 20px;
    &:before {
      width: calc(100% - 40px);
      left: 20px;
    }
    .type {
      font-size: 18px;
    }
    .thumbnail {
      &:after {
        display: none;
      }
      &:hover {
        img {
          transform: none;
          opacity: 1;
        }
      }
    }
    .post-info {
      .info {
        font-size: 16px;
      }
      .title {
        font-size: 50px;
      }
      .tech {
        li {
          font-size: 12px;
        }
        li + li {
          margin-left: 12px;
        }
      }
      .more {
        font-size: 24px;
        &:hover {
          margin-right: 0;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 32px 0;
    &:nth-child(2n) {
      transform: translateY(0);
    }
    &:before {
      width: 100%;
      left: 0;
    }
    .type {
      position: absolute;
      height: 28px;
      padding: 0 12px;
      min-width: fit-content;
      line-height: 28px;
      font-size: 16px;
      background-color: ${(props) => props.theme.bgColor};
      z-index: 1;
    }
    .post-info {
      padding: 24px 24px 0 0;
      .title {
        font-size: 40px;
      }
      
    }
  }
}
`;
