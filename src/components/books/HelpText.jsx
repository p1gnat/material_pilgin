import React from "react";

function HelpText({ children }) {
  return (
    <div
      style={{
        fontSize: "26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--back-color)",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          marginBottom: "30px",
          backgroundColor: "var(--back-help-color)",
          display: "flex",
          maxWidth: "1000px",
          padding: "10px 20px",
          borderRadius: "20px",
          color: "var(--color)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default HelpText;
