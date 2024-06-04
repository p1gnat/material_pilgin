import React from "react";
import styles from "./Channels.module.css";
import img1 from "./channelImages/bacila.jpg";
import img2 from "./channelImages/honney.jpg";
import img3 from "./channelImages/ulbi.jpg";
import img4 from "./channelImages/itproger.jpg";
import img5 from "./channelImages/nazarov.jpg";
import { Link } from "react-router-dom";

function Channels() {
  return (
    <div className={styles.block__wrapper}>
      <div className={styles.block}>
        <Link
          to={"https://www.youtube.com/@koshachiya_batsyla"}
          target="_blank"
        >
          <img src={img1} alt=""></img>
        </Link>
        Кошачья бацыла
      </div>
      <div className={styles.block}>
        <Link to={"https://www.youtube.com/@honeymontana"} target="_blank">
          <img src={img2} alt=""></img>
        </Link>
        Ханни Монтана
      </div>
      <div className={styles.block}>
        <Link to={"https://www.youtube.com/@UlbiTV"} target="_blank">
          <img src={img3} alt=""></img>
        </Link>
        Ульби Тв
      </div>
      <div className={styles.block}>
        <Link to={"https://www.youtube.com/@itproger"} target="_blank">
          <img src={img4} alt=""></img>
        </Link>
        Айти Прогер
      </div>
      <div className={styles.block} style={{ marginBottom: "100px" }}>
        <Link to={"https://www.youtube.com/@m0rtymerr"} target="_blank">
          <img src={img5} alt=""></img>
        </Link>
        Антон Назаров
      </div>
    </div>
  );
}

export default Channels;
