import styled from 'styled-components';

export const ContentsContainer = styled.div`
  .back {
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.backColor};
    background-color: ${(props) => props.theme.backBgColor};
    border: 0;
    margin-bottom: 50px;

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
      font-size: 18px;
      display: inline-block;
      color: #4eff25;
      font-weight: 900;
      width: 120px;
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
      color: #4eff25;
      font-weight: 900;
      &:after {
        position: absolute;
        top: 50%;
        right: 0;
        height: 1px;
        width: calc(100% - 75px);
        background: ${(props) => props.theme.borderColor};
        content: '';
      }
    }
  }
`;
