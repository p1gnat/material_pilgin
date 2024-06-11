import React from "react";
import styles from "./OffComponent.module.css";
import { data } from "./OtherData";

function OffComponent(props) {
  return (
    <div>
      {data.map((elem) => {
        return (
          <div className={styles.main}>
            <div className={styles.text}>{elem.text}</div>
            <img src={elem.img} alt="" className={styles.img}></img>
          </div>
        );
      })}
    </div>
  );
}

export default OffComponent;
