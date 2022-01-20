import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import LoginModal from '../LoginModal/LoginModal';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../_actions/user_action';
import styles from './NavBar.module.scss';

function NavBar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const [onModal, setOnModal] = useState(false);

  const gitHubProps = {
    href: 'https://github.com/thisyujeong',
    target: '_blank',
  };

  useEffect(() => {
    dispatch(auth()).then((response) => {
      if (response.payload.isAuth) {
        console.log(`isAuth: ${response.payload.isAuth}`);
        setIsLogin(true);
      } else {
        console.log(`You're not logged in.`);
        setIsLogin(false);
      }
    });
  }, [dispatch]);

  const onClickLogin = useCallback(() => {
    setOnModal(true);
  }, []);
  const onModalHandler = useCallback((a) => {
    setOnModal(a);
  }, []);
  const onLoginHandler = useCallback((a) => {
    setIsLogin(a);
  }, []);
  const onClickLogout = useCallback(
    (e) => {
      e.preventDefault();
      axios.get(`api/users/logout`).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          history.push('/');
          setIsLogin(false);
        } else {
          alert('Failed to sign out.');
        }
      });
    },
    [history]
  );

  const AuthOption = useCallback(() => {
    return isLogin ? (
      <>
        <li>
          <Link to="/admin">
            <FontAwesomeIcon icon={faUserCog} />
          </Link>
          <span className={styles.tooltip}>어드민</span>
        </li>
        <li onClick={onClickLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className={styles.tooltip}>로그아웃</span>
        </li>
      </>
    ) : (
      <li onClick={onClickLogin}>
        <FontAwesomeIcon icon={faSignInAlt} />
        <span className={styles.tooltip}>로그인</span>
      </li>
    );
  }, [isLogin, onClickLogin, onClickLogout]);

  return (
    <>
      <header className={styles.header}>
        <nav>
          <h1>
            <Link to="/">THISYUJEONG</Link>
          </h1>
          <ul>
            <li>
              <a {...gitHubProps}>Gh.</a>
              <span className={styles.tooltip}>깃허브</span>
            </li>
            <AuthOption />
          </ul>
        </nav>
      </header>
      {onModal && (
        <LoginModal onLoginHandler={onLoginHandler} onModalHandler={onModalHandler} />
      )}
    </>
  );
}

export default React.memo(NavBar);
