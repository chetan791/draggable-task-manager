import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Private = ({ child }) => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const navigate = useNavigate();
  // console.log(child);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <div>{child}</div> : null;
};
