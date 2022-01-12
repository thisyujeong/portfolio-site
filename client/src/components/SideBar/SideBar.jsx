import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
function SideBar(props) {
  return (
    <section className={styles.sidebar}>
      <ul>
        <li className={styles.active}>
          <Link to="/">사이트 버전 관리</Link>
        </li>
        <li>
          <Link to="/admin/posts">프로젝트 관리</Link>
        </li>
        <li>
          <Link to="/">프로젝트 작성</Link>
        </li>
      </ul>
      <div className={styles.logout}>
        <button>
          로그아웃
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </section>
  );
}

export default React.memo(SideBar);
