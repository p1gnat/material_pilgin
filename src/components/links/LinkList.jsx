import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../links/LinkList.module.css";

function LinkList() {
  const [backColor, setBackColor] = useState("#282a2e");
  const [borderC, setBorderC] = useState("3px solid");

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Link
          to="/main"
          className={styles.link}
          style={{ borderColor: "green" }}
        >
          Главная
        </Link>
        <Link
          to="/video"
          className={styles.linkSmall}
          style={{ borderColor: "orange" }}
        >
          Видео
        </Link>
        <Link
          to="/texts"
          className={styles.linkSmall}
          style={{ borderColor: "yellow" }}
        >
          Тексты
        </Link>
        <Link
          to="/books"
          className={styles.linkSmall}
          style={{ borderColor: "purple" }}
        >
          Книги
        </Link>
        <Link
          to="/other"
          className={styles.linkSmall}
          style={{ borderColor: "red" }}
        >
          ОффТоп
        </Link>
      </div>
    </div>
  );
}

export default LinkList;
