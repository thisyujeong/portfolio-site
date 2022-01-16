import React from 'react';
import AdminHeader from '../../../components/Admin/AdminHeader';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const StyledForm = styled.div`
  .ant-btn {
    display: block;
    width: 200px;
    height: 48px;
    color: #fff;
    margin-left: auto;
    background-color: #171717;
    border: 0;
    &:hover {
      background-color: #2e2f36;
    }
  }
`;

function Write(props) {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onSubmitHandler = (e) => {};
  return (
    <>
      <AdminHeader title="프로젝트 작성" desc="프로젝트를 작성하여 추가할 수 있습니다." />
      <StyledForm>
        <Form
          onFinish={onSubmitHandler}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Button htmlType="submit">프로젝트 등록</Button>
        </Form>
      </StyledForm>
    </>
  );
}

export default React.memo(Write);
