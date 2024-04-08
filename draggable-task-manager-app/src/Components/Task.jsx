import React from "react";
import "../CSS/Task.css";

export const Task = ({ data, i }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("application/json", JSON.stringify(data));
    // console.log(data);
  };
  return (
    <div className="task" draggable={true} onDragStart={onDragStart}>
      <span className="title">{i + 1 + " - " + data.title}</span>
      <br />
      <span className="description">{data.description}</span>
    </div>
  );
};
