import React from "react";
import styles from "./Channels.module.css";
import img1 from "./channelImages/bacila.jpg";
import img2 from "./channelImages/honney.jpg";
import img3 from "./channelImages/ulbi.jpg";
import img4 from "./channelImages/itproger.jpg";
import img5 from "./channelImages/nazarov.jpg";

function Channels(props) {
  return (
    <div className={styles.block__wrapper}>
      <div className={styles.block}>
        <img src={img1} alt=""></img>
        Кошачья бацыла
      </div>
      <div className={styles.block}>
        <img src={img2} alt=""></img>
        Ханни Монтана
      </div>
      <div className={styles.block}>
        <img src={img3} alt=""></img>
        Ульби Тв
      </div>
      <div className={styles.block}>
        <img src={img4} alt=""></img>
        Айти Прогер
      </div>
      <div className={styles.block}>
        <img src={img5} alt=""></img>
        Антон Назаров
      </div>
    </div>
  );
}

export default Channels;
