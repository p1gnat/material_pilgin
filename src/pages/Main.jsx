import TextBlock from "../components/navbar/block/TextBlock";
import styles from "./Main.module.css";
import banan from "./MainImages/banan.png";

import React from "react";

function Main() {
  return (
    <div className={styles.main}>
      <h1>Место Хранения Материалов для обучения</h1>
      <img src={banan} alt="banana" className={styles.img}></img>
      <TextBlock>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aspernatur
        nesciunt consectetur voluptates laboriosam repudiandae, debitis placeat
        impedit sequi hic neque deleniti expedita blanditiis quis voluptas
        corrupti quaerat vero dolorum?
      </TextBlock>
    </div>
  );
}

export default Main;
