import React, { useState } from "react";
import "../CSS/ModelForm.css";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/TaskReducer/action";

export const ModalForm = ({ setAddTask, token }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handelSubmit = () => {
    // console.log(data, token);
    dispatch(addTask(data, token));
    setAddTask(false);
  };
  return (
    <div id="modalForm">
      <span
        style={{
          cursor: "pointer",
          textAlign: "right",
          color: "red",
          fontSize: "20px",
        }}
        onClick={() => {
          setAddTask(false);
        }}
      >
        close
      </span>
      <h1>Add Task</h1>
      <input
        type="text"
        placeholder="Add Title "
        id="modalTitle"
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <textarea
        placeholder="Add Description"
        id="modalDescription"
        onChange={(e) => setData({ ...data, description: e.target.value })}
      ></textarea>
      <button id="modalSubmit" onClick={handelSubmit}>
        Submit
      </button>
    </div>
  );
};
