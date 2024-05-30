import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <navbar>
        <Link to="/main">Видео</Link>
        <Link to="/main">Текстовые Материалы</Link>
        <Link to="/about">Книги</Link>
        <Link to="/about">Офф-Топ</Link>
      </navbar>
    </div>
  );
}

export default Navbar;
