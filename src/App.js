import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Main from "./pages/Main";
import styles from "./styles/App.css";
import Texts from "./pages/Texts";
import Books from "./pages/Books";
import Other from "./pages/Other";
import LinkList from "./components/links/LinkList";
import { useEffect, useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.navbar}>
        <div className={styles.navbar__links}>
          <LinkList />
        </div>
      </div>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<Video />} />
        <Route path="/texts" element={<Texts />} />
        <Route path="/books" element={<Books />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
