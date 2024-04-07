import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { Taskpage } from "./Taskpage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Taskpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />    
    </Routes>
  );
};
