import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import BookNavigation from "./BookNavigation.jsx";

function MainNavigation() {
  return (
    <>
      <h1 className={styles.navbar__text}>Навигация 2.0</h1>
      <div className={styles.navbar__main}>
        <ul className={styles.navbar}>
          <li className={styles.li_1}>
            <Link
              to="/video"
              className={styles.link}
              style={{ color: "orange" }}
            >
              Видео
            </Link>
          </li>

          <li className={styles.li_2}>
            <Link
              to="/texts"
              className={styles.link}
              style={{ color: "var(--navbar-color)" }}
            >
              Тексты
            </Link>
          </li>

          <li className={styles.li_3}>
            <Link
              to="/books"
              className={styles.link}
              style={{ color: "purple" }}
            >
              Книги
            </Link>
            <BookNavigation />
          </li>

          <li className={styles.li_4}>
            <Link to="/other" className={styles.link} style={{ color: "red" }}>
              Оффтоп
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainNavigation;
