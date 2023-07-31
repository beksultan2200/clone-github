import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './Form.module.css'

const Form = ({ setGitUser, value, setValue }) => {
  const getGitUser = (e) => {
    e.preventDefault();
    axios(`https://api.github.com/users/${value}`).then(({ data }) => {
      setGitUser(data);
      console.log(data);
    });
  };

  //https://api.github.com/users/beksultan2200/repos

  const inputHandler = (e) => {
    setValue(e.target.value);
  };


  return (
    <form className={styles.form} onSubmit={getGitUser}>
      <label className={styles.label}>
        <input
        className={styles.input}
          type="text"
          placeholder="Find"
          value={value}
          onChange={inputHandler}
        />
        <button className={styles.btn} type="submit">
          <Link to={value}>
            Find
          </Link>
        </button>
      </label>
    </form>
  );
};

export default Form;
