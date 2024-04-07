import React, { useEffect, useState } from "react";
import "../CSS/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.auth.isAuthenticated);

  const navigate = useNavigate();

  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });
  // console.log(logindata);
  const handelLogin = (e) => {
    e.preventDefault();
    // console.log("clicked");
    dispatch(login(logindata));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/taskpage");
    }
  }, [isAuth]);

  return (
    <div id="login">
      <div className="login wrap">
        <div className="h1">Login</div>
        <input
          onChange={(e) =>
            setlogindata({ ...logindata, email: e.target.value })
          }
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          placeholder="Email"
          id="email"
          name="email"
          type="text"
        />
        <input
          onChange={(e) =>
            setlogindata({ ...logindata, password: e.target.value })
          }
          placeholder="Password"
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

        <Link to={"/signup"}>
          <h6 style={{ textAlign: "center" }}>Don't have an account? Signup</h6>
        </Link>
      </div>
    </div>
  );
};
