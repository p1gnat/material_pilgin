import React from "react";
import styles from "./TextBlock.module.css";

function TextBlock({ children }) {
  const handleMouseOver = (event) => {
    event.currentTarget.style.backgroundColor = "rgb(54, 17, 54)";
  };

  const handleMouseOut = (event) => {
    event.currentTarget.style.backgroundColor = "";
  };

  return (
    <div
      id="check"
      className={styles.main}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </div>
  );
}

export default TextBlock;
