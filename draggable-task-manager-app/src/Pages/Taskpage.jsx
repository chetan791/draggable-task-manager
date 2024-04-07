import React, { useEffect } from "react";
import { Statusbox } from "../Components/Statusbox";
import "../CSS/Taskpage.css";
import { useDispatch } from "react-redux";
import { getAllTasks } from "../Redux/TaskReducer/action";
import { useSelector } from "react-redux";

export const Taskpage = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.token);
  const loading = useSelector((store) => store.data.isLoading);
  const data = useSelector((store) => store.data.tasks);
  // console.log(data);
  let status = ["Task", "InProgress", "Done", "Rework"];

  useEffect(() => {
    dispatch(getAllTasks(token));
  }, []);

  return (
    <>
      <button id="addTask">Add Task</button>
      <div id="taskpage">
        {status.map((item, i) => (
          <Statusbox key={i} status={item} data={data} />
        ))}
      </div>
      {loading && <h1 id="loading">Loading...</h1>}
    </>
  );
};
