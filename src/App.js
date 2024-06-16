import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Video from "./pages/Video";
import Main from "./pages/Main";
import Texts from "./pages/Texts";
import Books from "./pages/Books";
import Other from "./pages/Other";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import InnerBook from "./components/hardBook/InnerBook";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClickLight = () => {
    setTheme("light");
  };
  const handleClickDark = () => {
    setTheme("dark");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className={theme}>
              <Navbar />
              <Outlet />
              <Footer
                onClickLight={handleClickLight}
                onClickDark={handleClickDark}
              />
            </div>
          }
        >
          <Route path="/main" element={<Main />} />
          <Route path="/video" element={<Video />} />
          <Route path="/texts" element={<Texts />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<InnerBook />} />
          <Route path="/other" element={<Other />} />
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
