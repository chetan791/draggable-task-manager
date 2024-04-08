import React from "react";
import "../CSS/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/TasKQ.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/AuthReducer/action";
import { emptyAllTasks } from "../Redux/TaskReducer/action";

export const Navbar = () => {
  const { isAuthenticated, name } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(isAuthenticated, name);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(emptyAllTasks());
    alert("logged out successfully");
    navigate("/");
  };

  return (
    <nav id="navbar">
      {isAuthenticated ? (
        <div>
          <img src={logo} alt="logo" />
        </div>
      ) : (
        <Link to={"/"}>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Link>
      )}

      <ul>
        {isAuthenticated ? (
          <li onClick={handleLogout}>{`( ${name} ) Logout`}</li>
        ) : (
          <Link to="/">
            <li>Login</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};
