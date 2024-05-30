import { Link } from "react-router-dom";

function LinkList(props) {
  return (
    <div>
      <Link
        to="/main"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "16px",
        }}
      >
        Главная
      </Link>
      <Link
        to="/video"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "5px",
          fontSize: "10px",
        }}
      >
        Видео
      </Link>
      <Link
        to="/texts"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "5px",
          fontSize: "10px",
        }}
      >
        Тексты
      </Link>
      <Link
        to="/books"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "5px",
          fontSize: "10px",
        }}
      >
        Книги
      </Link>
      <Link
        to="/other"
        style={{
          textDecoration: "none",
          color: "white",
          marginRight: "5px",
          fontSize: "10px",
        }}
      >
        Офф-Топ
      </Link>
    </div>
  );
}

export default LinkList;
