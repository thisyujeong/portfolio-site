import React, { useState } from 'react';
import AdminHeader from '../../../components/Admin/AdminHeader';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import styled from 'styled-components';
import WriteEditor from '../../../components/Admin/WriteEditor';

const { Option } = Select;
const { TextArea } = Input;

const StyledForm = styled.div`
  .ant-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .half {
      width: calc(50% - 15px);
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
    .ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: #171717;
        border-color: #171717;
      }
      &:after {
        animation: none;
        border-color: #171717;
      }
    }

    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: #17171760;
      box-shadow: 0 0 0 2px rgb(233 233 233 / 60%);
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
      &:hover,
      &:focus {
        background-color: #ebebeb;
        color: #171717;
      }
      &:after {
        content: none;
      }
      &-primary {
        color: #fff;
        background-color: #171717;
        &:hover,
        &:focus {
          color: #fff;
          background-color: #2e2f36;
        }
      }
    }
  }
`;

function Write(props) {
  const [editorHtml, setEditorHtml] = useState('');
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onChangeCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onSubmitHandler = (e) => {};
  const onChangeType = (value) => {};
  const getEditorHtml = (html) => {
    setEditorHtml(html);
  };
  return (
    <>
      <AdminHeader title="프로젝트 작성" desc="프로젝트를 작성하여 추가할 수 있습니다." />
      <StyledForm>
        <Form
          onFinish={onSubmitHandler}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="프로젝트 명"
            name="name"
            rules={[{ required: true }]}
            className="half"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="프로젝트 타입"
            name="type"
            rules={[{ required: true }]}
            className="half"
          >
            <Select placeholder="프로젝트 타입" onChange={onChangeType} allowClear>
              <Option value="personal">Personal</Option>
              <Option value="team">Team</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="프로젝트 소개"
            name="info"
            rules={[{ required: true }]}
            className="half"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="사용 기술"
            name="tech"
            rules={[{ required: true }]}
            className="half"
          >
            <Input placeholder="HTML, CSS, JavaScript" />
          </Form.Item>
          <Form.Item
            label="깃허브 URL"
            name="github"
            rules={[{ required: true }]}
            className="half"
          >
            <Input placeholder="https://github.com/" />
          </Form.Item>
          <Form.Item
            label="사이트 URL"
            name="site"
            rules={[{ required: true }]}
            className="half"
          >
            <Input placeholder="https://github.com/" />
          </Form.Item>
          <Form.Item
            label="참여 인원"
            name="member"
            rules={[{ required: true }]}
            className="half"
          >
            <Select placeholder="참여 인원" onChange={onChangeType} allowClear>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="작업 기간"
            name="due"
            rules={[{ required: true }]}
            className="half"
          >
            <Input placeholder="2022/01 - 2022/02" />
          </Form.Item>
          <Form.Item
            label="업무 범위"
            name="role"
            rules={[{ required: true }]}
            className="half"
          >
            <Input placeholder="기획 30% / 프론트엔드 50%" />
          </Form.Item>
          <Form.Item
            label="공개 여부"
            name="lock"
            className="half"
            valuePropName="checked"
          >
            <Checkbox onChange={onChangeCheck}>비공개 설정</Checkbox>
          </Form.Item>
          <Form.Item label="프로젝트 설명" name="desc" rules={[{ required: true }]}>
            <TextArea
              placeholder="프로젝트 설명을 입력하세요."
              autoSize={{ minRows: 4, maxRows: 6 }}
            />
          </Form.Item>

          <WriteEditor getEditorHtml={getEditorHtml} />

          <div className="form-footer">
            <Button>나가기</Button>
            <Button type="primary" htmlType="submit">
              프로젝트 등록
            </Button>
          </div>
        </Form>
      </StyledForm>
    </>
  );
}

export default React.memo(Write);
