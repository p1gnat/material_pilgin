import React from "react";
import styles from "./Preview.module.css";
import img1 from "./previewImages/bacila_tn.jpg";
import img2 from "./previewImages/honey_tn.jpg";
import img3 from "./previewImages/ulbi_tn.jpg";
import img4 from "./previewImages/itproger_tn.jpg";
import img5 from "./previewImages/anton_tn.jpg";
import { Link } from "react-router-dom";

function Preview({ img_num, link, children }) {
  let imager = null;
  switch (img_num) {
    case 1:
      imager = img1;
      break;
    case 2:
      imager = img2;
      break;
    case 3:
      imager = img3;
      break;
    case 4:
      imager = img4;
      break;
    case 5:
      imager = img5;
      break;
    default:
      imager = null;
  }
  return (
    <div className={styles.prev}>
      <div className={styles.prev__text}>{children}</div>
      <Link to={link} target="_blank">
        <img src={imager} alt="" className={styles.prev__img} />
      </Link>
    </div>
  );
}

export default Preview;
