import axios from "axios";
import { LOGINFAILURE, LOGINSUCCESS, LOGOUT } from "../ActionTypes";

export const login = (details) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://task-manager-app-backend.onrender.com/user/login",
      details
    );
    if (res.error) {
      alert("login unsuccessful");
    } else {
      // console.log(res.data);
      if (res.data.msg === "wrong credentials") {
        alert("wrong credentials");
      } else {
        dispatch({ type: LOGINSUCCESS, payload: res.data });
        console.log(res.data);
        alert("login successful");
      }
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGINFAILURE, payload: error });
  }
};

export const signup = (details) => async (dispatch) => {
  // console.log(details);
  try {
    const res = await axios.post(
      "https://task-manager-app-backend.onrender.com/user/signup",
      details
    );
    console.log(res.data);
    if (res.data.msg === "user already exists please login") {
      alert("user already exists please login");
    } else {
      alert("signup successful");
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
