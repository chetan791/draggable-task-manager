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

  const [FilteredData, setFilteredData] = useState(null);
  console.log(FilteredData);

  // const handelfilter = (e) => {
  //   console.log(e.target.value);
  //   if (!e.target.value == "") {
  //     let filteredData = data.filter((item) => {
  //       return item.date.substring(0, 10) === e.target.value;
  //     });
  //     setFilteredData(filteredData);
  //     console.log(FilteredData);
  //   }
  // };

  useEffect(() => {
    dispatch(getAllTasks(token));
  }, []);

  //adding download logic
  const downloadHandler = async () => {
    try {
      const res = await fetch(
        "https://task-manager-app-backend.onrender.com/draggableTask/download/",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/pdf",
          },
          responseType: "blob",
        }
      );
      const pdfBlob = await res.blob();
      // console.log(pdfBlob);
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
        {/* <input type="date" onChange={handelfilter} /> */}
        <button className="buttons" onClick={downloadHandler}>
          Download
        </button>
      </div>
      <div id="taskpage">
        {status.map((item, i) => (
          <Statusbox
            key={i}
            status={item}
            data={FilteredData ? FilteredData : data}
            token={token}
          />
        ))}
      </div>
      {addTask && <ModalForm setAddTask={setAddTask} token={token} />}
      {loading && <h1 id="loading">Loading...</h1>}
    </>
  );
};
