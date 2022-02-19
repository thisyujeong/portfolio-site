import styled from 'styled-components';

export const StackListContainer = styled.div`
  .title {
    font-size: 50px;
    font-weight: bold;
  }

  .stack-box {
    padding: 24px 0;
    display: flex;
    border-top: 1px solid ${(props) => props.theme.borderColor};
    margin-top: 12px;
    .label {
      font-size: 28px;
      width: 35%;
    }
    ul {
      width: 65%;
      margin-left: 24px;
    }

    li {
      display: flex;
      align-items: flex-start;
      padding-right: 50px;
      margin-bottom: 24px;
      .stack {
        width: 40%;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        .logo {
          width: 30px;
          height: 30px;
          margin-right: 12px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
      .desc {
        width: 60%;
        line-height: 1.57;
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .stack-box {
      flex-direction: column;

      ul {
        width: 100%;
        margin-left: 0;
        li {
          padding: 0;
          margin-top: 30px;
          flex-direction: column;

          .stack {
            margin-bottom: 12px;
            width: 100%;
          }
          .desc {
            width: 100%;
          }
        }
      }
    }
  }
`;
