import TextBlock from "../components/block/TextBlock";
import Navbar from "../components/navbar/Navbar";
import styles from "./Main.module.css";
import banan from "./MainImages/banan.png";

import React from "react";

function Main() {
  return (
    <div className={styles.main}>
      <h1 style={{ marginBottom: "50px" }}>
        Место Хранения Материалов для обучения
      </h1>
      <img src={banan} alt="banana" className={styles.img}></img>
      <TextBlock>
        Этот проект служит неким "Складом" для хранения всей информации которая
        была использована мной с моими отзывами о ней , через этот сайт можно
        посмотреть историю того как я учился , и если мне будет не лень
        продолжать проект - всю мою историю как программиста до какого-то
        достижения ))
      </TextBlock>
    </div>
  );
}

export default Main;
