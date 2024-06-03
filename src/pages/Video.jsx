import React from "react";
import styles from "./Video.module.css";
import Channels from "../components/channels/Channels";
import Preview from "../components/preview/Preview";

function Video() {
  return (
    <>
      <div className={styles.all__in__all}>
        <div className={styles.main}>
          <div className={styles.texts}>
            Видео - очень лёгкий и прятный способ восприятия информации <br />
            Список каналов, которые я смотрю и советую
          </div>
        </div>
        <Channels />
        <Preview
          img_num={1}
          link={"https://www.youtube.com/watch?v=vetTq5AbEHU"}
        >
          -------------------> Лучшим Видео от Бацылы я считаю разбор резюме
          фронтендера , гость невероятно стеснительный и из-за этого ему прям
          разжёвывали материал который вполне возможно поможет вам устроиться в
          айти ------------------->
        </Preview>
        <Preview
          img_num={2}
          link={"https://www.youtube.com/watch?v=b_oRXHDTHNo"}
        >
          -------------------> Лучшим Видео от Бацылы я считаю разбор резюме
          фронтендера , гость невероятно стеснительный и из-за этого ему прям
          разжёвывали материал который вполне возможно поможет вам устроиться в
          айти ------------------->
        </Preview>
        <Preview
          img_num={3}
          link={"https://youtu.be/GNrdg3PzpJQ?si=dbW5K5UQTpU_K6Lh"}
        >
          -------------------> Лучшим Видео от Бацылы я считаю разбор резюме
          фронтендера , гость невероятно стеснительный и из-за этого ему прям
          разжёвывали материал который вполне возможно поможет вам устроиться в
          айти ------------------->
        </Preview>
        <Preview
          img_num={4}
          link={
            "https://www.youtube.com/watch?v=tfn-59fbNMQ&list=PLDyJYA6aTY1lpbNh66kFpF62QpJyzliT2"
          }
        >
          -------------------> Лучшим Видео от Бацылы я считаю разбор резюме
          фронтендера , гость невероятно стеснительный и из-за этого ему прям
          разжёвывали материал который вполне возможно поможет вам устроиться в
          айти ------------------->
        </Preview>
        <Preview
          img_num={5}
          link={"https://youtu.be/i4MjGlOQZmQ?si=6zLJO8oFpwsy1HA_"}
        >
          -------------------> Лучшим Видео от Бацылы я считаю разбор резюме
          фронтендера , гость невероятно стеснительный и из-за этого ему прям
          разжёвывали материал который вполне возможно поможет вам устроиться в
          айти ------------------->
        </Preview>
      </div>
    </>
  );
}

export default Video;
