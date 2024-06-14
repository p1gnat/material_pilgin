import React from "react";
import styles from "./OffComponent.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function OffComponent(props) {
  const [others, setOthers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/others").then((elem) => {
      const otherData = elem.data.data;
      setOthers(otherData);
    });
  }, []);

  return (
    <div>
      {others.map((eleme) => {
        return (
          <div className={styles.main} key={eleme.id}>
            <div
              className={styles.text}
              key={eleme.id}
              dangerouslySetInnerHTML={{ __html: eleme.attributes.text }}
            ></div>
            <Link to={eleme.attributes.url} target="_blank">
              <img
                src={eleme.attributes.imageUrl}
                alt=""
                className={styles.img}
              ></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default OffComponent;
