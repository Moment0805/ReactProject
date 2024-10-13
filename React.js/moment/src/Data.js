import React from "react";
import "./App.css";
const Data = ({ title, body }) => {
  return (
    <div className="accordion-item">
      <h5>{title}</h5>
      <p>{body}</p>
    </div>
  );
};

export default Data;
