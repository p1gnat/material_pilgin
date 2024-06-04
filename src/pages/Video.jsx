import React from "react";
import styles from "./Video.module.css";
import Channels from "../components/channels/Channels";
import PreviewList from "../components/preview/PreviewList";

function Video() {
  return (
    <>
      <div className={styles.all__in__all}>
        <div className={styles.main}>
          <div className={styles.texts}>
            Видео - очень лёгкий и прятный способ восприятия информации - <br />
            Список каналов, которые я смотрю и советую
          </div>
        </div>
        <Channels />
        <PreviewList />
      </div>
    </>
  );
}

export default Video;
