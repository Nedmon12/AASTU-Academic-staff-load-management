import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";

const mainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/books" element={<h2>boookkkksss</h2>} />
        <Route path="/staff" element={<h2>stafffffffff</h2>} />
      </Route>
    </Routes>
  );
};

export default mainRoutes;
