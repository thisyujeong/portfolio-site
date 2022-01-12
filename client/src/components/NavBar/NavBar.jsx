import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
function NavBar(props) {
  return (
    <header className={styles.header}>
      <nav>
        <h1>
          <Link to="/">THISYUJEONG</Link>
        </h1>
        <ul>
          <li>
            <Link to="https://github.com/thisyujeong">Gh.</Link>
            <span className={styles.tooltip}>깃허브</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserCog} />
            <span className={styles.tooltip}>어드민</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
