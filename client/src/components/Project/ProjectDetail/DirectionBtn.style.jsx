import styled from 'styled-components';

export const DirBtnContainer = styled.div`
  .dir-btn {
    min-height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.directionColor};
    cursor: pointer;

    .dir-title {
      position: relative;
      color: ${(props) => props.theme.textColor};
      font-size: 24px;
    }
    &:before {
      position: absolute;
      top: 50%;
      width: 14px;
      height: 14px;
      border-left: 2px solid ${(props) => props.theme.textColor};
      border-bottom: 2px solid ${(props) => props.theme.textColor};
      content: '';
    }

    .desc {
      width: 90%;
      font-size: 14px;
      margin-top: 12px;
      color: ${(props) => props.theme.subTextColor};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &.prev {
      padding-left: 60px;
      text-align: left;
      align-items: flex-start;
      &:before {
        left: 25px;
        transform: translateY(-50%) rotate(45deg);
      }
    }
    &.next {
      padding-right: 60px;
      text-align: right;
      align-items: flex-end;
      &:before {
        right: 25px;
        transform: translateY(-50%) rotate(225deg);
      }
      .desc {
        text-align: right;
        margin-left: auto;
      }
    }

    &:not(.not-allow):hover {
      background-color: ${(props) => props.theme.directionHoverColor};
      .dir-title {
        color: #096dd9;
      }
      &:before {
        border-color: #096dd9;
      }
      .desc {
        color: ${(props) => props.theme.textColor};
      }
    }

    &.not-allow {
      cursor: not-allowed;
      .dir-title {
        color: ${(props) => props.theme.disabledTextColor};
      }
      &:before {
        border-left: 2px solid ${(props) => props.theme.disabledTextColor};
        border-bottom: 2px solid ${(props) => props.theme.disabledTextColor};
      }
    }
  }
`;
