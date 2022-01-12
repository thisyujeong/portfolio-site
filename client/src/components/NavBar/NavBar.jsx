import React from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';

function NavBar(props) {
  const gitHubProps = {
    href: 'https://github.com/thisyujeong',
    target: '_blank',
  };
  return (
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
          <li>
            <FontAwesomeIcon icon={faUserCog} />
            <span className={styles.tooltip}>어드민</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className={styles.tooltip}>로그아웃</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faSignInAlt} />
            <span className={styles.tooltip}>로그인</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
