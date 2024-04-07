import React from "react";
import "../CSS/Task.css";

export const Task = ({ data }) => {
  return (
    <div className="task">
      <span className="title">{data.title}</span>
      <br />
      <span className="description">{data.description}</span>
    </div>
  );
};
