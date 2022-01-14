import React, { useCallback, useState } from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../LoginModal/LoginModal';
import axios from 'axios';

function NavBar(props) {
  console.log('NavBar: isLogin?', props.isLogin);
  const [onModal, setOnModal] = useState(false);
  const gitHubProps = {
    href: 'https://github.com/thisyujeong',
    target: '_blank',
  };

  const onClickLogin = useCallback(() => {
    setOnModal(true);
  }, []);
  const onModalHandler = useCallback((a) => {
    setOnModal(a);
  }, []);

  const onClickLogout = (e) => {
    e.preventDefault();
    axios.get(`api/users/logout`).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        props.history.push('/login');
      } else {
        alert('Failed to sign out.');
      }
    });
  };

  const AuthOption = () => {
    return props.isLogin ? (
      <>
        <li>
          <FontAwesomeIcon icon={faUserCog} />
          <span className={styles.tooltip}>어드민</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className={styles.tooltip} onClick={onClickLogout}>
            로그아웃
          </span>
        </li>
      </>
    ) : (
      <li>
        <FontAwesomeIcon icon={faSignInAlt} onClick={onClickLogin} />
        <span className={styles.tooltip}>로그인</span>
      </li>
    );
  };

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
      {onModal && <LoginModal onModalHandler={onModalHandler} />}
    </>
  );
}

export default React.memo(NavBar);
