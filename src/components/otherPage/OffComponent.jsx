import React from "react";
import styles from "./OffComponent.module.css";
import { data } from "./OtherData";
import { Link } from "react-router-dom";

function OffComponent(props) {
  return (
    <div>
      {data.map((elem) => {
        return (
          <div className={styles.main} key={elem.id}>
            <div className={styles.text} key={elem.id}>
              {elem.text}
            </div>
            <Link to={elem.url} target="_blank">
              <img src={elem.img} alt="" className={styles.img}></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default OffComponent;
