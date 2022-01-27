import styled from 'styled-components';

export const ProjectFormContainer = styled.div`
  .ant-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .half {
      width: calc(50% - 15px);
    }
    label {
      font-size: 16px;
    }
  }
  .ant-form-item {
    margin-bottom: 32px;
    width: 100%;
    &.ant-form-item-has-error {
      .ant-input,
      .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input)
        .ant-select-selector {
        border-color: #d9d9d9 !important;
        background: #f7f7f7;
      }
    }
    .ant-form-item-label {
      width: 120px;
      text-align: left;
      font-weight: 500;
      line-height: 40px;
      label:before,
      label:after {
        content: none;
      }
    }
    .ant-form-item-explain {
      display: none;
    }
    .ant-input,
    .ant-select-selector,
    .ant-form-item-control-input {
      min-height: 40px;
      font-size: 16px;
    }
    .ant-select-selection-item,
    .ant-select-selection-placeholder {
      line-height: 40px;
    }

    &:not(.ant-select-disabled) {
      input.ant-input:hover,
      input.ant-input:focus,
      textarea.ant-input:hover,
      textarea.ant-input:focus,
      .ant-select-selector:hover,
      .ant-select-selector:focus,
      .ant-select-focused .ant-select-selector {
        border-color: #17171760;
        box-shadow: 0 0 0 2px rgb(233 233 233 / 60%);
      }
    }
    textarea.ant-input {
      padding: 10px 11px;
    }
    .ant-checkbox + span {
      color: #828491;
    }
    .ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: #171717;
        border-color: #171717;
      }
      &:after {
        animation: none;
        border-color: #171717;
      }
      & + span {
        color: #171717;
      }
    }

    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: #17171760;
      box-shadow: 0 0 0 2px rgb(233 233 233 / 60%);
    }
    .thumb-input {
      display: none;
    }
    .upload-btn {
      display: inline-block;
      width: 110px;
      height: 32px;
      color: #5360dd;
      font-size: 14px;
      text-align: center;
      line-height: 32px;
      border: 1px solid #d9d9d9;
      transition: none;
      background-color: #fff;
      cursor: pointer;
      .anticon {
        margin-right: 8px;
      }
      &:hover {
        border-color: #5360dd;
      }
      &:active {
        color: #fff;
        background-color: #5360dd;
      }
      &:focus {
        color: #171717;
        border-color: #d9d9d9;
      }
      &:after {
        content: none;
      }
    }
    .file-name {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: #828491;
    }
  }
  .form-footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .ant-btn {
      display: block;
      width: 200px;
      height: 48px;
      color: #828491;
      margin-top: 50px;
      margin-left: 32px;
      background-color: #f7f7f7;
      border-color: #d9d9d9;
      transition: 0.2s;
      &:focus {
        background-color: #f7f7f7;
        border-color: #d9d9d9;
      }
      &:hover {
        background-color: #ebebeb;
        color: #171717;
      }
      &:after {
        content: none;
      }
      &-primary {
        color: #fff;
        background-color: #171717;
        &:focus {
          color: #fff;
          background-color: #171717;
        }
        &:hover {
          color: #fff;
          background-color: #2e2f36;
        }
      }
    }
  }
`;
