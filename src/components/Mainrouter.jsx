import React from "react";
import { Routes, Route } from "react-router-dom";

import ViewTask from "./Tasks/ViewTask";
import axios from "axios";
import AddTodo from "./Tasks/AddTodo";

export const Axios = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

const Mainrouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddTodo />} />
        <Route path="/view-task" element={<ViewTask />} />
      </Routes>
    </div>
  );
};

export default Mainrouter;
