import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../CSS/Login.css";
import { signup } from "../Redux/AuthReducer/action";
import { Link, useNavigate } from "react-router-dom";
export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupdata, setsignupdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  //   console.log(signupdata);
  const handelLogin = (e) => {
    e.preventDefault();
    if (signupdata.password !== signupdata.confirmpassword) {
      alert("passwords do not match");
    } else {
      // console.log("clicked");
      dispatch(signup(signupdata));
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };
  return (
    <div id="login">
      <div className="login wrap">
        <div className="h1">Signup</div>
        <input
          required
          onChange={(e) =>
            setsignupdata({ ...signupdata, name: e.target.value })
          }
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          placeholder="name"
          id="name"
          name="name"
          type="text"
        />

        <input
          required
          onChange={(e) =>
            setsignupdata({ ...signupdata, email: e.target.value })
          }
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          placeholder="Email"
          id="email"
          name="email"
          type="email"
        />
        <input
          required
          onChange={(e) =>
            setsignupdata({ ...signupdata, password: e.target.value })
          }
          placeholder="Password"
          id="password"
          name="password"
          type="password"
        />

        <input
          required
          onChange={(e) =>
            setsignupdata({ ...signupdata, confirmpassword: e.target.value })
          }
          placeholder="Confirm Password"
          id="password"
          name="password"
          type="password"
        />
        <input
          onClick={handelLogin}
          defaultValue="Login"
          className="btn"
          type="submit"
        />
        <Link to={"/login"}>
          {" "}
          <h6 style={{ textAlign: "center" }}>Already have an account?</h6>
        </Link>
      </div>
    </div>
  );
};
