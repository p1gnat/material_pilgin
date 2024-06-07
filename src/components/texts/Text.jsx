import React from "react";
import styles from "./Text.module.css";
import { Link } from "react-router-dom";
import img1 from "./TextImages/doka.png";
import img2 from "./TextImages/learn.png";
import img3 from "./TextImages/rea.png";
import img4 from "./TextImages/chatgpt.jpg";

function Text({ img_num, children }) {
  let imager = null;
  let link = null;
  switch (img_num) {
    case 1:
      imager = img1;
      link = "https://doka.guide/";
      break;
    case 2:
      imager = img2;
      link = "https://learn.javascript.ru/";
      break;
    case 3:
      imager = img3;
      link = "https://reactdev.ru/";
      break;
    case 4:
      imager = img4;
      link = "https://chatgpt.com/";
      break;
    default:
      imager = null;
      break;
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <Link to={link} target="_blank">
            <img src={imager} alt="imgr" className={styles.img}></img>
          </Link>
          <div className={styles.text}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Text;
