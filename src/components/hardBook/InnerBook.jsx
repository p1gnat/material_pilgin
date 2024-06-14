import { useParams, Link } from "react-router-dom";
import styles from "./InnerBook.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function InnerBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/books")
      .then((response) => {
        const bookData = response.data.data;
        setBooks(bookData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  const params = useParams();

  // console.log(book.id);
  return (
    <>
      {books.map((elem) => {
        if (parseInt(elem.id) === parseInt(params.id)) {
          return (
            <div key={elem.id} className={styles.main}>
              <img
                src={elem.attributes.imageUrl}
                alt=""
                className={styles.img}
              />
              <Link to={elem.attributes.url} target="_blank">
                <button className={styles.button}>Скачать</button>
              </Link>
              <div className={styles.text}>
                Книга взята из свободных источников и представлена исключительно
                для ознакомления. Содержание книги является интеллектуальной
                собственностью автора и выражает его взгляды. После ознакомления
                настаиваем на приобретении официального издания!
              </div>
            </div>
          );
        }
        return null; // обработка случая, когда не найдено соответствие по id
      })}
    </>
  );
}

export default InnerBook;
