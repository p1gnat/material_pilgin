import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import gif1 from "./MainImages/catic.gif";
import gif2 from "./MainImages/catic_2.gif";

function MainNavigation(props) {
  return (
    <>
      <div className={styles.img_wrapper}>
        <img src={gif2} alt="banana" className={styles.img}></img>
        <h1 className={styles.navbar__text}>
          Для тех , кому не нравится навигация сверху -_-
        </h1>
        <img src={gif1} alt="banana" className={styles.img}></img>
      </div>
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
              style={{ color: "yellow" }}
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
