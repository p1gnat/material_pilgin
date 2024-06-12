import MainNavigation from "../components/mainMiniNavigation/MainNavigation";
import MainText from "../components/mainMiniText/MainText";
import styles from "./Main.module.css";
import React from "react";

function Main() {
  return (
    <div className={styles.main}>
      <MainText />
      <MainNavigation />
    </div>
  );
}

export default Main;
