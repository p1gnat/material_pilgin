import React from "react";
import styles from "./Book.module.css";
import { Link } from "react-router-dom";

function Book({ imgUrl, children, id }) {
  // const router = useNavigate();
  // let imager = null;
  // switch (img_num) {
  //   case 1:
  //     imager = img1;
  //     break;
  //   case 2:
  //     imager = img2;
  //     break;
  //   case 3:
  //     imager = img3;
  //     break;
  //   case 4:
  //     imager = img4;
  //     break;
  //   default:
  //     imager = null;
  // }
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Link to={id}>
          <img src={imgUrl} alt="" className={styles.img}></img>
        </Link>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
}

export default Book;
