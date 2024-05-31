import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../links/LinkList.module.css";

function LinkList(props) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer + 1;
        localStorage.setItem("timer", newTimer);
        return newTimer;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      <Link
        to="/main"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "16px",
        }}
      >
        Главная
      </Link>
      <Link
        to="/video"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "5px",
          marginTop: "5px",
          fontSize: "10px",
        }}
      >
        Видео
      </Link>
      <Link
        to="/texts"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "5px",
          marginTop: "5px",
          fontSize: "10px",
        }}
      >
        Тексты
      </Link>
      <Link
        to="/books"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "5px",
          marginTop: "5px",
          fontSize: "10px",
        }}
      >
        Книги
      </Link>
      <Link
        to="/other"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "5px",
          marginTop: "5px",
          fontSize: "10px",
        }}
      >
        Офф-Топ
      </Link>
      <div className={styles.main__timer}>
        Не забывай про время: {timer} сек
      </div>
    </div>
  );
}

export default LinkList;
