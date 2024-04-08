import React, { useEffect, useState } from "react";
import { Statusbox } from "../Components/Statusbox";
import "../CSS/Taskpage.css";
import { useDispatch } from "react-redux";
import { getAllTasks } from "../Redux/TaskReducer/action";
import { useSelector } from "react-redux";
import { ModalForm } from "../Components/ModalForm";

export const Taskpage = () => {
  const dispatch = useDispatch();
  const [addTask, setAddTask] = useState(false);
  const token = useSelector((store) => store.auth.token);
  const loading = useSelector((store) => store.data.isLoading);
  const data = useSelector((store) => store.data.tasks);
  // console.log(data);
  let status = ["Task", "InProgress", "Done", "Rework"];

  useEffect(() => {
    dispatch(getAllTasks(token));
  }, []);

  //adding download logic
  const downloadHandler = async () => {
    try {
      const res = await fetch("http://localhost:8000/draggableTask/download/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/pdf",
        },
        responseType: "blob",
      });

      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "tasks.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Error downloading PDF", error);
    }
  };

  return (
    <>
      <div id="extraFeatures">
        <button className="buttons" onClick={() => setAddTask(true)}>
          Add Task
        </button>
        <button className="buttons" onClick={downloadHandler}>
          Download
        </button>
      </div>
      <div id="taskpage">
        {status.map((item, i) => (
          <Statusbox key={i} status={item} data={data} token={token} />
        ))}
      </div>
      {addTask && <ModalForm setAddTask={setAddTask} token={token} />}
      {loading && <h1 id="loading">Loading...</h1>}
    </>
  );
};
