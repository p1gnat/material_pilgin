import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import LinkList from "../links/LinkList";
import Timer from "../timer/Timer";

function Navbar() {
  const location = useLocation();
  const pathName = location.pathname.toLowerCase();

  const linkChecker = () => {
    if (pathName === "/texts") {
      return "rgb(190, 190, 0)";
    } else if (pathName === "/main") {
      return "darkgreen";
    } else if (pathName === "/video") {
      return "darkgoldenrod";
    } else if (pathName.startsWith("/books")) {
      return "rgb(73, 0, 73)";
    } else if (pathName === "/other") {
      return "darkred";
    }
  };

  return (
    <div
      className={styles.navbar}
      style={{
        backgroundColor: linkChecker(),
        transition: "background-color 0.2s ease-in-out",
      }}
    >
      <LinkList />
      <Timer />
    </div>
  );
}

export default Navbar;
