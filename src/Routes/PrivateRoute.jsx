import React, { useContext } from "react";
import { Navigate } from "react-router";
import AppContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AppContext);

  if (!authState.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
