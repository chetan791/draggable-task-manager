import React from "react";
import "../CSS/Statusbox.css";
import { Task } from "./Task";

export const Statusbox = ({ status, data }) => {
  let task = data.filter((item) => item.status === status);

  return (
    <div className="statusbox">
      <h2>{status}</h2>
      <div className="taskContainer">
        {task.map((item) => (
          <Task key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};
