import React from "react";
import img1 from "./literally-me.jpg";
import styles from "./MainText.module.css";

function MainText(props) {
  return (
    <div>
      <h1
        style={{
          marginBottom: "50px",
          borderBottom: "4px solid green",
          textAlign: "center",
        }}
      >
        Место Хранения Материалов для обучения
      </h1>
      <div className={styles.main__wrapper}>
        <img src={img1} alt="banana" className={styles.img_main}></img>
        <div className={styles.text}>
          Этот проект служит неким "Складом" для хранения всей информации
          которая была использована мной с моими отзывами о ней , через этот
          сайт можно посмотреть историю того как я учился , и если мне будет не
          лень продолжать проект - всю мою историю как программиста до какого-то
          достижения ))
        </div>
      </div>
    </div>
  );
}

export default MainText;
