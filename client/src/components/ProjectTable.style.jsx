import styled from 'styled-components';

export const TableContainer = styled.div`
  .ant-table-thead > tr > th {
    color: ${(props) => props.theme.textColor};
    border-color: ${(props) => props.theme.tableBorderColor};
    background-color: ${(props) => props.theme.tableHeadBg};
    transition: none;
    &:before {
      background-color: ${(props) => props.theme.tableBorderColor} !important;
    }
  }
  .ant-table-tbody > tr:hover td {
    background-color: ${(props) => props.theme.tableBodyBg};
  }
  .ant-table-tbody > tr > td {
    padding: 10px 16px;
    position: relative;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.tableBodyBg};
    border-color: ${(props) => props.theme.tableBorderColor};
    transition: none;
    &:first-child {
      .unlock {
        color: ${(props) => props.theme.tableLockColor};
      }
      .lock {
        color: #2fce7e;
      }
    }
  }
  .ant-btn + .ant-btn {
    position: relative;
  }
  .ant-btn {
    &.edit-btn {
      color: #5360dd;
      margin-right: 10px;
    }
    &.delete-btn {
      color: #dd5353;
    }
    &.edit-btn,
    &.delete-btn {
      font-weight: bold;
      text-transform: uppercase;
      &:hover {
        background: rgba(0, 0, 0, 0.04);
        span {
          text-decoration: underline;
        }
      }
    }
  }

  .add {
    display: block;
    width: 140px;
    height: 38px;
    margin-left: auto;
    margin-bottom: 24px;
    color: #171717;
    font-size: 14px;
    border: 0;
    border-radius: 4px;
    background-color: #efefef;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #4acb8a;
      color: ${(props) => props.theme.bgColor};
    }
    &:after {
      content: none;
    }
  }

  .ant-pagination {
    margin-top: 50px;
    &-item {
      a {
        color: #171717;
      }
      &:hover {
        border-color: #171717;
      }
    }
    &-item-active {
      border-color: #d9d9d9;
      background-color: #efefef;
      a {
        color: #171717;
      }
    }
  }
`;
