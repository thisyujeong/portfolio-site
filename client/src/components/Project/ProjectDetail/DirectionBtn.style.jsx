import styled from 'styled-components';

export const DirBtnContainer = styled.div`
  .dir-btn {
    display: flex;
    cursor: pointer;
    .dir-title {
      position: relative;
      color: ${(props) => props.theme.subTextColor};
      font-size: 24px;
      &:before {
        position: absolute;
        top: 50%;
        width: 14px;
        height: 14px;
        border-left: 2px solid ${(props) => props.theme.subTextColor};
        border-bottom: 2px solid ${(props) => props.theme.subTextColor};
        content: '';
      }
    }
    &.prev {
      padding-left: 70px;
      text-align: left;
      .dir-title {
        &:before {
          left: -40px;
          transform: translateY(-50%) rotate(45deg);
        }
      }
    }
    &.next {
      padding-right: 70px;
      text-align: right;
      flex-direction: row-reverse;
      .dir-title {
        &:before {
          right: -40px;
          transform: translateY(-50%) rotate(225deg);
        }
      }
    }
  }
`;
