import React from "react";
import styles from "./Text.module.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Text() {
  const [text, setText] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/texts").then((texts) => {
      const textsData = texts.data.data;
      setText(textsData);
    });
  }, []);

  return (
    <>
      {text.map((elem) => {
        return (
          <div className={styles.main} key={elem.id}>
            <div className={styles.wrapper}>
              <Link to={elem.attributes.link} target="_blank">
                <img
                  src={elem.attributes.imgLink}
                  alt="imgr"
                  className={styles.img}
                ></img>
              </Link>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: elem.attributes.text }}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Text;
