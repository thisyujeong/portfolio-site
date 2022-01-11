import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
function NavBar(props) {
  return (
    <header className={styles.header}>
      <nav>
        <h1>
          <Link to="/">THISYUJEONG</Link>
        </h1>
        <ul>
          <li>Admin</li>
          <li>Gh.</li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
