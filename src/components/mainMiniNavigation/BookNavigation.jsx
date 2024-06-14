import React from "react";
import styles from "./BookNavigation.module.css";
import { plans, process, read } from "../hardBook/dataBooks.jsx";
import { Link } from "react-router-dom";

function BookNavigation() {
  const data = [...plans, ...process, ...read];

  return (
    <ul style={{ listStyleType: "none" }}>
      {data.map((data) => {
        const linker = `/books/${data.id}`;
        return (
          <li className={styles.elem} key={data.id}>
            <Link to={linker} target="_blank" className={styles.link}>
              {data.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default BookNavigation;
