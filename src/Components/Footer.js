import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    width: "100%",
    top: "89.5vh",
    border: "2px solid red",
  };
  return (
    <footer className="bg-dark text-light py-4" style={footerStyle}>
      <p className="text-center">Copyright &copy; JeetpalTodosList.com</p>
    </footer>
  );
};
