import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ gitUserRepos }) => {
  return (
    <>
      {gitUserRepos.map((el) => (
        <div className={styles.Card}>
          <div className={styles.textBox}>
            <Link to={el.name} className={styles.title}>{el.name}</Link>
            <p className={styles.private}>
              {el.private ? "Private" : "Public"}
            </p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.language}>{el.language}</p>
            <p className={styles.watchers}>{el.watchers}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
