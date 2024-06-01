import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

function Timer() {
  const [timer, setTimer] = useState(() => {
    if (sessionStorage.getItem("timer") !== null) {
      let savedTimer = sessionStorage.getItem("timer");
      console.log(savedTimer);
      savedTimer = parseInt(savedTimer);
      console.log(savedTimer);
      return savedTimer;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer + 1;
        sessionStorage.setItem("timer", newTimer);
        return newTimer;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.main__timer}>Не забывай про время: {timer} сек</div>
  );
}

export default Timer;
