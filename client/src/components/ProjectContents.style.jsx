import styled from 'styled-components';

export const ContentsContainer = styled.div`
  position: relative;
  .back {
    width: 40px;
    height: 40px;
    margin-bottom: 50px;
    color: ${(props) => props.theme.backColor};
    border: 0;
    background-color: ${(props) => props.theme.backBgColor};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.backHoverColor};
    }
  }

  .title {
    font-size: 70px;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 70px;
  }

  .info-box {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    font-size: 18px;

    .label {
      width: 120px;
      display: inline-block;
      color: #ff1460f5;
      font-size: 18px;
      font-family: Courier;
      font-weight: 900;
      text-transform: uppercase;
    }

    .techs {
      display: flex;

      li {
        padding: 7px 12px 4px 12px;
        font-size: 14px;
        font-weight: bold;
        background-color: ${(props) => props.theme.textColor};
        color: ${(props) => props.theme.bgColor};
      }
      li + li {
        margin-left: 24px;
      }
    }

    .thumbnail {
      height: 400px;
      width: 100%;
      margin: 50px 0;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &.column {
      align-items: flex-start;
      .col {
        width: 50%;
        padding-right: 10%;
      }
      .label {
        width: 100%;
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 24px;
      }
      p {
        line-height: 1.75;
      }

      .row {
        margin-bottom: 12px;
      }
      .sub-label {
        width: 120px;
        display: inline-block;
        font-weight: bold;
        line-height: 1.75;
      }
    }
  }

  .detail {
    margin-top: 50px;
    .label {
      position: relative;
      font-size: 24px;
      color: #ff1460f5;
      font-family: Courier;
      font-weight: 900;
      &:after {
        position: absolute;
        top: 50%;
        right: 0;
        height: 1px;
        width: calc(100% - 100px);
        background: ${(props) => props.theme.borderColor};
        content: '';
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 45px;
    .back {
      position: absolute;
      top: -26px;
      left: 0;
    }
    .title {
      margin-bottom: 40px;
    }

    .info-box {
      .label {
        width: 90px;
      }
      align-items: flex-start;
      margin-bottom: 24px;
      font-size: 16px;
      line-height: 1.5;
      .techs {
        margin: 0 -4px;
        flex-wrap: wrap;
        li {
          margin: 0 4px 10px;
          height: 25px;
          line-height: 1;
        }
        li + li {
          margin: 0 4px;
        }
      }

      .thumbnail {
        margin: 24px -24px;
        width: 100vw;
        height: 200px;
      }

      &.column {
        flex-direction: column;
        .col {
          width: 100%;
          padding-right: 0;
        }
        .col + .col {
          margin-top: 24px;
        }
        .label {
          margin-bottom: 12px;
        }
      }
    }
  }
`;
