import styled from 'styled-components';

export const NavBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  background-color: #171717;
  background-color: ${(props) => props.theme.bgColor};
  z-index: 999;
  header {
    height: 100%;
    /* max-width: 1000px; */
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};

    h1 {
      font-size: 0;
      line-height: 1;
      a {
        margin: 0;
        color: ${(props) => props.theme.textColor};
        font-family: 'Lato';
        font-size: 20px;
        font-weight: 900;
        color: #ff1460f5;

        div {
          margin-top: 4px;
          color: #fff;
          font-size: 12px;
          color: ${(props) => props.theme.subTextColor};
        }
      }
    }

    .keyword {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.6;

      span {
        &:after {
          margin: 0 12px;
          content: '/';
        }
        &:last-child:after {
          content: none;
        }
      }
    }

    .nav-right {
      display: flex;
    }
    .auth {
      display: flex;
      height: 100%;
      align-items: center;
      margin-left: 8px;
      li {
        margin-left: 8px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        border-radius: 44%;
        color: ${(props) => props.theme.linkColor};
        cursor: pointer;
        &:hover {
          svg path {
            color: ${(props) => props.theme.linkActiveColor};
          }
        }
      }

      li a {
        &:hover {
          color: ${(props) => props.theme.linkActiveColor};
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    .keyword {
      display: none;
    }
    .theme {
      position: absolute;
      top: 94px;
      right: 24px;
    }
  }
`;
