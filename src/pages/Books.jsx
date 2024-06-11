import React from "react";
import Book from "../components/books/Book";
import HelpText from "../components/books/HelpText";
import { read, process, plans } from "../components/hardBook/dataBooks";

function Books(props) {
  return (
    <>
      <HelpText> Уже Прочитал </HelpText>
      {read.map((book) => {
        return (
          <Book imgUrl={book.imgUrl} key={book.id} id={book.id}>
            {book.text}
          </Book>
        );
      })}
      <HelpText> Читаю </HelpText>
      {process.map((book) => {
        return (
          <Book imgUrl={book.imgUrl} key={book.id} id={book.id}>
            {book.text}
          </Book>
        );
      })}
      <HelpText>Планирую Прочитать</HelpText>
      {plans.map((book) => {
        return (
          <Book imgUrl={book.imgUrl} key={book.id} id={book.id}>
            {book.text}
          </Book>
        );
      })}
    </>
  );
}

export default Books;
