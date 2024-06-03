import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import tele from "./tele.svg";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.foot}>
        <Link to={"https://t.me/pig_nat"} target="_blank">
          <img src={tele} alt="" className={styles.imga}></img>
        </Link>
        <Link
          to={"https://github.com/p1gnat/material_pilgin"}
          className={styles.link}
          target="_blank"
        >
          github
        </Link>
      </div>
    </div>
  );
};

export default Footer;
