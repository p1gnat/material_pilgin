import React from "react";
import { read, process, plans } from "./dataBooks";
import { useParams, Link } from "react-router-dom";
import styles from "./InnerBook.module.css";

function InnerBook(props) {
  const books = [...read, ...process, ...plans];
  const params = useParams();
  const book = books.find((book) => book.id === params.id);
  return (
    <div className={styles.main}>
      <img src={book.imgUrl} alt="" className={styles.img}></img>
      <Link to={book.url} target="_blank">
        <button className={styles.button}>Скачать</button>
      </Link>
      <div className={styles.text}>
        Книга взята из свободных источников и представлена исключительно для
        ознакомления. Содержание книги является интеллектуальной собственностью
        автора и выражает его взгляды. После ознакомления настаиваем на
        приобретении официального издания!
      </div>
    </div>
  );
}

export default InnerBook;
