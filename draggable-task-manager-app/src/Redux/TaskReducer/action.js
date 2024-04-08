import axios from "axios";
import {
  LOADTASK,
  LOADTASKFAILURE,
  LOADTASKSUCCESS,
  ADDTASK,
  EDITTASK,
  DELETETASK,
  EMPTYTALLTASK,
} from "../ActionTypes";

export const customAxios = axios.create({
  baseURL: "https://task-manager-app-backend.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllTasks = (details) => async (dispatch) => {
  dispatch({ type: LOADTASK });
  // console.log(details);
  try {
    const res = await customAxios.get("draggabletask/", {
      headers: {
        Authorization: "Bearer " + details,
      },
    });
    // console logging the data
    console.log(res.data);
    dispatch({ type: LOADTASKSUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOADTASKFAILURE, payload: error });
  }
};

export const addTask = (details, token) => async (dispatch) => {
  try {
    const res = await customAxios.post("draggabletask/create", details, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(res.data);
    dispatch({ type: ADDTASK, payload: res.data.data });
    alert("task added successfully");
  } catch (error) {
    console.log(error);
  }
};

export const editTask = (details, token, _id) => async (dispatch) => {
  console.log(details, token, _id, typeof details.status);
  try {
    const res = await customAxios.patch(
      `draggabletask/update/${_id}`,
      details,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(res.data);
    dispatch({ type: EDITTASK, payload: res.data.data });
    alert("task updated successfully");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id, token) => async (dispatch) => {
  console.log(id);
  try {
    const res = await customAxios.delete(`task/delete/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(res.data);
    dispatch({ type: DELETETASK, payload: res.data.task_id });
    alert("task deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

export const emptyAllTasks = () => async (dispatch) => {
  dispatch({ type: EMPTYTALLTASK });
};
