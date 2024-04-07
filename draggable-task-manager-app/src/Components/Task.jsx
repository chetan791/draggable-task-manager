import React from "react";
import "../CSS/Task.css";

export const Task = ({ data }) => {
  return (
    <div className="task">
      <span>{data.title}</span>
      <br />
      <span>{data.description}</span>
    </div>
  );
};
