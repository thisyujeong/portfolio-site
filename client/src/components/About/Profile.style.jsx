import styled from 'styled-components';

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 160px;
  .title {
    font-size: 60px;
    font-weight: bold;
    width: 35%;
    span {
      display: block;
      text-decoration: underline;
    }
  }
  .info {
    width: 65%;
    font-size: 18px;
    line-height: 1.57;
    margin-left: 24px;

    .introduce {
      margin-top: 12px;
      padding-right: 50px;
      padding-bottom: 30px;
      border-bottom: 1px solid ${(props) => props.theme.borderColor};
    }
    .etc {
      display: flex;
      .label {
        margin-top: 30px;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: bold;
      }
      .contact {
        width: 50%;
        p {
          font-size: 28px;
          margin: 12px 0;
        }

        .personal {
          color: ${(props) => props.theme.subTextColor};
        }
      }
      .links {
        width: 50%;
        padding-left: 20px;
        li a {
          display: inline-block;
          width: 250px;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          background-color: ${(props) => props.theme.textColor};
          color: ${(props) => props.theme.bgColor};
          text-align: center;
          border-radius: 4px;
          &:hover {
            background-color: #096dd9;
            color: #fff;
          }
        }
        li + li {
          margin-top: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
    flex-direction: column;
    .info {
      margin: 0;
      margin-top: 30px;
      width: 100%;
      .introduce {
        padding-right: 0;
      }
      .etc {
        flex-direction: column;
        .contact {
          width: 100%;
        }

        .links {
          padding-left: 0;
          width: 100%;
          li a {
            width: 100%;
            line-height: 46px;
            height: 46px;
          }
        }
      }
    }
  }
`;
