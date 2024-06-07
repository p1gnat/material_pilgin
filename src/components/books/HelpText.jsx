import React from "react";

function HelpText({ children }) {
  return (
    <div
      style={{
        marginTop: "50px",
        marginBottom: "30px",
        fontSize: "26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#232529",
          display: "flex",
          maxWidth: "1000px",
          padding: "10px 20px",
          borderRadius: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default HelpText;
