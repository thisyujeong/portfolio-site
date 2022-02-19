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

  .hero-box {
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    width: 100vw;
    left: calc((100vw - 100%) / 2 * -1);
    height: 30vw;
    overflow: hidden;
    background-color: red;
  }

  .content {
    padding-top: 30vw;
  }

  .info-box {
    display: flex;
    align-items: flex-start;
    margin-bottom: 32px;
    font-size: 18px;

    .label {
      width: 120px;
      min-width: 120px;
      display: inline-block;
      color: #096dd9;
      font-size: 18px;
      font-weight: 900;
      text-transform: uppercase;
    }

    .techs {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 0 10px 10px 0;
        padding: 7px 12px 4px 12px;
        color: ${(props) => props.theme.bgColor};
        font-size: 14px;
        font-weight: bold;
        background-color: ${(props) => props.theme.textColor};
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
        display: flex;
        align-items: flex-start;
        line-height: 1.75;
        .sub-label {
          width: 120px;
          min-width: 120px;
          display: block;
          font-weight: bold;
        }

        a:hover {
          color: #096dd9;
        }
      }
    }
  }

  .detail {
    margin-top: 100px;
    .label {
      position: relative;
      font-size: 24px;
      color: #096dd9;
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
    .back {
      position: absolute;
      top: -26px;
      left: 0;
      background-color: ${(props) => props.theme.bgColor};
      box-shadow: ${(props) => props.theme.postInputFocusShadow};
    }
    .title {
      margin-bottom: 40px;
    }

    .info-box {
      flex-direction: column;
      .label {
        width: 90px;
        margin-bottom: 12px;
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

  @media screen and (max-width: 600px) {
    .content {
      padding-top: 30vh;
    }
    .hero-box {
      height: 30vh;
      .thumbnail {
        height: 100%;
      }
    }
  }
`;

export const ContentsFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 18px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  > div {
    width: 50%;
  }

  > div + div {
    margin-left: 30px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0;
    > div {
      width: 100%;
    }
    > div + div {
      margin: 0;
      margin-top: 24px;
    }
  }
`;
