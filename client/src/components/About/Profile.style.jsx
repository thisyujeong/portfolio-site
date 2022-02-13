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
          }
        }
        li + li {
          margin-top: 12px;
        }
      }
    }
  }
`;
