import React from "react";
import styles from "./Preview.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function PreviewList() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/previews")
      .then((elem) => {
        const videoData = elem.data.data;
        setVideo(videoData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <>
      {video.map((data) => {
        return (
          <div className={styles.prev} key={data.id}>
            <div
              className={styles.prev__text}
              dangerouslySetInnerHTML={{ __html: data.attributes.text }}
            ></div>
            <Link to={data.attributes.Url} target="_blank">
              <img
                src={data.attributes.imageUrl}
                alt=""
                className={styles.prev__img}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default PreviewList;
