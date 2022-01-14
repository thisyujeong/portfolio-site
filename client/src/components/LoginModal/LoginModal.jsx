import React, { useCallback, useState } from 'react';
import styles from './LoginModal.module.scss';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_action';
import { useHistory } from 'react-router-dom';

const StyledForm = styled.div`
  width: 100%;
  .ant-form {
    width: 100%;
  }

  .ant-form-item + .ant-form-item {
    margin-top: 30px;
  }
  .ant-form-item-label {
    display: inline-block;
    margin-bottom: 8px;
    label {
      font-family: 'Arial';
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
    }

    .ant-form-item-required:after {
      content: '*';
      color: #f33131;
      margin-left: 2px;
    }
  }
  .ant-form-item-control {
    position: relative;
  }
  .ant-form-item-explain {
    position: absolute;
    bottom: -22px;
    font-size: 14px;
    color: #9a9ca8;
    font-family: 'Arial';
  }
  .ant-input-affix-wrapper {
    position: relative;
    display: block;
  }
  .ant-input {
    width: 100%;
    height: 50px;
    padding: 6px 16px;
    border: 0;
    border-radius: 0;
    background-color: #f0f0f3;
    font-size: 16px;
    outline: 0;
  }
  .ant-input-suffix {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  .ant-btn {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    color: #f0f0f3;
    font-size: 16px;
    text-transform: uppercase;
    background-color: #171717;
    cursor: pointer;
    &:hover {
      background-color: #2e2f36;
    }
    span {
      font-family: 'Arial';
      font-weight: bold;
    }
  }
`;

function LoginModal({ onModalHandler, onLoginHandler }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onClickClose = useCallback(() => {
    onModalHandler(false);
  }, [onModalHandler]);

  const onEmailHandler = useCallback((e) => {
    setEmail(e.currentTarget.value);
  }, []);

  const onPasswordHandler = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);

  const onSubmitHandler = (e) => {
    let body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        history.push('/');
        onLoginHandler(true);
        onClickClose();
      } else {
        console.log('login fail...');
      }
    });
  };

  return (
    <>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClickClose}></button>
        <h3>로그인</h3>
        <StyledForm>
          <Form
            onFinish={onSubmitHandler}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email.' }]}
            >
              <Input
                className={styles.inputEmail}
                value={email}
                onChange={onEmailHandler}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password.' }]}
            >
              <Input.Password
                className={styles.inputPassword}
                value={password}
                onChange={onPasswordHandler}
              />
            </Form.Item>
            <Button htmlType="submit" className={styles.loginBtn}>
              Login
            </Button>
          </Form>
        </StyledForm>
      </div>
      <div className={styles.mask} onClick={onClickClose}></div>
    </>
  );
}

export default React.memo(LoginModal);
