import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Taskpage } from "./Taskpage";
import { Private } from "../Components/Private";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/taskpage" element={<Private child={<Taskpage />} />} />
    </Routes>
  );
};
