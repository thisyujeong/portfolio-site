import styled from 'styled-components';

export const NavBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #171717;
  background-color: ${(props) => props.theme.bgColor};
  z-index: 999;
  header {
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
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
        span {
          color: #2fce7e;
        }
        div {
          margin-top: 4px;
          color: #fff;
          font-size: 12px;
          color: ${(props) => props.theme.subTextColor};
        }
      }
    }

    nav {
      height: 100%;
      margin-left: auto;
      margin-right: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      ul {
        display: flex;
        align-items: center;
        li {
          position: relative;
          cursor: pointer;
          a {
            font-family: 'Lato';
            font-weight: 700;
            text-transform: uppercase;
            display: inline-block;
            color: ${(props) => props.theme.linkColor};
          }
          &:before {
            display: none;
            position: absolute;
            top: -12px;
            left: 50%;
            width: 6px;
            height: 6px;
            border-radius: 3px;
            transform: translateX(-50%);
            content: '';
          }
          &:hover {
            a {
              color: ${(props) => props.theme.linkActiveColor};
            }
            &:before {
              display: block;
              background-color: ${(props) => props.theme.linkDotColor};
            }
          }
          &.active {
            a {
              color: ${(props) => props.theme.linkActiveColor};
            }
            &:before {
              display: block;
              background-color: #2fce7e;
            }
          }
        }

        li + li {
          margin-left: 16px;
        }
      }
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
`;
