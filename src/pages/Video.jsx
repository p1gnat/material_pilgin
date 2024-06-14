import React from "react";
import styles from "./Video.module.css";
import Channels from "../components/channels/Channels";
import PreviewList from "../components/preview/PreviewList";

function Video() {
  return (
    <>
      <div className={styles.all__in__all}>
        <PreviewList />
        <Channels />
        <div className={styles.main}>
          <div className={styles.texts}>
            Видео - очень лёгкий и прятный способ восприятия информации - <br />
            Список каналов, которые я смотрю и советую
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
