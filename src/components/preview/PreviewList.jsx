import React from "react";
import { data } from "./PreviewData.jsx";
import styles from "./Preview.module.css";
import { Link } from "react-router-dom";

function PreviewList() {
  return (
    <>
      {data.map((data) => {
        return (
          <div className={styles.prev} key={data.id}>
            <div className={styles.prev__text}>{data.text}</div>
            <Link to={data.link} target="_blank">
              <img src={data.img} alt="" className={styles.prev__img} />
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default PreviewList;
