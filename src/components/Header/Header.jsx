import React from 'react'
import { useNavigate } from 'react-router';
import styles from './Header.module.css'

const Header = ({gitUserRepos, gitUser}) => {
  const naviate = useNavigate()

  const goBack = () => naviate(-1)
  return (
    <header className={styles.header}>
      <button className={styles.btn} onClick={goBack}>Go back</button>
      <h3 className={styles.title}>{gitUser.login}</h3>
    </header>
  );
}

export default Header