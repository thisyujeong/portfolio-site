import React from 'react';
import styles from './LoginModal.module.scss';
import { Form, Input, Button } from 'antd';

function LoginModal(props) {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalInner}>
        <h3>로그인</h3>
        <button className={styles.close}></button>
        <Form>
          <Form.Item label="Email" name="email">
            <Input className={styles.inputEmail} />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password className={styles.inputPassword} />
          </Form.Item>
          <Form.Item style={{ margin: 0 }}>
            <Button htmlType="submit" className={styles.loginBtn}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginModal;
