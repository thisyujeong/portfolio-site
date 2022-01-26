import React, { useState } from 'react';
import { LoginFormContainer } from './LoginForm.style';
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action';
import { useHistory } from 'react-router-dom';
import { useTheme } from '../context/themeProvider';

function LoginForm(props) {
  const [ThemeMode] = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();

  const [value, setValue] = useState({ email: '', password: '' });
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      email: value.email,
      password: value.password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        history.push('/');
      } else {
        console.log('login fail...');
      }
    });
  };

  return (
    <LoginFormContainer mode={ThemeMode}>
      <h1>관리자 전용 로그인</h1>

      <form onSubmit={onSubmitHandler}>
        <label>
          <span className="label">Email</span>
          <input value={value.email} type="email" name="email" onChange={onChange} />
        </label>

        <label>
          <span className="label">Password</span>
          <input
            value={value.password}
            type="password"
            name="password"
            onChange={onChange}
          />
        </label>
        <button type="submit" className="submit">
          LOGIN
        </button>
      </form>
    </LoginFormContainer>
  );
}

export default LoginForm;
