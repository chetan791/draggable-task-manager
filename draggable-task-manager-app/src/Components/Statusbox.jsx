import React, { useState } from "react";
import "../CSS/Statusbox.css";
import { Task } from "./Task";
import { useDispatch } from "react-redux";
import { editTask } from "../Redux/TaskReducer/action";

export const Statusbox = ({ status, data, token }) => {
  let task = data.filter((item) => item.status === status);
  const dispatch = useDispatch();

  // const [ondrop, setondrop] = useState({});

  const handelDrop = (e) => {
    e.preventDefault();
    const droppedData = JSON.parse(e.dataTransfer.getData("application/json"));
    droppedData.status = status;
    // console.log({ status: droppedData.status });
    dispatch(editTask({ status: droppedData.status }, token, droppedData._id));
  };

  return (
    <div className="statusbox">
      <h2>{status}</h2>
      <div
        className="taskContainer"
        onDrop={handelDrop}
        onDragOver={(e) => {
          e.preventDefault();
          // Additional logic if needed
        }}
      >
        {task.map((item, i) => (
          <Task key={item._id} data={item} i={i} />
        ))}
        {task.length === 0 && <p>No task</p>}
      </div>
    </div>
  );
};
