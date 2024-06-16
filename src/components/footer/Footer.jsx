import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import tele from "./tele.svg";

const Footer = ({ onClickLight, onClickDark }) => {
  return (
    <div className={styles.main}>
      <div className={styles.foot}>
        <Link to={"https://t.me/pig_nat"} target="_blank">
          <img src={tele} alt="" className={styles.imga}></img>
        </Link>
        <div className={styles.button_wrapper}>
          <button onClick={onClickLight} className={styles.light}>
            Свет
          </button>
          <button onClick={onClickDark} className={styles.dark}>
            Темнота
          </button>
        </div>
        <Link
          to={"https://github.com/p1gnat/material_pilgin"}
          className={styles.link}
          target="_blank"
          style={{ color: "var(--color)" }}
        >
          github
        </Link>
      </div>
    </div>
  );
};

export default Footer;
