import React from "react";
import styles from "./Text.module.css";
import { Link } from "react-router-dom";
import { data } from "./TextData.jsx";

function Text() {
  return (
    <>
      {data.map((data) => {
        return (
          <div className={styles.main} key={data.id}>
            <div className={styles.wrapper}>
              <Link to={data.link} target="_blank">
                <img src={data.img} alt="imgr" className={styles.img}></img>
              </Link>
              <div className={styles.text}>{data.text}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Text;
