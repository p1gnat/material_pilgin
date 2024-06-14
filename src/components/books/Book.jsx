import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Book.module.css";
import HelpText from "./HelpText";

function Book() {
  const [readBooks, setReadBooks] = useState([]);
  const [processBooks, setProcessBooks] = useState([]);
  const [plansBooks, setPlansBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/books")
      .then((response) => {
        const booksData = response.data.data;

        setReadBooks(
          booksData.filter((book) => book.attributes.type === "read")
        );
        setProcessBooks(
          booksData.filter((book) => book.attributes.type === "process")
        );
        setPlansBooks(
          booksData.filter((book) => book.attributes.type === "plans")
        );
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const renderBooks = (books) => {
    return books.map((book) => (
      <div key={book.id} className={styles.main}>
        <div className={styles.wrapper}>
          <Link to={`${book.id}`}>
            <img
              src={book.attributes.imageUrl}
              alt={book.attributes.name}
              className={styles.img}
            />
          </Link>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: book.attributes.text }}
          />
        </div>
      </div>
    ));
  };

  return (
    <>
      <HelpText>Читаю</HelpText>
      {renderBooks(readBooks)}
      <HelpText>В Процессе</HelpText>
      {renderBooks(processBooks)}
      <HelpText>В Планах</HelpText>
      {renderBooks(plansBooks)}
    </>
  );
}

export default Book;
