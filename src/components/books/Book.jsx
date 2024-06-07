import React from "react";
import img1 from "./BookImages/book1.png";
import img2 from "./BookImages/js_book_2.png";
import img3 from "./BookImages/js_book_3.png";
import img4 from "./BookImages/js_plan_1.png";
import styles from "./Book.module.css";

function Books({ img_num, children }) {
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
    default:
      imager = null;
  }

  return (
    <div className={styles.main}>
      <div className={styles.wrapp}>
        <img src={imager} alt="" className={styles.img}></img>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
}

export default Books;
