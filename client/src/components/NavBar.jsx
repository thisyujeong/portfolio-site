import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../_actions/user_action';
import { NavBarContainer } from './NavBar.style';
import ThemeToggle from './ThemeToggle';

function NavBar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user).userData.isAuth;
  const [login, setLogin] = useState();

  useEffect(() => {
    dispatch(auth()).then((response) => {
      if (response.payload.isAuth) {
        console.log(`isAuth: ${response.payload.isAuth}`);
        setLogin(isAuth);
      } else {
        console.log(`You're not logged in.`);
      }
    });
  }, [dispatch, isAuth]);

  const onClickLogout = useCallback(() => {
    axios.get(`/api/users/logout`).then((response) => {
      console.log('로그아웃', response.data.success);
      if (response.data.success) {
        setLogin(!isAuth);
        history.push('/');
      } else {
        alert('Failed to sign out.');
      }
    });
  }, [history, isAuth]);

  const AuthOption = useCallback(() => {
    return login ? (
      <ul className="auth">
        <li onClick={onClickLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </li>
        <li>
          <Link to="/admin/projects">
            <FontAwesomeIcon icon={faUserCog} />
          </Link>
        </li>
      </ul>
    ) : null;
  }, [login, onClickLogout]);

  return (
    <NavBarContainer>
      <header>
        <h1>
          <Link to="/">
            thisyujeong
            <div>© yujeong lee</div>
          </Link>
        </h1>
        <div className="keyword">
          <span>experience</span>
          <span>like</span>
          <span>continue</span>
        </div>
        <div className="nav-right">
          <Link to="/about" className="about">
            ABOUT ME
          </Link>
          <AuthOption />
          <ThemeToggle className="theme" />
        </div>
      </header>
    </NavBarContainer>
  );
}

export default React.memo(NavBar);
