import React from "react";
import { Route, Routes } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetailsPage from "../pages/ProductDetailsPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/product/:id/view"
        element={
          <PrivateRoute>
            <ProductDetailsPage />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
