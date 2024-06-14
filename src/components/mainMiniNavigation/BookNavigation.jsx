import React from "react";
import styles from "./BookNavigation.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function BookNavigation() {
  const [books, setBooks] = useState([]);
  axios.get("http://localhost:1337/api/books").then((response) => {
    const bookData = response.data.data;
    setBooks(bookData);
  });

  return (
    <ul style={{ listStyleType: "none" }}>
      {books.map((book) => {
        return (
          <li className={styles.elem} key={book.id}>
            <Link to={`/books/${book.id}`} className={styles.link}>
              {book.attributes.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default BookNavigation;
